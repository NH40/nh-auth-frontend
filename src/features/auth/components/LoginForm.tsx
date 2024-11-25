'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

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

import { LOGIN_WRAPPER_CONSTANT } from '../constants/authWrapper.constant'
import { LoginSchema, TypeLoginSchema } from '../schemes'

import AuthWrapper from './AuthWrapper'

const LoginForm: FC = () => {
	const form = useForm<TypeLoginSchema>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			name: '',
			email: '',
			password: ''
		}
	})

	const onSubmit = (values: TypeLoginSchema) => {
		console.log(values)
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
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Имя</FormLabel>
								<FormControl>
									<Input placeholder='Иван' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Почта</FormLabel>
								<FormControl>
									<Input
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
									<Input type='password' placeholder='******' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type='submit'>Войти в аккаунт</Button>
				</form>
			</Form>
		</AuthWrapper>
	)
}

export default LoginForm
