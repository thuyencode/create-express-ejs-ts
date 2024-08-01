import path from 'path'
import { __dirname } from './constants'

/**
 * Get the path to the `public` folder or the files in it
 *
 * @export
 * @param {string} [fileName=''] Leave it empty to only get the `public` folder path
 * @returns {string}
 */
export function getPublicPath(fileName: string = '') {
  return path.join(path.dirname(__dirname), 'public', fileName)
}

/**
 * Get the path to the `views` folder or the files in it
 *
 * @export
 * @param {string} [fileName=''] Leave it empty to only get the `views` folder path
 * @returns {string}
 */
export function getViewsPath(fileName: string = '') {
  return path.join(path.dirname(__dirname), 'views', fileName)
}
