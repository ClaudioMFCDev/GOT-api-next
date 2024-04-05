
'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Searcher() {

    const router = useRouter();


    const [author, setAuthor] = useState({
        author: ''
    });
    const [title, setTitle] = useState();

    const handleChange = (e: any) => {
        setAuthor( {...author, [e.target.name]: e.target.value} );
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        router.push('/dashboard', {author});
    }




    return (
        <div className="bg-white text-black size-4/5 min-h-96 p-6"  >
            <div className="border-solid border-red-600" >
                <form onSubmit={handleSubmit}>

                    <label className="m-2">Buscar por Autor</label>
                    <div>
                        <input onChange={handleChange} name="author" type="text" className="bg-red-200 p-2 border-2 rounded-lg" />
                        <button type="submit" className="bg-red-400 border-solid border-2 rounded-lg m-4 p-2">Enviar</button>
                    </div>

                    <label className="m-2">Buscar por Título</label>
                    <div>
                        <input name="titulo" type="text" className="bg-red-200 p-2  border-2 rounded-lg" />
                        <button type="submit" className="bg-red-400 border-solid border-2 rounded-lg m-4 p-2">Enviar</button>
                    </div>
                </form>
            </div>
        </div>

    )
}