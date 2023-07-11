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
        <hr />
        {/* min-h-screen */}
        <label htmlFor="email">Username</label>
        <input
          className="p-2 rounded-lg mb-4 focus:outline-none bg-sky-800/30 backdrop-blur-sm drop-shadow-xl  text-white"
          id="username"
          type="text"
          placeholder="Username"
        />
        <p className="text-left p-1 m-2 rounded-sm bg-sky-800/30 text-slate-400">
          You can enter either your username or your email which is linked to
          your account. Reset link will be sent to your email.
        </p>
        <button className="p-2  border border-sky-600 rounded-lg mb-4 focus:outline-none hover:bg-sky-800">
          Reset Password
        </button>
      </div>
    </div>
  );
}
