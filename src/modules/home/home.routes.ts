import e from 'express'
import { showHomePage } from './home.controller'

const home_routes = e.Router()

home_routes.get('/', showHomePage)

export default home_routes
