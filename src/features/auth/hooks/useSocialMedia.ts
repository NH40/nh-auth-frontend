import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { authService } from '../services'
import { TOauth } from '../types/oauth.type'

export const useSocialMedia = () => {
	const router = useRouter()

	const { mutateAsync } = useMutation({
		mutationKey: ['oauth by provider'],
		mutationFn: async (provider: TOauth) =>
			await authService.oauthByProvider(provider)
	})

	const onClick = async (provider: TOauth) => {
		const response = await mutateAsync(provider)

		if (response) {
			router.push(response.url)
		}
	}

	return { onClick }
}
