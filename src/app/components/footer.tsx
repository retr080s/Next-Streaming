export default function footer() {
  return (
    <div className="mt-12 ">
      <h1 className="text-center text-3xl drop-shadow-md tracking-tighter">
        <span className="border-b-2 border-sky-600 ">
          <span className="bg-sky-600">Next</span>
          Streaming App
        </span>
      </h1>

      <div className="flex flex-row justify-center  mt-12 h-64 gap-4">
        <p>Policy:</p>
        <ul>
          <li>-Guidelines</li>
          <li>-Privacy Policy</li>
          <li>-Terms of service</li>
          <li>-Help</li>
        </ul>
        <p>Resources:</p>
        <ul>
          <li>-Support</li>
          <li>-Contact</li>
          <li>-Careers</li>
          <li>-Partner Program</li>
        </ul>
      </div>
    </div>
  );
}
