import Link from "next/link";

export default function Navbar (){
    const isLoggedIn = false;
    return(


        <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">To-Do App</h1>
        <div className="space-x-4">
          {!isLoggedIn ? (
            <>
              <Link href="/auth/login" className="text-blue-500 hover:underline">Login</Link>
              <Link href="/auth/register" className="text-blue-500 hover:underline">Register</Link>
            </>
          ) : (
            <>
              <Link href="/dashboard" className="text-blue-500 hover:underline">Dashboard</Link>
              <Link href="/todos" className="text-blue-500 hover:underline">Todos</Link>
            </>
          )}
        </div>
      </nav>




    )
}