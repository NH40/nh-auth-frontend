'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { FC, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from '@/shared/components/ui'
import { GOOGLE_RECAPTCHA_SITE_KEY, URL_CONST } from '@/shared/constants'

import { LOGIN_WRAPPER_CONSTANT } from '../constants/authWrapper.constant'
import { useLoginMutation } from '../hooks'
import { LoginSchema, TypeLoginSchema } from '../schemes'

import AuthWrapper from './AuthWrapper'

const LoginForm: FC = () => {
	const { theme } = useTheme()
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)
	const [isShowTwoFactor, setIsShowTwoFactor] = useState<boolean>(false)

	const form = useForm<TypeLoginSchema>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: '',
			code: ''
		}
	})

	const { login, isLoadingLogin } = useLoginMutation(setIsShowTwoFactor)

	const onSubmit = (values: TypeLoginSchema) => {
		if (recaptchaValue) {
			login({ values, recaptcha: recaptchaValue })
		} else {
			toast.error('Пожалуйста, подтвердите что вы не робот')
		}
	}

	return (
		<AuthWrapper {...LOGIN_WRAPPER_CONSTANT}>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='grid gap-2 space-y-2'
				>
					{isShowTwoFactor && (
						<FormField
							control={form.control}
							name='code'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Код</FormLabel>
									<FormControl>
										<Input
											type='text'
											placeholder='123456'
											disabled={isLoadingLogin}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					)}
					{!isShowTwoFactor && (
						<>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Почта</FormLabel>
										<FormControl>
											<Input
												disabled={isLoadingLogin}
												type='email'
												placeholder='ivan@example.com'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='password'
								render={({ field }) => (
									<FormItem>
										<div className='flex items-center justify-between'>
											<FormLabel>Пароль</FormLabel>
											<Link
												href={URL_CONST.resetPassword}
												className='ml-auto inline-block text-sm underline'
											>
												Забыли пароль?
											</Link>
										</div>
										<FormControl>
											<Input
												placeholder='******'
												disabled={isLoadingLogin}
												type='password'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</>
					)}
					<div className='flex justify-center'>
						<ReCAPTCHA
							sitekey={GOOGLE_RECAPTCHA_SITE_KEY}
							onChange={setRecaptchaValue}
							theme={theme === 'light' ? 'light' : 'dark'}
						/>
					</div>
					<Button disabled={isLoadingLogin} type='submit'>
						Войти в аккаунт
					</Button>
				</form>
			</Form>
		</AuthWrapper>
	)
}

export default LoginForm
