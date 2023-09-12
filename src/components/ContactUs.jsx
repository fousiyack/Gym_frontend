import React, { useState } from "react";
import Banner from "./Banner";
import { BASE_URL } from "../Utils/Config";
import axios from "axios";

export default function ContactUs() {
  const initial = {
    full_name: "",
    email: "",
    country: "",
    phone: "",
    message: "",
  };
  const [formData, setFormData] = useState(initial);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("formData..............", formData);
    axios
      .post(`${BASE_URL}/createContact/`, formData)
      .then((response) => {
        console.log("Complaint submitted successfully:", response.data);
        setSuccessMessage(
          "Thank you for contacting us! We will get back to you soon."
        );
        setFormData(initial);
      })
      .catch((error) => {
        console.error("Error submitting complaint:", error);
      });
  };

  const handleCancel = () => {
    setFormData(initial);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold mb-3 text-center pt-6">Contact Us</h1>
      <div className="w-full h-full flex mx-auto py-5">
        <div className="w-1/2">
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md"
          >
            <div className="mb-4">
              <label
                htmlFor="full_name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                value={formData.full_name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Mobile No
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Country
              </label>
              <input
                type="text"
                name="country"
                id="country"
                value={formData.country}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            {successMessage && (
              <div className="bg-green-200 text-green-800 py-2 px-4 mb-4 rounded">
                {successMessage}
              </div>
            )}
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/2 px-5">
          Send us a message in the contact form and we will take the time to get
          to know you and what you want out of your fitness holiday or training.
          We will get back to you within 24 hrs and will try everything in our
          power so make sure you have a great time
          <div>
            <p>
              Better yet, see us in person! Azizya Ladies Gym: 4 Eskak St.
              Al-Aziziya, Qatar Tel: 70000077 https://goo.gl/maps/Ft7t5L2fSR42
              Ladies Studio: 01 Mall Ain Khalid, Qatar Tel: 50305530
              https://goo.gl/maps/qQ88UGWg7d7oFqsRA DFC Ladies' Gym Doha
              Festival City Tel: 50607788 DFC Men's Gym Doha Festival City Tel:
              50607575 Iconic 2022 Ladies Gym Aspire Zone Tel: 66070760 Message
              us on WhatsApp edge fitness, Doha, Qatar +974 70000077 Hours
              Azizya Ladies Gym : Every day from 7:00 A.M. to 11:00 P.M. 01 Mall
              Studio: Saturday-Thursday 10:00 A.M. to 8:00 P.M. DFC Ladies Gym
              7.00 A.M to 11.00 P.M. DFC Men Gym 7.00 A.M to 11.00 P.M. Iconic
              2022 Ladies Gym 7.00 A.M to 11.00 P.M.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
