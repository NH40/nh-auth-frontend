import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { URL_CONST } from '@/shared/constants'
import { toastMessageHandler } from '@/shared/utils'

import { TypeLoginSchema } from '../schemes'
import { authService } from '../services'

export function useLoginMutation() {
	const router = useRouter()

	const { mutate: login, isPending: isLoadingLogin } = useMutation({
		mutationKey: ['login user'],
		mutationFn: ({
			values,
			recaptcha
		}: {
			values: TypeLoginSchema
			recaptcha: string
		}) => authService.login(values, recaptcha),
		onSuccess(data: any) {
			if (data.message) {
				toastMessageHandler(data)
				// setIsShowFactor(true)
			} else {
				toast.success('Успешная авторизация')
				router.push(URL_CONST.settings)
			}
		},
		onError(error) {
			toastMessageHandler(error)
		}
	})

	return { login, isLoadingLogin }
}