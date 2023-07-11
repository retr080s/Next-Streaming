import Link from "next/link";

export default function footer() {
  return (
    <div className="mt-12 ">
      <h1 className="text-center text-3xl drop-shadow-md tracking-tighter">
        <span className="border-b-2  border-sky-600 ">
          <span className="bg-sky-600">Next</span>
          Streaming App
        </span>
      </h1>
      <div className="flex flex-row justify-center  mt-16 h-screen gap-4 m-0 bg-black/30  ">
        <p>Policy:</p>
        <ul>
          <Link href="/guidelines">
            <li className="hover:text-slate-400">-Guidelines</li>
          </Link>
          <Link href="/privacypolicy">
            <li className="hover:text-slate-400">-Privacy Policy</li>
          </Link>
          <Link href="/tos">
            <li className="hover:text-slate-400">-Terms of service</li>
          </Link>
          <Link href="help">
            <li className="hover:text-slate-400">-Help</li>
          </Link>
        </ul>
        <p>Resources:</p>
        <ul>
          <Link href="/support">
            <li className="hover:text-slate-400">-Support</li>
          </Link>
          <Link href="/contact">
            <li className="hover:text-slate-400">-Contact</li>
          </Link>
          <Link href="/careers">
            <li className="hover:text-slate-400">-Careers</li>
          </Link>
          <Link href="/partnerprogram">
            <li className="hover:text-slate-400">-Partner Program</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
