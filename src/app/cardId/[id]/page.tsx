import { DeleteCharButton } from "@/components/Delete-Char";
import MyNavBar from "@/components/NavBar";
import { createServerClient } from "@/utils/supabase/server";
import Image from "next/image";
import Link from "next/link";

export default async function DashCard({ params }: any) {
  const supabase = createServerClient();

  const character = await supabase
    .from("character")
    .select("*")
    .eq("id", params.id)
    .single();

  return (
    <main>
      <MyNavBar/>
      <div
          style={{backgroundImage: 'url(https://wallpapergod.com/images/hd/game-of-thrones-1920X1080-wallpaper-u1cdpjrxyhy3w35y.jpeg)'}}

       className="p-2 pb-40 min-w-80">
        <div className=" mb-4 sm:mb-0 sm:w-full w-80 rounded-t bg-opacity-90 bg-gray-500 flex justify-center items-center ">
          <div>
            <h1 className=" h-10 w-full flex items-center text-3xl font-semibold text-amber-500">
              EDIT CHARACTER
            </h1>
          </div>
        </div>
        {/* CARD */}
        <div className=" sm:flex flex-none justify-center items-center rounded-t rounded-b overflow-hidden ">
          {/* box 1 */}
          <div className="shadow-2xl h-56 w-80 sm:max-w-96 sm:min-h-96 bg-black bg-cover rounded-t rounded-b overflow-hidden text-center">
            <Image
              style={{ objectFit: "cover", objectPosition: "top" }}
              className="h-full w-full scale-100 object-cover object-center opacity-100"
              src={character.data?.image}
              alt="Character-image"
              width={200}
              height={200}
            />
          </div>
          {/* box 2 */}
          <div className="p-6 shadow-2xl rounded-t overflow-hidden bg-gray-200 sm:max-w-96 sm:min-h-96 h-80 w-80 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="text-center">
              <div className="divide-y text-gray-900 font-bold text-xl ">
                {character?.data.name} {character?.data.lastName}
              </div>
              {/* SEPARADOR */}
              <div className="border-solid border-amber-400 border-t-4 mt-2"></div>

              {/* CHAR INFO */}
              <div>
                <div className="grid grid-cols-2 m-2">
                  <div>
                    <p className="text-gray-700 text-base font-semibold">
                      First Name
                    </p>
                    <p className="mb-4">{character?.data.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-700 text-base font-semibold">
                      Last Name
                    </p>
                    <p className="mb-4">{character?.data.lastName}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 m-2">
                  <div>
                    <p className="text-gray-700 text-base font-semibold">
                      House
                    </p>
                    <p className="mb-4">{character?.data.house}</p>
                  </div>
                  <div>
                    <p className="text-gray-700 text-base font-semibold">
                      Title
                    </p>
                    <p className="mb-4">{character?.data.title}</p>
                  </div>
                </div>
                {/* botones */}
                <div
                  id="buttons-char"
                  className=" flex justify-center items-center sm:h-24"
                >
                  <Link
                    className="px-3 py-2 h-10 w-28 mt-4 border-2 border-amber-400 bg-white text-amber-500 rounded-md  text-sm font-bold hover:border-none hover:bg-amber-500 hover:text-white hover:font-semibold"
                    type="button"
                    href={`${character.data?.id}/edit`}
                  >
                    EDIT
                  </Link>
                  <DeleteCharButton character={character.data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
