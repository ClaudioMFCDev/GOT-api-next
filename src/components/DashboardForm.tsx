import { createServerClient } from "@/utils/supabase/server";
import { CharacterCard } from "./Character-Card";
import { redirect } from "next/navigation";
import { SingOutBtn } from "./SingOut-Btn";

export default async function DashboardPage() {
  const supabase = createServerClient();
  const { data } = await supabase.from("character").select("*");
  const user = await supabase.auth.getUser();

  // if (user.error) {
  //     return redirect('/');
  // }

  return (
    <main>

      <nav className=" mb-4 items-center w-full flex-wrap bg-grey3 p-2">
        <div className="flex justify-start items-center flex-shrink-0 text-white mr-6">
          <div className="  bg-whit ">
            <img
              src="/gotLogo.svg"
              alt="GotLogo"
              width={100}
              height={100}
            />
          </div>
          <div className="bg-blac font-semibold text-xl tracking-tight block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black">
            Game of Thones Characters
          </div>
        </div>
        {/* BOTON DOWNLOAD */}
          <div className="bg-black flex items-center content-center justify-items-end">
            <a
              href="#"
              className="text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Download
            </a>
          </div>

        {/* <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto">

        </div> */}
      </nav>
      {/*NAV-END*/}

      <div className="flex place-content-around items-center gap-y-8 gap-x-2 flex-wrap">
        {data?.map((character: any) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>
    </main>
  );
}
