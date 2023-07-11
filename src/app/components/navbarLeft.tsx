import Image from "next/image";
import retr080sImg from "src/assets/profile/retr080s.png";

export default function navbarLeft() {
  return (
    <div className="absolute">
      <div className="m-0  w-64 h-screen  backdrop-blur-sm bg-sky-800/30   text-sky-600 gap-4 z-39   border-sky-600">
        <p className="text-white font-bold text-center">Recommended </p>
        <ul role="list" className=" p-6 divide-y divide-slate-200 ">
          <li className="flex py-4 first:pt-0 last:pb-0">
            <Image
              src={retr080sImg}
              alt="retr080s"
              className="h-10 w-10 rounded-full"
            />
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-slate-200">Retro080s</p>
              <p className="text-sm text-slate-400 truncate">
                Streaming: VSCode...
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
