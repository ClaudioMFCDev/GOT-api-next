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
      <h1 className="text-white">Edit Character</h1>
      <Image
        style={{ objectFit: "cover", objectPosition: "top" }}
        className=" h-96 w-96 m-4 "
        src={character.image}
        alt="Character-image"
        width={200}
        height={200}
      />
      <form className="text-black" onSubmit={onSubmit}>
        <label>Name</label>
        <input defaultValue={character?.name} name="name" type="text" />

        <label>Last Name</label>
        <input defaultValue={character?.lastName} name="lastName" type="text" />

        <label>House</label>
        <input defaultValue={character?.house} name="house" type="text" />
        <br />

        <label>Title</label>
        <input defaultValue={character?.title} name="title" type="text" />

        <label>Picture</label>
        <input defaultValue={character?.image} name="image" type="text" />

        <button type="submit">SAVE</button>
      </form>
    </main>
  );
}
