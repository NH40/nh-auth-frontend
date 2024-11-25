'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTheme } from 'next-themes'
import { FC, useEffect, useState } from 'react'
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
import { GOOGLE_RECAPTCHA_SITE_KEY } from '@/shared/constants'

import { LOGIN_WRAPPER_CONSTANT } from '../constants/authWrapper.constant'
import { useLoginMutation } from '../hooks'
import { LoginSchema, TypeLoginSchema } from '../schemes'

import AuthWrapper from './AuthWrapper'

const LoginForm: FC = () => {
	const { theme } = useTheme()
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)
	const [recaptchaKey, setRecaptchaKey] = useState<number>(0)

	useEffect(() => {
		setRecaptchaKey(prev => prev + 1)
	}, [theme])

	const form = useForm<TypeLoginSchema>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const { login, isLoadingLogin } = useLoginMutation()

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
								<FormLabel>Пароль</FormLabel>
								<FormControl>
									<Input
										type='password'
										disabled={isLoadingLogin}
										placeholder='******'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className='flex justify-center'>
						<ReCAPTCHA
							key={recaptchaKey}
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
