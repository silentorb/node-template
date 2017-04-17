import * as lawn from 'vineyard-lawn'
import {Method, HTTP_Error, Bad_Request} from 'vineyard-lawn'

export function initialize(app) {
 
  lawn.create_endpoints(app, [

    {
      method: Method.get,
      path: "sample",
      action: function(request) {
        return Promise.resolve()
      }
    },

  ])
}
