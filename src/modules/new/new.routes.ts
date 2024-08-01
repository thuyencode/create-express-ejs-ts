import e from 'express'
import newController from './new.controller'

const new_routes = e.Router()

new_routes.get('/new', newController)

export default new_routes
