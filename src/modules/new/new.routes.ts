import e from 'express'

const new_routes = e.Router()

new_routes.get('/new', (req, res) => {
  res.render('new', {
    navigation: {
      href: '/',
      name: 'Home',
      icon_name: 'mdi:home'
    }
  })
})

export default new_routes
