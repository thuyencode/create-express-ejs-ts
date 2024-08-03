import { insertMessage } from '@/db/messages.db'
import {
  MessageFormDataSchema,
  type MessageFormData
} from '@/schemas/message.schema'
import * as v from 'valibot'

export function createMessage(username: string, text: string) {
  const newMessage: MessageFormData = {
    username: username.trim(),
    text: text.trim()
  }

  const validatedMessage = v.parse(MessageFormDataSchema, newMessage)

  insertMessage({ ...validatedMessage, added: new Date() })
}
