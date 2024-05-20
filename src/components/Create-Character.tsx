"use client";
import { createClient } from "@/utils/supabase/client";

export const CreateCharacter = () => {
  const supabase = createClient();

  return (
    <main className="flex-1">
      <div className="p-6 border-4 border-amber-500 rounded-3xl mx-32 my-12 min-w-96">
        <h1 className="ml-6 text-white font-bold text-xl text">
          Create New Character
        </h1>

        <div className="">
          <form
            className="text-white p-6"
            onSubmit={async (event) => {
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
                .insert({ name, lastName, house, title, image });
            }}
          >
            <div>
              <label className="text-white text-base font-semibold"> Name</label>
              <input
                className="w-80 mb-2 mt-0.5 rounded p-1 text-black font-semibold"
                name="name"
                type="text"
              />
            </div>
            <div>
              <label className="text-white text-base font-semibold"> Last Name</label>
              <input
                className="w-80 mb-2 mt-0.5 rounded p-1 text-black font-semibold"
                name="lastName"
                type="text"
              />
            </div>
            <div>
              <label className="text-white text-base font-semibold"> House</label>
              <input
                className="w-80 mb-2 mt-0.5 rounded p-1 text-black font-semibold"
                name="house"
                type="text"
              />
            </div>
            <div>
              <label className="text-white text-base font-semibold"> Title</label>
              <input
                className="w-80 mb-2 mt-0.5 rounded p-1 text-black font-semibold"
                name="title"
                type="text"
              />
            </div>
            <div>
              <label className="text-white text-base font-semibold"> Picture</label>
              <input
                className="italic w-80 mb-2 mt-0.5 rounded p-1 text-black font-semibold"
                name="image"
                type="text"
              />
            </div>
            <div className="flex justify-center">
              <button
                className=" mt-4 bg-white text-amber-500 rounded-md px-3 py-2 text-sm font-bold hover:bg-amber-500 hover:text-white hover:font-semibold"
                type="submit"
              >
                CREATE
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
