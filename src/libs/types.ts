import type { MessageFormData } from '@/schemas/message.schema'

export type Message = MessageFormData & { user_id: number; added: Date }
