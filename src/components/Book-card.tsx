'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"


export const BookId = ({libro}: any) => {
    const router = useRouter();
    return (
        <div key={libro.key}
            className="flex flex-col items-center gap-2 w-52"
            //Evento
            onClick={() => {
                //router.push(`/dashboard/book/${libro.key.slice(7,)}`);
                router.push(`/dashboard/book/${libro.key.slice(7,)}`);
            }}
        >
            <Image
                src={`https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg`}
                alt="cover-title"
                width={100}
                height={100}
            />
            <span>{libro.title}</span>
            <span>{libro.key.slice(7,)}</span>
        </div>
    )
}