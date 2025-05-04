
import Navbar from "./componants/navbar"
export default function Home() {
  return (
    <>
    <Navbar />
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <h2 className="text-4xl font-bold mb-4">Welcome to your task manager!</h2>
      <p className="text-lg text-gray-600 mb-6">
        Organize your day, one task at a time.
      </p>
      <div className="space-x-4">
        <a href="/auth/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</a>
        <a href="/auth/register" className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50">Register</a>
      </div>
    </main>
  </>
  );
}
