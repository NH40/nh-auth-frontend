import Link from 'next/link'

import { buttonVariants } from '@/shared/components/ui'
import { URL_CONST } from '@/shared/constants/url.constant'

export default function Home() {
	return (
		<div className='space-y-5 text-center'>
			<h1 className='text-4xl font-bold'>Главная страница</h1>
			<Link href={URL_CONST.login} className={buttonVariants()}>
				Войти в аккаунт
			</Link>
		</div>
	)
}
