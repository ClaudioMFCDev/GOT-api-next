
import { createServerClient } from "@/utils/supabase/server";
import { CharacterCard } from "./Character-Card";
import { SingOutBtn } from "./SingOut-Btn";
import { Typewriters } from "./Typewriter";

export default async function DashboardPage() {
  const supabase = createServerClient();
  const { data } = await supabase.from("character").select("*");

  return (
    <main className="bg-white">
      <nav className=" mb-20 items-center w-full flex justify-between  flex-wrap bg-xpacificcyan p-2">
        <div className="flex justify-start items-center flex-shrink-0 text-white mr-6">
          <div className=" min-w-24 min-h-12">
            <img src="/gotLogo.svg" alt="GotLogo" width={100} height={100} />
          </div>
          <div className="mt-0  font-semibold text-xl tracking-tight lg:inline-block text-white hover:text-black">
            <p className="flex">Game of Thrones Characters</p>
          </div>
        </div>
        <div>
          {" "}
          <SingOutBtn />{" "}
        </div>
      </nav>
      {/*NAV-END*/}

      <div className=" m-6">
        <h2 className=" text-5xl mb-4">Game of Thrones</h2>
        <Typewriters />
      </div>

      <div className=" mx-4 bg-white flex place-content-around items-center gap-y-8 gap-x-2 flex-wrap">
        {data?.map((character: any) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>
      <footer className=" bg-xnonphotoblue mt-6 w-full h-20"></footer>
    </main>
  );
}
