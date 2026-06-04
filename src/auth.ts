import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        if (
          credentials.email === 'admin@test.com' &&
          credentials.password === '123456'
        ) {
          return {
            id: '1',
            email: 'admin@test.com',
            name: 'Admin'
          };
        }

        return null;
      }
    })
  ],

  pages: {
    signIn: '/login'
  }
});
