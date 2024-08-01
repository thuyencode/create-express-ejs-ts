import type { Message } from '@/libs/types'

const messages = new Map<number, Message>()

/**
 * Get all messages
 *
 * @export
 * @returns {Message[]}
 */
export function getMessages(): Message[] {
  return [...messages.values()]
}

/**
 * Get one message by its id
 *
 * @export
 * @param {number} id
 * @returns {(Message | undefined)}
 */
export function getMessageById(id: number): Message | undefined {
  return messages.get(id)
}

/**
 * Create a new message
 *
 * @export
 * @param {Omit<Message, 'userId'>} message
 * @returns {Message}
 */
export function createMessage(message: Omit<Message, 'user_id'>): Message {
  const user_id = messages.size + 1
  const newMessage: Message = { ...message, user_id }

  messages.set(user_id, newMessage)

  return newMessage
}
