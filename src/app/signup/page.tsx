import NavbarTop from "../components/NavbarTop";

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
        <label htmlFor="username">Username</label>
        <input
          className="p-2 rounded-lg mb-4 focus:outline-none bg-sky-800/30 backdrop-blur-sm drop-shadow-xl  text-white"
          id="username"
          type="text"
          placeholder="Username"
        />
        <label htmlFor="password">Password</label>
        <input
          className="p-2  rounded-lg mb-4 focus:outline-none bg-sky-800/30 backdrop-blur-sm drop-shadow-xl  text-white"
          id="password"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="password">Password</label>
        <input
          className="p-2  rounded-lg mb-4 focus:outline-none bg-sky-800/30 backdrop-blur-sm drop-shadow-xl  text-white"
          id="password"
          type="password"
          placeholder="Password"
        />
        <button className="p-2 border border-sky-600 rounded-lg mb-4 focus:outline-none hover:bg-sky-800">
          Sign up
        </button>
      </div>
    </div>
  );
}
