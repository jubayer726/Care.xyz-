import { CheckCircle } from "lucide-react";
import Link from "next/link";

const services = [
  { title: "Baby Care", slug: "baby-care" },
  { title: "Elderly Care", slug: "elderly-care" },
  { title: "Sick People Care", slug: "sick-people-care" },
  { title: "Nursing Care", slug: "nursing-care" },
  { title: "Physiotherapy", slug: "physiotherapy" },
  { title: "Doctors Home Visit", slug: "doctors-home-visit" },
  { title: "Post-operative Care", slug: "post-operative-care" },
  { title: "Care for Special Children", slug: "care-for-special-children" },
  { title: "Babysitting", slug: "babysitting" },
];

const Services = () => {
  return (
    <section className="bg-blue-600 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl text-orange-500 md:text-4xl font-bold text-center">
          Care Connect Services
        </h2>
        <div className="w-24 h-1 bg-white mx-auto mt-4 mb-10 rounded"></div>

        {/* Motivation Text */}
        <p className="max-w-3xl mx-auto text-center text-blue-100 mb-14 text-lg">
          At <span className="font-semibold text-white">Care Connect</span>, we believe
          caregiving is not just a service — its a responsibility of love, trust,
          and compassion. We are committed to supporting families by providing
          professional, reliable, and heartfelt care for every stage of life.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
            href={`/services/${service.slug}`}
              key={index}
              className="bg-white text-gray-800 rounded-2xl px-6 py-8 flex items-center gap-4 shadow-md hover:scale-105 transition"
            >
              <CheckCircle className="text-orange-500 w-8 h-8" />
              <span className="font-semibold text-lg">{service.title}</span>
            </Link>
          ))}
        </div>

        {/* Bottom Motivation */}
        <div className="mt-16 text-center">
          <p className="text-blue-100 max-w-2xl mx-auto">
            💙 Because every child deserves gentle care, every elderly person
            deserves dignity, and every patient deserves comfort — right at home.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
