import e from 'express'

const home_routes = e.Router()

home_routes.get('/', (req, res) => {
  res.render('index', {
    navigation: {
      href: '/new',
      name: 'New Message',
      icon_name: 'mdi:message-add'
    }
  })
})

export default home_routes
