import { getMessages } from '@/db/messages'
import type e from 'express'

function homeController(req: e.Request, res: e.Response) {
  res.render('index', {
    navigation: {
      href: '/new',
      name: 'New Message',
      icon_name: 'mdi:message-add'
    },
    messages: getMessages().length ? getMessages() : undefined
  })
}

export default homeController
