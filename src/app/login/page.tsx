import NavbarTop from "../components/NavbarTop";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <NavbarTop />
      <div className="flex flex-col items-center justify-center mt-20 py-2">
        <hr />
        {/* min-h-screen */}
        <label htmlFor="email">Email</label>
        <input
          className="p-2 rounded-lg mb-4 focus:outline-none bg-sky-800/30 backdrop-blur-sm drop-shadow-xl  text-white"
          id="email"
          type="text"
          placeholder="Email"
        />

        <label htmlFor="password">Password</label>
        <input
          className="p-2  rounded-lg mb-4 focus:outline-none bg-sky-800/30 backdrop-blur-sm drop-shadow-xl  text-white"
          id="password"
          type="password"
          placeholder="Password"
        />
        <Link href="/resetpassword">
          <p className="text-sm m-2 text-slate-400 hover:text-white">
            Forgot password
          </p>
        </Link>
        <button className="p-2 border border-sky-600 rounded-lg mb-4 focus:outline-none hover:bg-sky-800">
          Login
        </button>
      </div>
    </div>
  );
}
