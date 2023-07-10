export default function navbarTop() {
  return (
    <div>
      <div className="flex flex-row text-green-500 gap-4 justify-end p-2 bg-neutral-800 drop-shadow-lg z-40  ">
        <button className="">Login</button>
        <button className="bg-green-500 text-neutral-900 rounded p-2">
          Sign up
        </button>
      </div>
    </div>
  );
}
