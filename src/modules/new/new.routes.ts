import e from 'express'

const new_routes = e.Router()

new_routes.get('/new', (req, res) => {
  res.render('new')
})

export default new_routes
