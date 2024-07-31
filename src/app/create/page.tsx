import { CreateCharacter } from "@/components/Create-Character";
import MyFooter from "@/components/Footer";
import MyNavBar from "@/components/NavBar";

export default async function createPage() {
  return (
    <main>
      <MyNavBar />
      <div className=" flex">
        <div className="w-1/2 lg:bg-gray-600">
          <CreateCharacter />
        </div>
        {/*****************************/ }
        <div className="w-1/2 invisible lg:visible bg-amber-500 opacity-75">
          <img
           className="mx-auto"
            src="https://c4.wallpaperflare.com/wallpaper/474/430/502/game-of-thrones-daenerys-targaryen-wallpaper-preview.jpg"
            alt="gotWallpaper"
            height={100}
            width={500}
          />
        </div>
      </div>
      <MyFooter/>
    </main>
  );
}
