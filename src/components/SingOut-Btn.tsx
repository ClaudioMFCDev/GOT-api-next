'use client';

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";


export const SingOutBtn = () => {
    const supabase = createClient();
    const router = useRouter();

    const singOut = async () => {
        await supabase.auth.signOut();
        router.push('/dashboard');
        
      }

    return <button className="z-40 border rounded-lg p-2 bg-red-500 m-4" onClick={singOut} >Delete</button>
}
