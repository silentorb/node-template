"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vineyard_ground_1 = require("vineyard-ground");
var vineyard_schema_1 = require("vineyard-schema");
function create(db) {
    var schema = new vineyard_schema_1.Schema(require('./schema.json'));
    var modeler = new vineyard_ground_1.Modeler(db, schema);
    modeler.collections['db'] = db;
    return modeler;
}
exports.create = create;
//# sourceMappingURL=index.js.map