import React from "react";
import Image from "next/image";
import { greenArrowIcon, addToCartIcon } from "@/assets/icons";
import {
  cabbageImg,
  chiliImg,
  cornImg,
  lettuceImg,
} from "@/assets/images/products";

const productItems = [
  {
    id: 1,
    image: cabbageImg,
    name: "Chanise Cabbage",
    price: 14.99,
    rating: 4,
  },
  {
    id: 2,
    image: lettuceImg,
    name: "Green Lettuce",
    price: 14.99,
    rating: 4,
  },
  {
    id: 3,
    image: chiliImg,
    name: "Green Chili",
    price: 14.99,
    rating: 4,
  },
  {
    id: 4,
    image: cornImg,
    name: "Corn",
    price: 14.99,
    rating: 4,
  },
];

const products = () => {
  return (
    <section className="mt-7 mx-10 my-10 grid justify-items-center">
      <div>
        <h1 className="flex justify-center text-success text-body-small mb-2">
          PRODUCTS
        </h1>
        <p className="flex justify-center text-grey-900 mb-9 text-body-xxl font-semi-bold">
          Oue Featured Products
        </p>
      </div>

      <div className="flex">
        <div
          className={`flex flex-col items-start rounded-lg border border-grey-200 hover:shadow-success-bright hover:shadow-md transition-shadow hover:border-success  hover:border-1 mr-4`}
        >
          <div className="col-span-1 lg:col-span-2 bg-summerSale bg-cover p-4 rounded-lg flex flex-col items-center text-center h-[22rem] w-[15.5rem]">
            <p className="text-body-tiny py-3">SUMMER SALE</p>
            <p className="text-green-600 font-bold text-4xl">75% off</p>

            <div className="mt-5 flex justify-center">
              <button className="cursor-pointer text-success bg-white text-body-small flex items-center px-4 py-2 rounded-full font-semi-bold">
                Shop Now
                <Image src={greenArrowIcon} alt="button" className="ml-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 ">
          {productItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col px-4 rounded-lg border border-grey-200 hover:shadow-success-bright hover:shadow-md transition-shadow hover:border-success  hover:border-1`}
            >
              <Image src={item.image} alt={item.name} />

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-900 text-body-medium mt-2">
                    {item.name}
                  </p>
                  <p className="text-gray-900 text-body-medium mt-2">
                    ${item.price}
                  </p>
                </div>
                <div>
                  <button className=" h-12 w-12 mt-4 border rounded-full bg-grey-100 transition ease-in-out duration-300  hover:bg-success">
                    <Image
                      className="m-auto"
                      src={addToCartIcon}
                      alt="cartIcon"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default products;
