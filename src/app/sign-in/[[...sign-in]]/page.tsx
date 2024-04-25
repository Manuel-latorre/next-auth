import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="flex items justify-center">
      <SignIn path="/sign-in" />
    </div>
  )
}