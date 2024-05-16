import { CreateCharacter } from "@/components/Create-Character";
import MyNavBar from "@/components/NavBar";

export default async function createPage() {
  return (
    <main>
      <MyNavBar />
      <div className="w-screen flex h-screen">
        <div className="w-1/2">
          <CreateCharacter />
        </div>
        <div className="w-1/2 bg-amber-500 flex justify-center items-center overflow-hidden opacity-75">
          <img
           className=" mx-auto w-11/12"
            src="https://c4.wallpaperflare.com/wallpaper/474/430/502/game-of-thrones-daenerys-targaryen-wallpaper-preview.jpg"
            alt="gotWallpaper"
          />
        </div>
      </div>
    </main>
  );
}
