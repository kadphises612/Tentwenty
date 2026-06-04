export { auth as middleware } from '@/auth';

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/dashboard/:path*',
    '/weekly-timesheet/:path*'
  ]
};
