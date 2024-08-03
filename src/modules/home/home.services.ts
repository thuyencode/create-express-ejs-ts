import { selectAllMessages, type Message } from '@/db/messages.db'

export async function getMessages(): Promise<Message[]> {
  const messages = await selectAllMessages()

  return messages
}
