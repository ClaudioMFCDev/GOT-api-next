import { CharacterCard } from "./Character-Card";

export default async function DashboardPage() {
    const getDashboard = async () => {
        try {
            //${process.env.NEXT_PUBLIC_URL}
            const response = await fetch('https://thronesapi.com/api/v2/Characters');
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
            <nav  className="flex justify-between mb-10 mt-8 items-center flex-wrap ">
                <h1 style={{position: 'fixed'}} className="z-40 w-full p-2 border border-transparent rounded text-5xl text-slate-300 bg-grey3">Game of Thones Characters</h1>
            </nav>

            <div className="flex place-content-around items-center gap-y-8 gap-x-2 flex-wrap">
                {data.map((character: any) => (
                    <CharacterCard character={character} key={character.id}/>
                ))}
            </div>
        </main >
    )
}