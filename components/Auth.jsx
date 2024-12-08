"use client"
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import Loader from "./Loader";

const Auth = ({children}) => {
  const router = useRouter();
  const { status } = useSession({ required: true, onUnauthenticated() {
    router.push('/');
  }, })
  if (status === "loading") {
    return <Loader/>
  }
  return children
}

export default Auth