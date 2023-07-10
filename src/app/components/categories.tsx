import Image from "next/image";
import gtaPic from "src/assets/gta.png";
import codPic from "src/assets/codmw2.png";
import csgoPic from "src/assets/csgo.png";
import fortnitePic from "src/assets/fortnite.png";
import valorantPic from "src/assets/valorant.png";
import warzonePic from "src/assets/warzone.png";
import fhPic from "src/assets/fh.jpg";
import f1Pic from "src/assets/f1.png";

import { BsPerson } from "react-icons/bs";

export default function categories() {
  return (
    <div className="mt-8 ml-6">
      <h1 className="text-white ml-64 text-3xl">Categories</h1>
      <div className="  ml-64  pt-12 h-(-12)  z-38 gap-10 ">
        <div className="flex flex-column flex-wrap justify-center gap-5 rounded-3xl  ">
          {/* GTA PART */}
          <div className="text-center">
            <Image
              alt="gta"
              src={gtaPic}
              width={170}
              height={300}
              className="rounded-2xl transform duration-500 hover:scale-105 border-b-4 border-sky-600"
            />
            <p className="mt-4">Grand Theft Auto V</p>
            <p className="flex justify-center  ">
              <BsPerson className="text-white justify-center " />
            </p>
            <p className="">2000 Watching</p>
          </div>

          {/* COD PART */}
          <div className="text-center">
            <Image
              alt="cod"
              src={codPic}
              width={170}
              height={300}
              className="rounded-2xl transform duration-500 hover:scale-105 border-b-4 border-sky-600"
            />
            <p className="mt-4">Call of Duty: MW2</p>
            <p className="flex justify-center  ">
              <BsPerson className="text-white justify-center " />
            </p>
            <p className="">2000 Watching</p>
          </div>

          {/* WARZONE PART */}
          <div className="text-center">
            <Image
              alt="warzone"
              src={warzonePic}
              width={170}
              height={300}
              className="rounded-2xl transform duration-500 hover:scale-105 border-b-4 border-sky-600"
            />
            <p className="mt-4">COD WARZONE 2</p>
            <p className="flex justify-center  ">
              <BsPerson className="text-white justify-center " />
            </p>
            <p className="">2000 Watching</p>
          </div>

          {/* CSGO PART */}
          <div className="text-center">
            <Image
              alt="csgo"
              src={csgoPic}
              width={170}
              height={300}
              className="rounded-2xl transform duration-500 hover:scale-105 border-b-4 border-sky-600"
            />
            <p className="mt-4">CS:GO</p>
            <p className="flex justify-center  ">
              <BsPerson className="text-white justify-center " />
            </p>
            <p className="">2000 Watching</p>
          </div>

          {/* Fortnite PART */}
          <div className="text-center">
            <Image
              alt="fortnite"
              src={fortnitePic}
              width={170}
              height={300}
              className="rounded-2xl transform duration-500 hover:scale-105 border-b-4 border-sky-600"
            />
            <p className="mt-4">Fortnite</p>
            <p className="flex justify-center  ">
              <BsPerson className="text-white justify-center " />
            </p>
            <p className="">2000 Watching</p>
          </div>
          {/* Valorant PART */}

          <div className="text-center">
            <Image
              alt="valorant"
              src={valorantPic}
              width={170}
              height={300}
              className="rounded-2xl transform duration-500 hover:scale-105 border-b-4 border-sky-600"
            />
            <p className="mt-4">Valorant</p>
            <p className="flex justify-center  ">
              <BsPerson className="text-white justify-center " />
            </p>
            <p className="">2000 Watching</p>
          </div>

          {/* Forza PART */}

          <div className="text-center">
            <Image
              alt="forza"
              src={fhPic}
              width={170}
              height={300}
              className="rounded-2xl transform duration-500 hover:scale-105 border-b-4 border-sky-600"
            />
            <p className="mt-4">Forza Horizon 5</p>
            <p className="flex justify-center  ">
              <BsPerson className="text-white justify-center " />
            </p>
            <p className="">2000 Watching</p>
          </div>
          {/* F1 PART */}
          <div className="text-center">
            <Image
              alt="f1"
              src={f1Pic}
              width={170}
              height={300}
              className="rounded-2xl transform duration-500 hover:scale-105 border-b-4 border-sky-600"
            />
            <p className="mt-4">F1</p>
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
