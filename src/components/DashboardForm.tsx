
import { createServerClient } from "@/utils/supabase/server";
import { CharacterCard } from "./Character-Card";
import { SingOutBtn } from "./SingOut-Btn";
import { Typewriters } from "./Typewriter";
import NavBar from "./NavBar";
import MyNavBar from "./NavBar";
import MyFooter from "./Footer";



export default async function DashboardPage() {
  const supabase = createServerClient();
  const { data } = await supabase.from("character").select("*");

  return (
    <main className=" bg-xxpaynesGray">
      <div >
      <MyNavBar></MyNavBar>
      </div>

      <div className=" m-6">
        <h2 className=" text-amber-500 text-5xl mb-4 font-serif uppercase ">Game of Thrones</h2>
        <Typewriters />
      </div>

      <div className=" mx-4 bg-xxpaynesGray flex place-content-around items-center gap-y-8 gap-x-2 flex-wrap">
        {data?.map((character: any) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>
        <MyFooter/>
    </main>
  );
}
