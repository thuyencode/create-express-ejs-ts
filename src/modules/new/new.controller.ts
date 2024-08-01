import { createMessage } from '@/db/messages'
import type e from 'express'
import { HttpStatus } from 'http-status-ts'

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
  const submittedUser = (req.body.user as string) || undefined
  const submittedMessage = (req.body.message as string) || undefined

  let error: string | undefined

  if (submittedUser === undefined || submittedUser.length <= 3) {
    error = "'User' needs to be longer than 3 characters"
  }

  if (submittedMessage === undefined || submittedMessage.length <= 3) {
    error = "'Message' needs to be longer than 3 characters"
  }

  if (
    (submittedUser === undefined || submittedUser.length <= 3) &&
    (submittedMessage === undefined || submittedMessage.length <= 3)
  ) {
    error = "Both 'User' and 'Message' need to be longer than 3 characters"
  }

  if (error === undefined) {
    createMessage({
      text: submittedMessage as string,
      user: submittedUser as string,
      added: new Date()
    })

    res.redirect('/')

    return
  }

  res.status(HttpStatus.BAD_REQUEST).render('new', {
    error,
    title: 'New Message',
    navigation: {
      href: '/',
      name: 'Home',
      icon_name: 'mdi:home'
    }
  })
}
