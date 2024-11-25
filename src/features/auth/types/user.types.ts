export const UserRoles = {
	User: 'USER',
	Admin: 'ADMIN'
} as const

export type UserRoleType = (typeof UserRoles)[keyof typeof UserRoles]

export const AuthMethods = {
	Credentials: 'CREDENTIALS',
	Google: 'GOOGLE',
	Yandex: 'YANDEX'
} as const

export type AuthMethodType = (typeof AuthMethods)[keyof typeof AuthMethods]

export interface IAccount {
	id: string
	createdAt: string
	updatedAt: string
	type: string
	provider: string
	refreshToken: string
	accessToken: string
	expiresAt: number
	userId: string
}

export interface IUser {
	id: string
	createdAt: string
	updatedAt: string
	email: string
	password: string
	displayName: string
	picture: string
	role: UserRoleType
	isVerified: boolean
	isTwoFactorEnabled: boolean
	method: AuthMethodType
	accounts: IAccount[]
}
