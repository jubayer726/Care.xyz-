import Link from "next/link";

const LoginPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-r from-green-50 to-blue-50 px-6">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-green-600">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Login to your Care Connect account
        </p>

        <form className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-500 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Do not have an account?{" "}
          <Link href="/signup" className="text-green-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
