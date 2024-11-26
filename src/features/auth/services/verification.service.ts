import { api } from '@/shared/api'

import { AUTH_API_URL } from '../constants/api-url.constant'

class VerificationService {
	public async newVerification(token: string | null) {
		const response = await api.post(AUTH_API_URL.verification, { token })

		return response
	}
}

export const verificationService = new VerificationService()
