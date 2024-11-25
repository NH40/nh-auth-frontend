'use client'

import { useSearchParams } from 'next/navigation'
import { FC, useEffect } from 'react'

import { Loading } from '@/shared/components/ui'

import { useVerificationMutation } from '../hooks'

import AuthWrapper from './AuthWrapper'

const NewVerificationForm: FC = () => {
	const searchParams = useSearchParams()
	const token = searchParams.get('token')

	const { verification } = useVerificationMutation()

	useEffect(() => {
		verification(token)
	}, [token])

	return (
		<AuthWrapper heading='Подтверждение почты'>
			<div>
				<Loading />
			</div>
		</AuthWrapper>
	)
}

export default NewVerificationForm
