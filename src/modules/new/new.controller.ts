import { createMessage } from '@/db/messages'
import { MessageFormDataSchema } from '@/schemas/message.schema'
import type e from 'express'
import { HttpStatus } from 'http-status-ts'
import * as v from 'valibot'

export function showNewMessagePage(req: e.Request, res: e.Response) {
  res.render('new', {
    title: 'New Message',
    navigation: {
      href: '/',
      name: 'Home',
      icon_name: 'mdi:home'
    }
  })
}

export function handleNewMessage(req: e.Request, res: e.Response) {
  try {
    const submittedUser = req.body.user as string
    const submittedText = req.body.message as string

    const submittedMessage = {
      user: submittedUser,
      text: submittedText
    }

    const newMessage = v.parse(MessageFormDataSchema, submittedMessage)

    createMessage({ ...newMessage, added: new Date() })

    res.redirect('/')
  } catch (error) {
    if (v.isValiError(error)) {
      const issues = v.flatten(error.issues).nested

      res.status(HttpStatus.BAD_REQUEST).render('new', {
        error: {
          user: issues!.user,
          message: issues!.text
        },
        title: 'New Message',
        navigation: {
          href: '/',
          name: 'Home',
          icon_name: 'mdi:home'
        }
      })
    }
  }
}
