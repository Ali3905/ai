import Image from "next/image"
import Crousal from "./components/Crousal";

export default function Home() {
  return (
    <main className="flex">
     
      <div className="flex flex-col md:flex-row  w-full">
        {/* Left Side (Image) */}
        <div className="flex flex-col w-screen p-10 bg-black text-white">
          <h2>Welcome to the <br/> TypeFoam</h2>
          <Image src="/williamstown-1057646.jpg" width={300} height={200} className="max-w-full h-auto" />
        </div>

        {/* Right Side (Questions) */}
        {/* <div className="flex-1 md:overflow-y-auto max-h-96">
          <h1 className="text-2xl font-bold mb-4">Question 1</h1>
          <p>What is your favorite color?</p>
         
          <h1 className="text-2xl font-bold mb-4">Question 2</h1>
          <p>What is your favorite animal?</p>
         
        </div> */}
        <Crousal/>
        
      </div>
    </main>
  );
}