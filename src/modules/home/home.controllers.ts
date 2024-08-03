import expressAsyncHandler from 'express-async-handler'
import { getMessages } from './home.services'

export const showHomePage = expressAsyncHandler(async (req, res) => {
  const messages = await getMessages()

  res.render('index', {
    title: 'Home',
    navigation: {
      href: '/new',
      name: 'New Message',
      icon_name: 'mdi:message-add'
    },
    messages: messages.length !== 0 ? messages : undefined
  })
})
