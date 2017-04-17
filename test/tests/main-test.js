"use strict";
var server_1 = require("../../src/server");
var common_fixture_1 = require("../fixtures/common-fixture");
require('source-map-support').install();
var server;
var fixture;
describe('main-test', function () {
    this.timeout(4000);
    before(function () {
        server = new server_1.Server();
        return server.start()
            .then(function () {
            fixture = new common_fixture_1.Common_Fixture(server.get_model());
        });
    });
    beforeEach(function () {
        return server.get_ground().regenerate();
    });
    it('some test', function () {
        return fixture.populate();
    });
});
//# sourceMappingURL=main-test.js.map