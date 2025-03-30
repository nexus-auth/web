import { NextRequest, NextResponse } from 'next/server'

export const publicRoutes = ['/auth']

export function middleware(request: NextRequest) {
  const sessionId = request.cookies.get('nexus-session')
  const isRequestedRoutePublic = publicRoutes.includes(request.nextUrl.pathname)

  if (!isRequestedRoutePublic && !sessionId) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }

  if (isRequestedRoutePublic && sessionId) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)']
}
