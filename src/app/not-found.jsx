import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-blue-50 px-6">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold text-green-600">404</h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-600">
          Oops! The page you are looking for does not exist or has been moved.
          Lets get you back to a safe place.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-500 transition"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </section>
  );
}
