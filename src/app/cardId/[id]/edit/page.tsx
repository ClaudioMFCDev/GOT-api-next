import EditCard from "@/components/EditCard";
import { createServerClient } from "@/utils/supabase/server";

export default async function Edit({params}: any) {
    const supabase = createServerClient();
    const { data } = await supabase
        .from('character')
        .select('*')
        .eq('id', params.id)
        .single();
    
    // enviamos objeto 'data' por parametro

    return (
        <EditCard character={data}/>
    )
}