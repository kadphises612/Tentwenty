import AuthLayout from '@/components/auth/AuthLayout';
import LoginForm from '@/components/auth/LoginForm';
import RightPanel from '@/components/auth/RightPanel';

export default function LoginPage() {
  return <AuthLayout left={<LoginForm />} right={<RightPanel />} />;
}
