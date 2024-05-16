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
    <a
      className="hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700"
      onClick={singOut}
    >
      Sing Out
    </a>
  );
};
