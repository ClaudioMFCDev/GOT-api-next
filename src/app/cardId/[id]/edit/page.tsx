import EditCard from "@/components/EditCard";
import { createServerClient } from "@/utils/supabase/server";

export default async function Edit({ params }: any) {
  const supabase = createServerClient();
  const { data } = await supabase
    .from("character")
    .select("*")
    .eq("id", params.id)
    .single();

  // enviamos objeto 'data' por parametro

  return (
    <>
      <div className=" bg-slate-200 w-full flex justify-center items-center ml-2 mt-12">
        <div>
          <h1 className="h-10 w-full flex items-center">Edit character</h1>
        </div>
      </div>

      <EditCard character={data} />
    </>
  );
}
