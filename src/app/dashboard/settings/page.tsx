import type { Metadata } from 'next'

import { SettingsForm } from '@/features/user/components/SettingsForm'

export const metadata: Metadata = {
	title: 'SettingsPage'
}

export default function SettingsPage() {
	return <SettingsForm />
}
