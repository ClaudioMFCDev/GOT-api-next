
import { CharacterCard } from "./Character-Card";

export default async function DashboardPage() {
    const getDashboard = async () => {
        try {
            //${process.env.NEXT_PUBLIC_URL}
            const response = await fetch(`https://thronesapi.com/api/v2/Characters`);
            const data = await response.json();
            //console.log(data)
            return data || {data: []};
            
        } catch (error) {
            console.log(error);
            return {data: []};
        }
    }

    const data = await getDashboard();
    
    return (

        <main>
            <nav className="flex justify-between m-6 items-center flex-wrap my-8">
                <h1 className="text-5xl">Game of Thones' Characters</h1>
                {/* <div className="flex flex-wrap">
                    <input type="text" name="" id="" className="rounded-sm my-2" />
                    <button type="button" className="my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mx-2 px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Serch</button>
                </div> */}
            </nav>

            <div className="flex place-content-around items-center gap-y-8 gap-x-2 flex-wrap">
                {data.map((character: any) => (
                    <CharacterCard character={character} key={character.id}/>
                ))}
            </div>
        </main >
    )
}