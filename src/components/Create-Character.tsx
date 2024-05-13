"use client";
import { createClient } from "@/utils/supabase/client";

export const CreateCharacter = () => {
  const supabase = createClient();

  return (
    <main>
      <h1 className="text-white">Create Page</h1>

      <div className="">
        <form
          className="text-black"
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
          <label> Name</label>
          <input name="name" type="text" />

          <label> Last Name</label>
          <input name="lastName" type="text" />

          <label> House</label>
          <input name="house" type="text" />
          <br />

          <label> Title</label>
          <input name="title" type="text" />

          <label> Picture</label>
          <input name="image" type="text" />

          <button type="submit">create</button>
        </form>
      </div>
    </main>
  );
};
