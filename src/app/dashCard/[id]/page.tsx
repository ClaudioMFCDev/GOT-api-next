

const getData = async (id: any) => {
        const response = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`);
        const data = await response.json();
        // console.log(data)
        return data || {};
    }
export default async function DashCard({params}: any) {


    const data = await getData(params.id);
    console.log(data)

  return (
    <main>
        <div>{data.firstName}</div>
        <div>Dash por id</div>
    </main>
  )
}
