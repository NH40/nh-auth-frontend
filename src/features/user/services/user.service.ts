import { IUser } from '@/features/auth/types'

import { api } from '@/shared/api'

import { USER_API_URL } from '../constants/api-user.constant'
import { TypeSettingsSchema } from '../schemes'

class UserService {
	public async findProfile() {
		const response = await api.get<IUser>(USER_API_URL.profile)

		return response
	}

	public async updateProfile(body: TypeSettingsSchema) {
		const response = await api.patch<IUser>(USER_API_URL.profile, body)

		return response
	}
}

export const userService = new UserService()
