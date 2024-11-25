import { z } from 'zod'

export const LoginSchema = z.object({
	name: z.string().min(1, {
		message: 'Введите имя'
	}),
	email: z.string().email({
		message: 'Некорректная почта'
	}),
	password: z.string().min(6, {
		message: 'Пароль минимум 6 символов'
	}),
	code: z.optional(z.string())
})

export type TypeLoginSchema = z.infer<typeof LoginSchema>
