'use client';
import { createClient } from "@/utils/supabase/client";


export const CreateCharacter = () => {

    const supabase = createClient();

    return (
        <main>
            <h1 className="text-white">Create Page</h1>
            <form className="text-black" onSubmit={async (event) => {
                event.preventDefault()
                //get form data
                const formData = new FormData(event.currentTarget)
                const name = formData.get('name')?.toString();
                const lastName = formData.get('lastName')?.toString();
                const house = formData.get('house')?.toString();
                const title = formData.get('title')?.toString();
                const image = formData.get('image')?.toString();

                const {data, error} = await supabase.from('character')
                .insert({name, lastName, house, title, image});

            }}>

                <label htmlFor="">Name</label>
                <input name="name" type="text" />

                <label htmlFor="">Last Name</label>
                <input name="lastName" type="text" />

                <label htmlFor="">House</label>
                <input name="house" type="text" /><br />

                <label htmlFor="">Title</label>
                <input name="title" type="text" />

                <label htmlFor="">Picture</label>
                <input name="image" type="text" />

                <button type="submit">create</button>
            </form>
        </main>
    )
}
