"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lawn = require("vineyard-lawn");
var vineyard_lawn_1 = require("vineyard-lawn");
function initialize(app) {
    lawn.create_endpoints(app, [
        {
            method: vineyard_lawn_1.Method.get,
            path: "sample",
            action: function (request) {
                return Promise.resolve();
            }
        },
    ]);
}
exports.initialize = initialize;
//# sourceMappingURL=endpoints.js.map