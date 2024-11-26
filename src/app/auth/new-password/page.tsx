import type { Metadata } from 'next'

import { NewPasswordForm } from '@/features/auth/components/NewPasswordForm'

export const metadata: Metadata = {
	title: 'Новый пароля'
}

export default function NewPasswordPage() {
	return <NewPasswordForm />
}
