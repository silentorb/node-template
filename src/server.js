"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lawn = require("vineyard-lawn");
var general = require('../config/general.json');
var endpoint = require("./endpoints");
var Sequelize = require("sequelize");
var modeling = require("./model");
var secret = require('../config/secrets.json');
var Server = (function () {
    function Server() {
        this.server = new lawn.Server();
    }
    Server.prototype.initialize_database = function () {
        this.db = new Sequelize(secret.database);
        this.modeler = modeling.create(this.db);
        this.model = Object.assign({
            db: this.db
        }, this.modeler.collections);
    };
    Server.prototype.start = function () {
        this.initialize_database();
        endpoint.initialize(this.server.get_app());
        return this.server.start(general.api);
    };
    Server.prototype.get_db = function () {
        return this.db;
    };
    Server.prototype.get_model = function () {
        return this.model;
    };
    Server.prototype.get_ground = function () {
        return this.modeler;
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map