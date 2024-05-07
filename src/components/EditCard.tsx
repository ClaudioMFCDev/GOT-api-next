"use client";

import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

interface EditCharProps {
  character: any;
}

export default function EditChar({ character }: EditCharProps) {
  const supabase = createClient();
  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //get form data
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString();
    const lastName = formData.get("lastName")?.toString();
    const house = formData.get("house")?.toString();
    const title = formData.get("title")?.toString();
    const image = formData.get("image")?.toString();

    const { data, error } = await supabase
      .from("character")
      .update({ name, lastName, house, title, image })
      .eq("id", character.id);

    router.push("/dashboard");
  };

  return (
    <main>
      <div className=" h-screen w-screen sm:flex md:flex lg:flex flex-none justify-center items-center">
        
        {/* box 1 */}
        
        <div className="h-64 w-80 sm:max-w-96 sm:min-h-96 md:min-h-96 md:max-w-96 lg:max-w-96 lg:min-h-96 bg-slate-600 bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <Image
            style={{ objectFit: "cover", objectPosition: "top" }}
            className="h-full w-full scale-100 object-cover object-center opacity-100"
            src={character.image}
            alt="Character-image"
            width={200}
            height={200}
          />
        </div>
        {/* box 2 */}
        <form
          onSubmit={onSubmit}
          className=" bg-blue-100 sm:max-w-96 sm:min-h-96 md:min-h-96 md:max-w-96 lg:max-w-96 lg:min-h-96 h-64 w-80 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
        >
          <div className="grid">
            <label className="text-gray-700 text-base font-semibold">
              First Name
            </label>
            <input
              className="mb-2"
              defaultValue={character?.name}
              name="name"
              type="text"
            />

            <label className="text-gray-700 text-base font-semibold">
              Last Name
            </label>

            <input
              className="mb-2"
              defaultValue={character?.lastName}
              name="lastName"
              type="text"
            />
          </div>

          <div className="grid">
            <label className="text-gray-700 text-base font-semibold">
              House
            </label>
            <input
              className="mb-2"
              defaultValue={character?.house}
              name="house"
              type="text"
            />

            <label className="text-gray-700 text-base font-semibold">
              Title
            </label>
            <input
              className="mb-2"
              defaultValue={character?.title}
              name="title"
              type="text"
            />
          </div>

          <label className="text-gray-700 text-base font-semibold">
            Picture
          </label>
          <input
            className="mb-2"
            defaultValue={character?.image}
            name="image"
            type="text"
          />

          <div
            id="buttons-char"
            className=" flex justify-end items-end  sm:h-32 md:h-32 lg:h-32  h-12"
          >
            <button
              className="border rounded-lg p-2 bg-grey4 text-white h-10 w-28"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
