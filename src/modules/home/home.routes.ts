import e from 'express'
import homeController from './home.controller'

const home_routes = e.Router()

home_routes.get('/', homeController)

export default home_routes
