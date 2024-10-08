"use client";
import React from "react";
import Image from "next/image";
import { greenArrowIcon } from "@/assets/icons";
import CountdownTimer from "./CountdownTimer";

const deals = () => {
  return (
    <div className=" p-10 grid grid-cols-3 gap-7 justify-items-center">
      <div className=" h-[33.5rem] w-[26.5rem] flex flex-col bg-card_1 bg-no-repeat bg-cover p-10 text-center rounded-lg">
        <h3 className="text-white text-body-medium mb-1">BEST DEALS</h3>
        <p className="text-white text-body-xxl font-semi-bold">
          Sale of the Month
        </p>
        <div className="mb-3">
          <CountdownTimer days={1} hours={2} minutes={60} seconds={30} />
        </div>
        <div className="flex justify-center">
          <button className="text-success bg-white flex items-center text-body-small px-4 py-2 rounded-full font-semi-bold">
            Shop Now
            <Image className="ml-2 " src={greenArrowIcon} />
          </button>
        </div>
      </div>

      <div className=" h-[33.5rem] w-[26.5rem] flex flex-col bg-card_2 bg-no-repeat bg-cover text-center p-10 rounded-lg">
        <h3 className="text-white text-body-medium mb-1"> 85% FAT FREE</h3>
        <p className="text-white text-body-xxl font-semi-bold mb-2">
          Low-Fat Meat
        </p>
        <p className="text-white text-body-medium mb-4">
          Started at <span className="text-warning">$79.99</span>
        </p>
        <div className="flex justify-center">
          <button className="text-success bg-white text-body-small flex items-center px-4 py-2 rounded-full font-semi-bold">
            Shop Now
            <Image className="ml-2 " src={greenArrowIcon} />
          </button>
        </div>
      </div>

      <div className=" h-[33.5rem] w-[26.5rem] flex flex-col bg-card_3 bg-no-repeat bg-cover text-center p-10 rounded-lg">
        <h3 className="text-grey-900 text-body-medium mb-1">Summer Sale</h3>
        <p className="text-grey-900 text-body-xxl font-semi-bold mb-2">
          100% Fresh Fruit
        </p>
        <p className="mb-4">
          <span className="bg-grey-900 text-orange-300 py-1 px-2 rounded-md">
            64% OFF
          </span>
        </p>
        <div className="flex justify-center">
          <button className="text-success bg-white text-body-small flex items-center px-4 py-2 rounded-full font-semi-bold">
            Shop Now
            <Image className="ml-2 " src={greenArrowIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default deals;
