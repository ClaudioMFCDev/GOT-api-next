import { DeleteCharButton } from "@/components/Delete-Char";
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
    <div className="bg-white m-8 h-screen w-screen sm:flex md:flex lg:flex flex-none justify-center items-center rounded-t rounded-b overflow-hidden ">
      {/* box 1 */}
      <div className="shadow-2xl sm:max-w-96 sm:min-h-96 md:min-h-96 md:max-w-96 lg:max-w-96 lg:min-h-96 h-64 w-80 bg-slate-600 bg-cover rounded-t rounded-b overflow-hidden text-center">
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
      <div className="shadow-2xl rounded-t overflow-hidden bg-blue-100 sm:max-w-96 sm:min-h-96 md:min-h-96 md:max-w-96 lg:max-w-96 lg:min-h-96 h-64 w-80 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="text-center">
          <div
            className="divide-y text-gray-900 font-bold text-xl "
          >
            {character?.data.name} {character?.data.lastName}
          </div>
          {/* SEPARADOR */}
          <div className="border-solid border-black border-t-2 mt-2"></div>

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
                <p className="text-gray-700 text-base font-semibold">House</p>
                <p className="mb-4">{character?.data.house}</p>
              </div>
              <div>
                <p className="text-gray-700 text-base font-semibold">Title</p>
                <p className="mb-4">{character?.data.title}</p>
              </div>
            </div>
            {/* botones */}
            <div id="buttons-char" className=" flex justify-end items-end  sm:h-32 md:h-32 lg:h-32  h-12">
              <Link
                className="border rounded-lg p-2 bg-grey4 text-white m-4 h-10 w-28"
                type="button"
                href={`${character.data?.id}/edit`}
              >
                Edit
              </Link>
              <DeleteCharButton character={character.data} />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
