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
      <div 
      className=" sm:flex flex-none justify-center items-center">
        {/* box 1 */}
        <div className=" h-56 w-80 border-4 rounded-t border-b-0 sm:border-b-4 sm:rounded-b sm:border-r-0 sm:border-t-0 sm:max-w-96 sm:min-h-96 border-amber-500 bg-slate-600 bg-cover lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
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
          className="p-6 h-80 w-80 border-4 rounded-b border-t-0 rounded-r sm:border-l-0 sm:rounded-t-none sm:rounded-l-none border-amber-500 bg-opacity-30 bg-gray-200 text-white sm:max-w-96 sm:min-h-96 justify-between leading-normal"
        >
          <div className="">
            <div>
              <label className="text-amber-500 font-semibold text-sm sm:text-base">
                First Name
              </label>
            </div>
            <div>
              <input
                className="pl-1 w-60 sm:mb-1 sm:mt-0.5 rounded text-black font-semibold text-sm sm:text-base"
                defaultValue={character?.name}
                name="name"
                type="text"
              />
            </div>
            <div>
              <label className="text-amber-500 font-semibold text-sm sm:text-base">
                Last Name
              </label>
            </div>
            <div>
              <input
                className="pl-1 w-60 sm:mb-1 sm:mt-0.5 rounded text-black font-semibold text-sm sm:text-base"
                defaultValue={character?.lastName}
                name="lastName"
                type="text"
              />
            </div>
          </div>

          <div className="">
            <div>
              <label className="text-amber-500 font-semibold text-sm sm:text-base">
                House
              </label>
            </div>
            <div>
              <input
                className="pl-1 w-60 sm:mb-1 sm:mt-0.5 rounded text-black font-semibold text-sm sm:text-base"
                defaultValue={character?.house}
                name="house"
                type="text"
              />
            </div>
            <div>
              <label className="text-amber-500 font-semibold text-sm sm:text-base">
                Title
              </label>
            </div>
            <div>
              <input
                className="pl-1 w-60 sm:mb-1 sm:mt-0.5 rounded text-black font-semibold text-sm sm:text-base"
                defaultValue={character?.title}
                name="title"
                type="text"
              />
            </div>
          </div>

          <div className="">
            <div>
              <label className="text-amber-500 font-semibold text-sm sm:text-base">
                Picture
              </label>
            </div>
            <div>
              <input
                className="italic pl-1 w-60 sm:mb-1 sm:mt-0.5 rounded text-black font-semibold text-sm sm:text-base"
                defaultValue={character?.image}
                name="image"
                type="text"
              />
            </div>

            <div
              id="buttons-char"
              className="  flex justify-center items-center sm:h-24"
            >
              <button
                className=" px-3 py-2 mt-2 h-9 w-28 sm:mt-0 border-2 border-amber-400 bg-white text-amber-500 rounded-md text-sm font-bold hover:bg-amber-500 hover:text-white hover:font-semibold hover:border-none"
                type="submit"
              >
                SAVE
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
