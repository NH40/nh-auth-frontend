import type { Metadata } from 'next'

import { ToggleTheme } from '@/shared/components/ui'
import { MainProvider } from '@/shared/providers'

import '../shared/styles/globals.css'

export const metadata: Metadata = {
	title: {
		absolute: 'NH Авторизация',
		template: '%s | NH Авторизация'
	},
	icons: '/logo 2.png',
	description:
		'Это проект, созданный для полного цикла авторизации пользователей и будет переиспользоваться в других проектах'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru' suppressHydrationWarning>
			<body suppressHydrationWarning>
				<MainProvider>
					<div className='relative flex min-h-screen flex-col'>
						<ToggleTheme />
						<div className='flex h-screen w-full items-center justify-center px-4'>
							{children}
						</div>
					</div>
				</MainProvider>
			</body>
		</html>
	)
}
