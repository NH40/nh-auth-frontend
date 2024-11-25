import { type NextRequest, NextResponse } from 'next/server'

import { URL_CONST } from './shared/constants'

export default function middleware(request: NextRequest) {
	const { url, cookies } = request

	const session = cookies.get('session')?.value

	const isAuthPage = url.includes('/auth')

	if (isAuthPage) {
		if (session) {
			return NextResponse.redirect(new URL(URL_CONST.settings, url))
		}

		return NextResponse.next()
	}

	if (!session) {
		return NextResponse.redirect(new URL(URL_CONST.login, url))
	}
}

export const config = {
	matcher: ['/auth/:path*', '/dashboard/:path*']
}
