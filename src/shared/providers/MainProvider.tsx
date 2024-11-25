'use client'

import { type PropsWithChildren, useEffect, useState } from 'react'

import { TanstackQueryProvider } from './TanstackQueryProvider'
import { ThemeProvider } from './ThemeProvider'
import ToastProvider from './ToastProvider'

export function MainProvider({ children }: PropsWithChildren<unknown>) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<TanstackQueryProvider>
			<ThemeProvider
				attribute='class'
				defaultTheme='light'
				disableTransitionOnChange
				storageKey='hn-auth'
			>
				<ToastProvider />
				{children}
			</ThemeProvider>
		</TanstackQueryProvider>
	)
}
