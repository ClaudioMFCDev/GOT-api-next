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

  return <button className="border rounded-lg p-2 bg-red-500 m-4" onClick={onDelete} >Delete</button>
}
