import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Solo redirigir si es la ruta raíz
  if (pathname === '/') {
    const preferredLanguage = request.cookies.get('preferred-language')?.value;
    const validLanguages = ['es', 'en'];
    const targetLanguage = preferredLanguage && validLanguages.includes(preferredLanguage) ? preferredLanguage : 'es';
    
    return NextResponse.redirect(new URL(`/${targetLanguage}`, request.url));
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