'use client'

import { FC } from 'react'
import { FaGoogle, FaYandex } from 'react-icons/fa'

import { Button } from '@/shared/components/ui'

import { useSocialMedia } from '../hooks'

const AuthSocial: FC = () => {
	const { onClick } = useSocialMedia()

	return (
		<>
			<div className='grid grid-cols-2 gap-6'>
				<Button variant='outline' onClick={() => onClick('google')}>
					<FaGoogle className='mr-2 size-4' />
					Google
				</Button>
				<Button variant='outline' onClick={() => onClick('yandex')}>
					<FaYandex className='mr-2 size-4' />
					Яндекс
				</Button>
			</div>
			<div className='relative mb-2 space-y-4'>
				<div className='absolute inset-0 flex items-center'>
					<span className='w-full border-t' />
				</div>
				<div className='relative flex justify-center text-xs uppercase'>
					<span className='bg-background px-2 text-muted-foreground'>Или</span>
				</div>
			</div>
		</>
	)
}

export default AuthSocial
