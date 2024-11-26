import { api } from '@/shared/api'

import { AUTH_API_URL } from '../constants/api-url.constant'
import { TypeNewPasswordSchema, TypeResetPasswordSchema } from '../schemes'
import { IUser } from '../types'

class PasswordRecoveryService {
	public async reset(body: TypeResetPasswordSchema, recaptcha?: string) {
		const headers = recaptcha ? { recaptcha } : undefined

		const response = await api.post<IUser>(AUTH_API_URL.passwordReset, body, {
			headers
		})

		return response
	}

	public async new(
		body: TypeNewPasswordSchema,
		token: string | null,
		recaptcha?: string
	) {
		const headers = recaptcha ? { recaptcha } : undefined

		const response = await api.post<IUser>(
			`${AUTH_API_URL.passwordNew}/${token}`,
			body,
			{
				headers
			}
		)

		return response
	}
}

export const passwordRecoveryService = new PasswordRecoveryService()
