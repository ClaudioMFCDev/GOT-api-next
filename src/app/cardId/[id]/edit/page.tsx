import EditCard from "@/components/EditCard";
import MyFooter from "@/components/Footer";
import MyNavBar from "@/components/NavBar";
import { createServerClient } from "@/utils/supabase/server";
import { url } from "inspector";

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
    <MyNavBar></MyNavBar>
    <div
    style={{backgroundImage: 'url(https://wallpapergod.com/images/hd/game-of-thrones-1920X1080-wallpaper-u1cdpjrxyhy3w35y.jpeg)'
    }}
      className="p-2 pb-40 min-w-80 "
      >

      <div className="mt-12 mb-4 sm:mb-0 sm:w-full w-80 border-amber-300 border-2 rounded-t bg-opacity-90 bg-gray-500 flex justify-center items-center ">
        <div>
          <h1 className=" h-10 w-full tracking-widest flex items-center text-lg sm:text-3xl font-semibold text-amber-500">EDIT  CHARACTER</h1>
        </div>
      </div>

      <EditCard character={data} />
    </div>
    <MyFooter/>
    </>
  );
}
