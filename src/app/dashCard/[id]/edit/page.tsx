import EditChar from "@/components/EditChar";
import { createServerClient } from "@/utils/supabase/server";

export default async function Edit({params}: any) {
    const supabase = createServerClient();
    const { data } = await supabase
        .from('character')
        .select('*')
        .eq('id', params.id)
        .single();
    console.log("++++++++++++++++++", data);
    
    // enviamos objeto 'data' por parametro

    return (
        <EditChar character={data}/>
    )
}