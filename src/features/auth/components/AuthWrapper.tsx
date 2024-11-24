import Link from 'next/link'
import { FC, type PropsWithChildren } from 'react'

import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/shared/components/ui'

import { AuthWrapperProps } from '../types/auth.types'

import AuthSocial from './AuthSocial'

const AuthWrapper: FC<PropsWithChildren<AuthWrapperProps>> = ({
	children,
	heading,
	description,
	backButtonHref,
	backButtonLabel,
	isShowSocialMedia = false
}) => {
	return (
		<Card className='w-[400px]'>
			<CardHeader className='space-y-2'>
				<CardTitle>{heading}</CardTitle>
				{description && <CardDescription>{description}</CardDescription>}
			</CardHeader>
			<CardContent>
				{isShowSocialMedia && <AuthSocial />}
				{children}
			</CardContent>
			<CardFooter>
				{backButtonHref && backButtonLabel && (
					<Button variant='link' className='w-full font-normal'>
						<Link href={backButtonHref}>{backButtonLabel}</Link>
					</Button>
				)}
			</CardFooter>
		</Card>
	)
}

export default AuthWrapper
