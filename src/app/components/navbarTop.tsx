export default function navbarTop() {
  return (
    <div className="sticky top-0 z-40">
      <div className="  flex flex-row  gap-4 justify-end p-2 backdrop-blur-sm bg-sky-800/30 drop-shadow-xl  rounded-br-lg  ">
        <button className="text-white hover:text-sky-600 hover:drop-shadow-xl">
          Login
        </button>
        <button className="bg-sky-600 hover:bg-sky-800 hover:text-white text-neutral-800 rounded p-2 hover:drop-shadow-xl">
          Sign up
        </button>
      </div>
    </div>
  );
}
