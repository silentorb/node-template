import {Modeler} from 'vineyard-ground'
import {Schema} from 'vineyard-schema'

export * from './model'

export function create(db) {
    const schema = new Schema(require('./schema.json'))
    const modeler = new Modeler(db, schema)
    modeler.collections['db'] = db
    return modeler
}