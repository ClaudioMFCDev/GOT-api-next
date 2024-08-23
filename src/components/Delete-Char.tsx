"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export const DeleteCharButton = ({ character, user }: any) => {
  const isUserAuthenticated = Boolean(user);
  const supabase = createClient();
  const router = useRouter();

  const onDelete = async () => {
    await supabase.from('character').delete().eq('id', character.id);
    router.push("/dashboard");
  };

  return (
    <button
      className={`transition duration-300 border-2 border-amber-400 h-10 w-28 mt-4 bg-white text-amber-500 rounded-md px-3 py-2 text-sm font-bold hover:bg-amber-500 hover:text-white hover:font-semibold ${
        isUserAuthenticated
          ? "hover:border-none"
          : "opacity-50 cursor-not-allowed"
      } `}
      disabled={!isUserAuthenticated}
      onClick={onDelete}
    >
      DELETE
    </button>
  );
};
