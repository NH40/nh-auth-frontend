import { URL_CONST } from '@/shared/constants/url.constant'

import { AuthWrapperProps } from '../types/auth.types'

export const REGISTER_WRAPPER_CONSTANT: AuthWrapperProps = {
	heading: 'Регистрация',
	description: 'Чтобы войти на сайт введите ваш email и пароль',
	backButtonHref: URL_CONST.login,
	backButtonLabel: 'Уже есть аккаунт? Войти',
	isShowSocialMedia: true
}
