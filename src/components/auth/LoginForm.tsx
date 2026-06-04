'use client';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false
    });

    if (!result?.error) {
      router.push('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form className="space-x-1 space-y-4 " onSubmit={handleSubmit}>
      <h1 className="text-[20px] font-bold">Welcome back</h1>

      <label htmlFor="email_label" className="font-semibold text-gray-900">
        {' '}
        Email
      </label>
      <input
        type="email"
        id="sign_in_email"
        name="email_label"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="name@example.com"
        className="w-full border p-3 text-[14px] rounded"
      />
      <label htmlFor="pwd_label" className="font-semibold text-gray-900">
        {' '}
        Password
      </label>
      <input
        type="password"
        id="sign_in_password"
        name="pwd_label"
        placeholder="••••••••••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-3 text-[14px] rounded"
      />
      <div className="flex items-center gap-2">
        <input
          id="remember-me"
          name="remember_me_input"
          type="checkbox"
          className="h-4 w-4 rounded-sm border-gray-300 accent-primary-600 focus:outline-0 cursor-pointer"
        />
        <label
          htmlFor="remember_me_input"
          className="text-sm font-medium text-gray-900 select-none cursor-pointer">
          Remember me
        </label>
      </div>

      <button className="w-full bg-primary-700 text-white p-3 rounded cursor-pointer">
        Sign In
      </button>
    </form>
  );
}
