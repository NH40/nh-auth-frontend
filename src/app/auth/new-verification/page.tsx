import type { Metadata } from 'next'

import NewVerificationForm from '@/features/auth/components/NewVerificationForm'

export const metadata: Metadata = {
	title: 'Подтверждение почты'
}

export default function NewVerificationPage() {
	return <NewVerificationForm />
}