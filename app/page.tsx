import { currentUser } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  // const { isLoaded, isSignedIn, user} = useUser();
  console.log(user);
  return (
   <div className="absolute top-1/5 left-1/2 -translate-x-1/2">
      <div className="flex flex-col items-center text-center">
        Home Page
      </div>
   </div>
  );
}
