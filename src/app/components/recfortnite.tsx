import fortnitePic from "src/assets/featured/fortnite.png";
import Image from "next/image";
import { BsPerson } from "react-icons/bs";

export default function recfortnite() {
  return (
    <div className="mt-8 ml-6">
      <h1 className="text-white ml-64 text-3xl">Recommended Fortnite</h1>
      <div className="  ml-64  pt-12 h-(-12)  z-38 gap-10 ">
        <div className="flex flex-column flex-wrap justify-center gap-5">
          <div className="text-left ">
            <Image
              alt="fortnite"
              src={fortnitePic}
              width={450}
              height={300}
              className="rounded-2xl border-b-4 border-sky-600 transform duration-500 hover:scale-105"
            />

            <p className="mt-1">
              First Stream! Join me and lets have fun! #Follow
            </p>
            <p className="mt-4 text-slate-400">
              <span className="bg-sky-600/30 rounded-sm">
                Grand Theft Auto V
              </span>
            </p>
            <p className="flex justify-left  ">
              <BsPerson className="text-white  " />
            </p>
            <p className="">2000 Watching</p>
          </div>
          <div className="text-left ">
            <Image
              alt="fortnite"
              src={fortnitePic}
              width={450}
              height={300}
              className="rounded-2xl border-b-4 border-sky-600 transform duration-500 hover:scale-105"
            />

            <p className="mt-1">
              First Stream! Join me and lets have fun! #Follow
            </p>
            <p className="mt-4 text-slate-400">
              <span className="bg-sky-600/30 rounded-sm">
                Grand Theft Auto V
              </span>
            </p>
            <p className="flex justify-left  ">
              <BsPerson className="text-white  " />
            </p>
            <p className="">2000 Watching</p>
          </div>
          <div className="text-left ">
            <Image
              alt="fortnite"
              src={fortnitePic}
              width={450}
              height={300}
              className="rounded-2xl border-b-4 border-sky-600 transform duration-500 hover:scale-105"
            />

            <p className="mt-1">
              First Stream! Join me and lets have fun! #Follow
            </p>
            <p className="mt-4 text-slate-400">
              <span className="bg-sky-600/30 rounded-sm">
                Grand Theft Auto V
              </span>
            </p>
            <p className="flex justify-left  ">
              <BsPerson className="text-white  " />
            </p>
            <p className="">2000 Watching</p>
          </div>
        </div>
      </div>
    </div>
  );
}
