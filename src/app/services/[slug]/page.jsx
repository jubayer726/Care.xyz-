"use client";
import { useParams } from "next/navigation";

const serviceDetails = {
  "baby-care": {
    title: "Baby Care",
    photo: "https://images.pexels.com/photos/27175608/pexels-photo-27175608.jpeg",
    description:
      "Our Baby Care service provides safe, nurturing, and professional care for infants and toddlers.",
  },
  "elderly-care": {
    title: "Elderly Care",
    photo: "https://images.pexels.com/photos/3791664/pexels-photo-3791664.jpeg",
    description:
      "Compassionate support for elderly individuals, ensuring comfort, dignity, and companionship.",
  },
  "sick-people-care": {
    title: "Sick People Care",
    photo: "https://images.pexels.com/photos/8376272/pexels-photo-8376272.jpeg",
    description:
      "Dedicated care for sick individuals, including monitoring, medication support, and recovery assistance.",
  },
  "nursing-care": {
    title: "Nursing Care",
    photo: "https://images.pexels.com/photos/6129689/pexels-photo-6129689.jpeg",
    description:
      "Professional nursing services at home, ensuring medical attention and personalized care.",
  },
  "physiotherapy": {
    title: "Physiotherapy",
    photo: "https://images.pexels.com/photos/7551627/pexels-photo-7551627.jpeg",
    description:
      "Expert physiotherapy sessions to aid recovery, mobility, and overall physical well-being.",
  },
  "doctors-home-visit": {
    title: "Doctors Home Visit",
    photo: "https://images.pexels.com/photos/6753337/pexels-photo-6753337.jpeg",
    description:
      "Qualified doctors available for home visits, providing medical consultation and treatment.",
  },
  "post-operative-care": {
    title: "Post-operative Care",
    photo: "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg",
    description:
      "Specialized care after surgery, ensuring smooth recovery and proper medical support.",
  },
  "care-for-special-children": {
    title: "Care for Special Children",
    photo: "https://images.pexels.com/photos/7943504/pexels-photo-7943504.jpeg",
    description:
      "Tailored care for children with special needs, focusing on growth, learning, and happiness.",
  },
  babysitting: {
    title: "Babysitting",
    photo: "https://images.pexels.com/photos/6849617/pexels-photo-6849617.jpeg",
    description:
      "Trusted babysitting services to ensure your child is safe, happy, and cared for.",
  },
};

const ServiceDetailPage = ({params}) => {
  const {slug} = useParams();

  const service = serviceDetails[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>Service not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {service.title}
        </h1>
        <div>
          <img src={service.photo} alt={service.title} 
          className="rounded p-5 "
          />
        </div>
        <p className="text-gray-600 text-lg">{service.description}</p>
      </div>
    </div>
  );
}
export default ServiceDetailPage;