import type e from 'express'

function newController(req: e.Request, res: e.Response) {
  res.render('new', {
    title: 'New Message',
    navigation: {
      href: '/',
      name: 'Home',
      icon_name: 'mdi:home'
    }
  })
}

export default newController
