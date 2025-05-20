export default function Sociallogin() {
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold mb-4">Login With</h2>
        <button className="w-full bg-blue-500 text-white p-2 rounded mb-2 flex items-center justify-center">
          <span className="mr-2">G</span> Login with Google
        </button>
        <button className="w-full bg-gray-800 text-white p-2 rounded flex items-center justify-center">
          <span className="mr-2">G</span> Login with GitHub
        </button>
      </div>
    </>
  );
}
