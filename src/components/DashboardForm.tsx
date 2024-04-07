

import Image from "next/image";
import BasicModal from "./BasicModal";

export default async function DashboardPage(author: any) {
    const getDashboard = async () => {
        const response = await fetch(`https://thronesapi.com/api/v2/Characters`);
        const data = await response.json();
        //console.log(data)
        return data || {};

    }

    const data = await getDashboard();

    return (

        <main>
            <nav className="flex justify-between m-6 items-center flex-wrap my-8">
                <h1 className="text-5xl">Game of Thones' Characters</h1>
                <div className="flex flex-wrap">
                <input type="text" name="" id="" className="rounded-sm my-2" />
                <button type="button" className="my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mx-2 px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Serch</button>
                </div>
            </nav>
            <div className="flex place-content-around items-center gap-y-8 gap-x-2 flex-wrap">
                {data.map((character: any) => (
                    //<BookId libro={libro} key={libro.key}/>
                    <div>
                        <div className="group relative m-0 h-72 w-72 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">

                                <Image
                                style={{objectFit: 'cover', objectPosition: 'top'}}
                                    className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                                    src={character.imageUrl}
                                    alt="Character-image"
                                    width={200}
                                    height={200}
                                    onClick={()=>{
                                        <BasicModal character={character}/>
                                    }}
                                />
                                <div style={{backgroundColor: 'gray', width:'70%'}}  className="p-3 rounded-xl opacity-60 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100">
                                    <h1 className="text-lg font-bold text-white ">{character.firstName}</h1>
                                    <h2 className="text-m font-light text-gray-200 ">{character.lastName}</h2>
                                </div>
                                 
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main >
    )
}