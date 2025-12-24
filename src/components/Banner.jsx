import Link from "next/link";

const Banner = () => {
  return (
    <section className="bg-linear-to-r from-green-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 leading-tight">
            Trusted Care for <br />
            <span className="text-green-600">Your Loved Ones</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Care Connect helps families find reliable and verified caretakers for
            children, elderly, and special care at home. Simple booking, trusted
            professionals, peace of mind.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/services"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-500 transition"
            >
              Find a Caregiver
            </Link>

            <Link
              href="/register"
              className="border border-green-600 text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition"
            >
              Become a Caregiver
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/hero.jpeg"
            alt="Care Connect Banner"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
