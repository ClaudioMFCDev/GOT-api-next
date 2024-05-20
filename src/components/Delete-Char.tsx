'use client';

import { createClient } from "@/utils/supabase/client"
import { useRouter } from "next/navigation";

export const DeleteCharButton = ({character}: any) => {
    const supabase = createClient();
    const router = useRouter();
    console.log(character);

    const onDelete = async () => {
      await supabase.from('character').delete().eq('id', character.id);
      router.push('/dashboard');
      
    }

  return <button className="border-2 border-amber-400 h-10 w-28 mt-4 bg-white text-amber-500 rounded-md px-3 py-2 text-sm font-bold hover:bg-amber-500 hover:text-white hover:font-semibold hover:border-none" onClick={onDelete} >Delete</button>
}
