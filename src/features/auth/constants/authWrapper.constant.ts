import { URL_CONST } from '@/shared/constants'

import { AuthWrapperProps } from '../types/auth.types'

export const REGISTER_WRAPPER_CONSTANT: AuthWrapperProps = {
	heading: 'Регистрация',
	description: 'Чтобы войти на сайт введите ваш email и пароль',
	backButtonHref: URL_CONST.login,
	backButtonLabel: 'Уже есть аккаунт? Войти',
	isShowSocialMedia: true
}

export const LOGIN_WRAPPER_CONSTANT: AuthWrapperProps = {
	heading: 'Войти',
	description: 'Чтобы войти в аккаунт введите ваш email и пароль',
	backButtonHref: URL_CONST.register,
	backButtonLabel: 'Еще нет аккаунта? Регистрация',
	isShowSocialMedia: true
}
