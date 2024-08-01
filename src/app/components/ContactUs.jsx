"use client";
import React, { useState } from "react";
import NeubrutalismButton from "./NeubrutalismButton"; // Adjust the path if necessary
import Image from "next/image";
import star from "../../../public/star.svg"; // Adjust the path if necessary

const ContactUs = () => {
  const initialFormData = {
    Name: "",
    Email: "",
    Message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.Name || !formData.Email) return;

    try {
      const response = await fetch("api/send", {
        method: "POST",
        body: Json.stringify({ ...formData }),
      });
    } catch (error) {}
  };

  return (
    <section className="bg-[#FFF7D6] relative flex flex-col text-white h-screen items-start justify-center p-10">
      <div className="absolute top-0 right-0 p-7">
        <Image src={star} alt="star" width={30} height={30} />
      </div>
      <div className="absolute top-0 left-0 p-7">
        <Image src={star} alt="star" width={30} height={30} />
      </div>
      <div className="absolute bottom-0 right-0 p-7">
        <Image src={star} alt="star" width={30} height={30} />
      </div>
      <div className="absolute bottom-0 left-0 p-7">
        <Image src={star} alt="star" width={30} height={30} />
      </div>
      <div className="text-left p-2 text-6xl font-mono uppercase text-[#7A9CEF] py-10 ml-10">
        <div>Let's work</div>
        <div>Together</div>
      </div>

      <form className="w-full max-w-lg ml-10">
        <div className="mb-9">
          <label
            className="block text-l font-bold mb-2 text-[#1330BE] font-mono"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full text-[#1330BE] bg-blue-100 border border-blue-800  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 md:w-3/4 lg:w-full rounded-3xl"
            id="name"
            name="Name"
            type="text"
            placeholder="Your Name *"
            onChange={handleChange}
            value={formData.Name}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-l font-bold mb-2 text-[#1330BE] font-mono"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-blue-100 text-blue-700 border border-blue-800  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 md:w-3/4 lg:w-full rounded-2xl"
            id="email"
            name="Email"
            type="email"
            placeholder="Your Email *"
            onChange={handleChange}
            value={formData.Email}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-[#1330BE] text-l font-bold mb-2 font-mono"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="appearance-none block w-full bg-blue-100 text-[#1330BE] border border-blue-800 rounded-3xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 md:w-3/4 lg:w-full"
            id="message"
            name="Message"
            placeholder="Your Message *"
            value={formData.Message}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>

        <div className="flex items-center justify-between pt-5">
          <NeubrutalismButton />
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
