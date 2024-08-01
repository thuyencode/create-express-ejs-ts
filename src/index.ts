import e from 'express'
import { getViewsPath } from './libs/utils'
import { error_handler, undefined_routes_handler } from './middlewares'

const app = e()

// Setup EJS view
app.set('view engine', 'ejs')
app.set('views', getViewsPath())

// Body parser middleware
app.use(e.json())
app.use(e.urlencoded({ extended: false }))

// Handle undefined routes
app.use(undefined_routes_handler)

// Error catcher
app.use(error_handler)
