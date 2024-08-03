import * as v from 'valibot'

export const MessageFormDataSchema = v.object({
  username: v.pipe(
    v.string(),
    v.minLength(3, '"User" must be longer than 3 character'),
    v.maxLength(255, '"User" must not exceeds 255 character')
  ),
  text: v.pipe(
    v.string(),
    v.minLength(3, '"Message" must be longer than 3 character'),
    v.maxLength(255, '"Message" must not exceeds 255 character')
  )
})

export type MessageFormData = v.InferOutput<typeof MessageFormDataSchema>
