import e from 'express'
import { handleNewMessage, showNewMessagePage } from './new.controller'

const new_routes = e.Router()

new_routes.get('/new', showNewMessagePage)

new_routes.post('/new', handleNewMessage)

export default new_routes
