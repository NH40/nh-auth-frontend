import { api } from '@/shared/api'

import { AUTH_API_URL } from '../constants/api-url.constant'
import { TypeLoginSchema, TypeRegisterSchema } from '../schemes'
import { IUser } from '../types'

class AuthService {
	public async register(body: TypeRegisterSchema, recaptcha?: string) {
		const headers = recaptcha ? { recaptcha } : undefined

		const response = await api.post<IUser>(AUTH_API_URL.register, body, {
			headers
		})

		return response
	}

	public async login(body: TypeLoginSchema, recaptcha?: string) {
		const headers = recaptcha ? { recaptcha } : undefined

		const response = await api.post<IUser>(AUTH_API_URL.login, body, {
			headers
		})

		return response
	}

	public async oauthByProvider(provider: 'google' | 'yandex') {
		const response = await api.get<{ url: string }>(
			`${AUTH_API_URL.connect}/${provider}`
		)

		return response
	}

	public async logout() {
		const response = await api.post(AUTH_API_URL.logout)

		return response
	}
}

export const authService = new AuthService()
