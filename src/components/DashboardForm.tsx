
import { BookId } from "./Book-card";

export default async function DashboardPage(author: any) {
    const getDashboard = async () => {
        const response = await fetch(`https://thronesapi.com/api/v2/Characters`);
        const data = await response.json();
        console.log(data)
        return data || {};
        
    }
    
    const data = await getDashboard();

    return (

        <main>
            <div>Characters</div>
            <div className="flex items-center gap-y-8 gap-x-2 flex-wrap">
                {data.map((character: any) => (
                    //<BookId libro={libro} key={libro.key}/>
                    <div>{character.firstName}</div>
                ))}
            </div>
        </main>
    )
}