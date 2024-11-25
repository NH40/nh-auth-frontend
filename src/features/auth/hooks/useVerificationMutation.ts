import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { URL_CONST } from '@/shared/constants'

import { verificationService } from '../services'

export function useVerificationMutation() {
	const router = useRouter()

	const { mutate: verification } = useMutation({
		mutationKey: ['new verification'],
		mutationFn: (token: string | null) =>
			verificationService.newVerification(token),
		onSuccess() {
			toast.success('Почта успешно подтверждена')
			router.push(URL_CONST.settings)
		},
		onError() {
			router.push(URL_CONST.login)
		}
	})

	return { verification }
}
