"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Common_Fixture = (function () {
    function Common_Fixture(model) {
        this.model = model;
    }
    Common_Fixture.prototype.populate = function () {
        return this.model.Sample.create({
            name: "This is a sample",
        });
    };
    return Common_Fixture;
}());
exports.Common_Fixture = Common_Fixture;
//# sourceMappingURL=common-fixture.js.map