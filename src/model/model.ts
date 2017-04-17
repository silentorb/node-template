import {Collection} from 'vineyard-ground'
import sequelize = require("sequelize");
import {Sample} from './types'

export interface Model {
  Sample: Collection<Sample>

  db: sequelize.Sequelize
}