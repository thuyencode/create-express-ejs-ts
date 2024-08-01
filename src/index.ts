import e from 'express'
import { getPublicPath, getViewsPath } from './libs/utils'
import { error_handler, undefined_routes_handler } from './middlewares'
import { home_routes } from './modules/home'
import { new_routes } from './modules/new'

const app = e()

// Setup EJS view
app.set('view engine', 'ejs')
app.set('views', getViewsPath())

// Body parser middleware
app.use(e.json())
app.use(e.urlencoded({ extended: true }))

// Setup static folder
app.use(e.static(getPublicPath()))

// Define routes
app.use(home_routes)
app.use(new_routes)

// Handle undefined routes
app.use(undefined_routes_handler)

// Error catcher
app.use(error_handler)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
