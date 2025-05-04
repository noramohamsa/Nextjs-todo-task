// app/auth/register/page.tsx

export default function RegisterPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
          
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
  
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Register
            </button>
          </form>
  
          <div className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <a href="/auth/login" className="text-blue-500 hover:underline">Login</a>
          </div>
        </div>
      </div>
    );
  }
  