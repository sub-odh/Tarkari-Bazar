"use client";
import React from "react";
import Nav from "../_components/nav";
import Image from "next/image";
import { contactEmail, contactMapPin, phoneIcon } from "@/assets/icons";

const Contact = () => {
  return (
    <section className="mx-10 my-2 ">
      <Nav />
      <div className="grid grid-cols-2 justify-items-center p-10">
        <div className="shadow-gray-300 shadow-lg p-6">
          <div className="flex flex-col items-center justify-center py-6">
            <Image src={contactMapPin} alt="Map Pin" />
            <p>Kathmandu, Nepal</p>
            <hr className=" mt-10 w-[85%]" />
          </div>

          <div className="flex flex-col items-center justify-center pt-6">
            <Image src={contactEmail} alt="Email" />
            <p>Tarkaribazar@gmail.com</p>
            <hr className=" mt-10 w-[85%]" />
          </div>

          <div className="flex flex-col items-center justify-center py-6">
            <Image src={phoneIcon} alt="Phone" />
            <p>+977-9844112233</p>
          </div>
        </div>

        <div className="flex flex-col shadow-gray-300 shadow-lg p-10">
          <h1 className="text-grey-900 text-body-xxl font-semi-bold">
            Just Say Hello!
          </h1>
          <p className="text-grey-500 text-body-small font-normal py-2">
            Do you fancy saying hi to me or you want to get started with your
            project and you need my help? Feel free to contact me.
          </p>

          <div className="flex justify-between mb-4">
            <input
              type="text"
              placeholder="Name"
              className="border-2 w-80 rounded-sm p-2 mr-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-2 w-80 rounded-sm p-2"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="border-2 w-full rounded-sm p-2 mb-4"
          />
          <textarea
            placeholder="Message"
            className="border-2 w-full rounded-sm p-2 mb-4"
          />

          <button className="bg-success text-white text-body-medium font-semibold py-3 px-6 rounded-3xl w-48 h-[3.25rem]">
            Send Message
          </button>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31713617815!2d85.2849330560132!3d27.708954252218156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1725130878110!5m2!1sen!2snp"
          width="100%"
          className="border-0 h-[25rem]"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};
export default Contact;
