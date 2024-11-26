import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { authService } from '@/features/auth/services'

import { URL_CONST } from '@/shared/constants'
import { toastMessageHandler } from '@/shared/utils'

export function useLogoutMutation() {
	const router = useRouter()

	const { mutate: logout, isPending: isLoadingLogout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess() {
			toast.success('Вы успешно вышли из системы')
			router.push(URL_CONST.login)
		},
		onError(error) {
			toastMessageHandler(error)
		}
	})

	return { logout, isLoadingLogout }
}
