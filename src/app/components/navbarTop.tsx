import Link from "next/link";

export default function navbarTop() {
  return (
    <div className="sticky top-0 z-40 ">
      <div className="flex flex-row justify-around gap-4 p-2 backdrop-blur-sm bg-sky-800/30 drop-shadow-xl  rounded-br-lg items-baseline  ">
        <Link href="/">
          <h1 className="text-2xl  ">
            <span className="border-b-2  border-sky-600 ">
              <span className="bg-sky-600">Next</span>
              Streaming App
            </span>
          </h1>
        </Link>

        <Link href="/">
          <button className=" bg-transparent hover:text-sky-600 text-white rounded p-2 hover:drop-shadow-xl">
            Browse
          </button>
        </Link>

        <Link href="/">
          <button className="bg-transparent hover:text-sky-600 text-white rounded p-2 hover:drop-shadow-xl">
            Login
          </button>
        </Link>

        <Link href="/">
          <button className="bg-sky-600 hover:bg-sky-800 hover:text-white text-neutral-800 rounded p-2 hover:drop-shadow-xl">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
}
