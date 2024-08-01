/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpError, InternalServerError } from '@/errors'
import type e from 'express'

function error_handler(
  err: unknown,
  req: e.Request,
  res: e.Response,
  next: e.NextFunction
) {
  if (err instanceof HttpError) {
    if (err instanceof InternalServerError) {
      console.error(err)
    }

    res.status(err.statusCode).json({
      error: {
        statusCode: err.statusCode,
        message: err.message,
        cause: err.cause
      }
    })
  } else {
    console.error(err)
  }
}

export default error_handler
