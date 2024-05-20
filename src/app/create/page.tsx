import { CreateCharacter } from "@/components/Create-Character";
import MyNavBar from "@/components/NavBar";

export default async function createPage() {
  return (
    <main>
      <MyNavBar />
      <div className=" flex">
        <div className="w-1/2 bg-gray-600">
          <CreateCharacter />
        </div>
        <div className="w-1/2 bg-amber-500 flex justify-center items-center opacity-75">
          <img
           className=""
            src="https://c4.wallpaperflare.com/wallpaper/474/430/502/game-of-thrones-daenerys-targaryen-wallpaper-preview.jpg"
            alt="gotWallpaper"
            height={100}
            width={500}
          />
        </div>
      </div>
    </main>
  );
}
