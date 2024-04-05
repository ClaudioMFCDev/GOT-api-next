import Image from "next/image";

export default async function BookById({params}: any) { 

    const getBookData = async (id: string) => {
        //no trae jason
        const response = await fetch(`https://openlibrary.org/works/${id}`);
        console.log(response);
        const data = await response.json();
        return data.docs || {};
    }

    const data = await getBookData(params.id)

    return (
        <div className="flex flex-col gap-4">
            <h3>{data.title}</h3>
            <Image
                src={`https://covers.openlibrary.org/b/id/${data.cover_i}-M.jpg`}
                alt="cover-title"
                width={100}
                height={100}
            />
            <span>{}</span>
        </div>
    )
}