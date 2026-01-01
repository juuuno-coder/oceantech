import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // If we had server-side auth, we'd check it here.
  // For now, client-side protection in Layout/Components is sufficient for this demo level.
  // But we can add headers or localization routing hereafter.
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
