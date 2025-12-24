"use client"
import { useState } from "react";

export default function BookNow() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    gender: "",
    address: "",
    requirement: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can integrate with backend or email service here
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-green-50 to-blue-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Please Call Us Today or Fill Out the Inquiry Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Patients Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded px-4 py-2"
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Age
              </label>
              <input
                type="number"
                name="age"
                className="w-full border border-gray-300 rounded px-4 py-2"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Gender
              </label>
              <select
                name="gender"
                className="w-full border border-gray-300 rounded px-4 py-2"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              className="w-full border border-gray-300 rounded px-4 py-2"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Caregiver Requirements <span className="text-red-500">*</span>
            </label>
            <select
              name="requirement"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
              onChange={handleChange}
            >
              <option value="">Select Service</option>
              <option value="Baby Care">Baby Care</option>
              <option value="Elderly Care">Elderly Care</option>
              <option value="Sick People Care">Sick People Care</option>
              <option value="Nursing Care">Nursing Care</option>
              <option value="Physiotherapy">Physiotherapy</option>
              <option value="Doctors Home Visit">Doctors Home Visit</option>
              <option value="Post-operative Care">Post-operative Care</option>
              <option value="Care for Special Children">
                Care for Special Children
              </option>
              <option value="Babysitting">Babysitting</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded px-4 py-2"
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-600 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}