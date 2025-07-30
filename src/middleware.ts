import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Si es la ruta raíz, redirigir basándose en la preferencia guardada
  if (pathname === '/') {
    const preferredLanguage = request.cookies.get('preferred-language')?.value;
    
    if (preferredLanguage === 'en') {
      return NextResponse.redirect(new URL('/en', request.url));
    } else {
      return NextResponse.redirect(new URL('/es', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 