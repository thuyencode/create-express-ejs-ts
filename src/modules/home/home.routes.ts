import e from 'express'

const home_routes = e.Router()

home_routes.get('/', (req, res) => {
  res.render('index')
})

export default home_routes
