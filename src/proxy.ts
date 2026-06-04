export { auth as proxy } from '@/auth';

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/dashboard/:path*',
    '/weekly-timesheet/:path*'
  ]
};
