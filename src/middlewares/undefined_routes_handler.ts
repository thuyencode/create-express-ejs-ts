import { NotFound } from '@/errors'
import type e from 'express'

function undefined_routes_handler(
  req: e.Request,
  res: e.Response,
  next: e.NextFunction
) {
  next(new NotFound())
}

export default undefined_routes_handler
