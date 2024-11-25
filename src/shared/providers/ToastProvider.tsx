'use client'

import { FC } from 'react'

import { Toaster } from '../components/ui'

const ToastProvider: FC = () => {
	return <Toaster position='bottom-right' duration={6000} />
}

export default ToastProvider
