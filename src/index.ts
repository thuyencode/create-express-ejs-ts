import e from 'express'
import { getPublicPath, getViewsPath } from './libs/utils'
import { error_handler, undefined_routes_handler } from './middlewares'

const app = e()

// Setup EJS view
app.set('view engine', 'ejs')
app.set('views', getViewsPath())

// Body parser middleware
app.use(e.json())
app.use(e.urlencoded({ extended: false }))

// Setup static folder
app.use(e.static(getPublicPath()))

// Handle undefined routes
app.use(undefined_routes_handler)

// Error catcher
app.use(error_handler)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
