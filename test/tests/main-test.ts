import {Server} from "../../src/server";
import {Common_Fixture} from "../fixtures/common-fixture"
require('source-map-support').install()

let server
let fixture

describe('main-test', function() {
  this.timeout(4000)

  before(function() {
    server = new Server()
    return server.start()
      .then(() => {
        fixture = new Common_Fixture(server.get_model())
      })
  })

  beforeEach(function() {
    return server.get_ground().regenerate()
  })

  it('some test', function() {
    return fixture.populate()
  })

})