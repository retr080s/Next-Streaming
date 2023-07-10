import gtaPic from "src/assets/featured/gta.png";
import fortnitePic from "src/assets/featured/fortnite.png";
import valorantPic from "src/assets/featured/valorant.png";

import { BsPerson } from "react-icons/bs";
import Image from "next/image";

export default function featured() {
  return (
    <div className="mt-8 ml-6">
      <h1 className="text-white  ml-64 text-3xl">Featured Streams</h1>
      <div className="  ml-64  pt-12 h-(-12)  z-38 gap-10 ">
        <div className="flex flex-column flex-wrap justify-center gap-5">
          <div className="text-center">
            <Image
              alt="gta"
              src={gtaPic}
              width={450}
              height={300}
              className="rounded-2xl border-b-4 border-sky-600 transform duration-500 hover:scale-105"
            />
            <p className="mt-4">GTA V</p>
            <p className="flex justify-center  ">
              <BsPerson className="text-white justify-center " />
            </p>
            <p className="">2000 Watching</p>
          </div>
          <div className="text-center">
            <Image
              alt="fortnite"
              src={fortnitePic}
              width={450}
              height={300}
              className="rounded-2xl border-b-4 border-sky-600 transform duration-500 hover:scale-105"
            />
            <p className="mt-4">Fortnite</p>
            <p className="flex justify-center  ">
              <BsPerson className="text-white justify-center " />
            </p>
            <p className="">2000 Watching</p>
          </div>
          <div className="text-center">
            <Image
              alt="valorant"
              src={valorantPic}
              width={450}
              height={300}
              className="rounded-2xl border-b-4 border-sky-600 transform duration-500 hover:scale-105"
            />
            <p className="mt-4">Valorant</p>
            <p className="flex justify-center  ">
              <BsPerson className="text-white justify-center " />
            </p>
            <p className="">2000 Watching</p>
          </div>
        </div>
      </div>
    </div>
  );
}
