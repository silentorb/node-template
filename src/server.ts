import * as lawn from 'vineyard-lawn'
const general = require('../config/general.json')
import * as endpoint from './endpoints'
import * as Sequelize from 'sequelize'
import * as modeling from './model'
import {Model} from "./model";
import {Modeler} from "vineyard-ground";

const secret = require('../config/secrets.json')

export class Server {
  private server: lawn.Server
  private db
  private modeler
  private model

  constructor() {
    this.server = new lawn.Server()
  }

  initialize_database() {
    this.db = new Sequelize(secret.database)
    this.modeler = modeling.create(this.db)
    this.model = Object.assign({
      db: this.db
    }, this.modeler.collections)
  }

  start() {
    this.initialize_database()
    endpoint.initialize(this.server.get_app())
    return this.server.start(general.api)
  }

  get_db() {
    return this.db
  }

  get_model(): Model {
    return this.model
  }

  get_ground(): Modeler {
    return this.modeler
  }
}