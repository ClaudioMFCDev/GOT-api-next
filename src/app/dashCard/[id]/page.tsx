import { createServerClient } from "@/utils/supabase/server";
import Image from "next/image";


export default async function DashCard({ params }: any) {
  console.log(params);
  const supabase = createServerClient();

  const character = await supabase
  .from('character').select('*')
  .eq('id', params.id)
  .single();

  console.log(character);

  return (
    <main>
      <div key={character.data?.id} >
        <div className=" group h- w- my-4 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
          <div className=" rounded-xl border border-gray-200">
            <Image
              // style={{ objectFit: 'cover', objectPosition: 'top' }}
              className="h-full w-full scale-100 object-center opacity-100"
              src={character.data?.image}
              alt="Character-image"
              width={200}
              height={200}
            />
            <div style={{ backgroundColor: 'white', width: '70%'}} className="p-3 rounded-xl bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100">
              <h1 className="text-lg font-bold text-red-500">{character.data?.name}{character.data?.lastName}</h1>
              <h2 className="text-m font-light text-gray-200 text-red-500">Family: {character.data?.family}</h2>
              <h2 className="text-m font-light text-gray-200 text-red-500">Title: {character.data?.title}</h2>
              
            </div>

          </div>
        </div>
      </div>

    </main>
  )
}
