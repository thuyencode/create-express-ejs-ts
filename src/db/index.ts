import type { Message } from '@/libs/types'

const messages = new Map<number, Message>([
  [
    1,
    {
      userId: 1,
      text: 'Hi there!',
      user: 'Amando',
      added: new Date()
    }
  ],
  [
    2,
    {
      userId: 2,
      text: 'Hello World!',
      user: 'Charles',
      added: new Date()
    }
  ]
])

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
export function createMessage(message: Omit<Message, 'userId'>): Message {
  const userId = messages.size + 1
  const newMessage: Message = { userId, ...message }

  messages.set(userId, newMessage)

  return newMessage
}
