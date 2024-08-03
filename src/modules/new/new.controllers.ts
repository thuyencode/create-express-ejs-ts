import type e from 'express'
import { HttpStatus } from 'http-status-ts'
import * as v from 'valibot'
import { createMessage } from './new.services'

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
    const submittedUsername = (req.body.username || '') as string
    const submittedText = (req.body.message || '') as string

    createMessage(submittedUsername, submittedText)

    res.redirect('/')
  } catch (error) {
    if (v.isValiError(error)) {
      const issues = v.flatten(error.issues).nested

      res.status(HttpStatus.BAD_REQUEST).render('new', {
        error: {
          username: issues!.username,
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
