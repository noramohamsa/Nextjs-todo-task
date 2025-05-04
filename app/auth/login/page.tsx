
export default function LoginPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
  
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Sign in
            </button>
          </form>
  
          <div className="mt-6 text-center text-sm">
            Don’t have an account?{" "}
            <a href="/auth/register" className="text-blue-500 hover:underline">Register</a>
          </div>
        </div>
      </div>
    );
  }
  