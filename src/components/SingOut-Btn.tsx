"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export const SingOutBtn = () => {
  const supabase = createClient();
  const router = useRouter();

  const singOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <button
      className="z-40 text-center border rounded-lg bg-xlightcyan transition duration-300
       hover:bg-xnonphotoblue hover:border-white hover:border-4 hover:text-lg text-black h-10 w-28"
      onClick={singOut}
    >
      Sing Out
    </button>
  );
};
