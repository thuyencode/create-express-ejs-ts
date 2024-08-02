import * as v from 'valibot'

export const MessageFormDataSchema = v.object({
  user: v.pipe(
    v.string(),
    v.minLength(3, '"User" must be longer than 3 character')
  ),
  text: v.pipe(
    v.string(),
    v.minLength(3, '"Message" must be longer than 3 character')
  )
})

export type MessageFormData = v.InferOutput<typeof MessageFormDataSchema>
