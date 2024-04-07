'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"

export const CharacterCard = ({character}: any) => {
    const router = useRouter();

    return (
        <>
            <div key={character.id} onClick={() => { router.push(`/dashCard/${character.id}`) }}>
                <div className="group relative m-0 h-72 w-72 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                        <Image
                            style={{ objectFit: 'cover', objectPosition: 'top' }}
                            className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                            src={character.imageUrl}
                            alt="Character-image"
                            width={200}
                            height={200}
                        />
                        <div style={{ backgroundColor: 'gray', width: '70%' }} className="p-3 rounded-xl opacity-60 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100">
                            <h1 className="text-lg font-bold text-white ">{character.firstName}</h1>
                            <h2 className="text-m font-light text-gray-200 ">{character.lastName}</h2>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
