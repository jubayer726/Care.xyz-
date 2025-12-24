import React from "react";

const testimonials = [
  {
    name: "Ayesha Rahman",
    photo: "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg",
    role: "Mother of a newborn",
    feedback:
      "The Baby Care service was a blessing for us. The caregivers were professional, kind, and treated my child like their own.",
  },
  {
    name: "Mr. Karim",
    photo: "https://images.pexels.com/photos/5867737/pexels-photo-5867737.jpeg",
    role: "Son of elderly parent",
    feedback:
      "I am grateful for the Elderly Care service. My father received compassionate support and companionship that made him feel valued.",
  },
  {
    name: "Dr. Sultana",
    photo: "https://images.pexels.com/photos/5327864/pexels-photo-5327864.jpeg",
    role: "Post-surgery patient",
    feedback:
      "The Post-operative Care team ensured my recovery was smooth. Their attention and dedication gave me peace of mind.",
  },
  {
    name: "Rafiq Hasan",
    photo: "https://images.pexels.com/photos/5867730/pexels-photo-5867730.jpeg",
    role: "Physiotherapy client",
    feedback:
      "The physiotherapy sessions were excellent. I regained mobility faster than expected thanks to their expert guidance.",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          What Our Clients Say
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Hear from families and individuals who trusted our care services.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 text-left"
          >
            <p className="text-gray-600 italic mb-4">
              “{testimonial.feedback}”
            </p>
            <div>
                <img className="w-32 rounded-full m-3" src={testimonial.photo} alt="Photo" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              {testimonial.name}
            </h3>
            <span className="text-sm text-gray-500">{testimonial.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}