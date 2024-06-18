import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="absolute top-1/5 left-1/2 -translate-x-1/2">
        <SignUp />;
    </div>
  ) 
}