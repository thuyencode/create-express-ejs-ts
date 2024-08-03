import type { MessageFormData } from '@/schemas/message.schema'
import pool from './pool'

export type Message = MessageFormData & { id: number; added: Date }

/**
 * Get all messages
 *
 * @export
 * @async
 * @returns {Promise<Message[]>}
 */
export async function selectAllMessages(): Promise<Message[]> {
  const { rows }: { rows: Message[] } = await pool.query(
    'SELECT * FROM messages'
  )

  return rows
}

/**
 * Get one message by its id
 *
 * @export
 * @param {number} id
 * @returns {Promise<Message | undefined>}
 */
export async function selectMessageById(
  id: number
): Promise<Message | undefined> {
  const { rows }: { rows: Message[] } = await pool.query(
    'SELECT * FROM messages WHERE id = $1',
    [id]
  )

  return rows[0]
}

/**
 * Insert a new message
 *
 * @export
 * @async
 * @param {Omit<Message, 'id'>} message
 * @returns {Promise<void>}
 */
export async function insertMessage(
  message: Omit<Message, 'id'>
): Promise<void> {
  await pool.query(
    'INSERT INTO messages (username, text, added) VALUES ($1, $2, $3)',
    [message.username, message.text, message.added.toISOString()]
  )
}
