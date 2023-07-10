export default function navbarLeft() {
  return (
    <div className="absolute">
      <div className=" backdrop-blur-sm bg-sky-800/30 w-64 h-screen min-h-screen text-sky-600 gap-4 p-2  z-39 rounded-br-lg drop-shadow-xl">
        <ul className="text-center">
          <p className="text-white font-bold">Recommended </p>
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ul>
      </div>
    </div>
  );
}
