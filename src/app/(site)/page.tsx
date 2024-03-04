import { AuthForm } from "@/app/components/AuthForm";
import { BoblsBg } from "@/components/BoblsBg";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
      <AuthForm />
      <BoblsBg />
    </div>
  )
}
