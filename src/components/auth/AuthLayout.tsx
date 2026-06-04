type Props = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export default function AuthLayout({
  left,
  right,
}: Props) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center ">
        {left}
      </div>

      <div className="hidden md:flex items-center justify-center bg-primary-600 text-white p-8">
        {right}
      </div>
    </div>
  );
}