'use client';

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";


export const SingOutBtn = () => {
    const supabase = createClient();
    const router = useRouter();

    const singOut = async () => {
        await supabase.auth.signOut();
        router.push('/');
      }

    return <button className="z-40 border rounded-lg p-2 bg-grey4 text-white h-10 w-28" onClick={singOut} >Sing Out</button>
}
