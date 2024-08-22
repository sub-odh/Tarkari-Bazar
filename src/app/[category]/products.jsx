import React from "react";
import Image from "next/image";
import { greenArrowIcon, addToCartIcon, appleIcon } from "@/assets/icons";
import {
  cabbageImg,
  chiliImg,
  cornImg,
  lettuceImg,
  orangeImg,
  eggplantImg,
  ladyfingerImg,
  tomatoImg,
  potatoImg,
  cauliflowerImg,
  appleImg,
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
  {
    id: 5,
    image: appleImg,
    name: "Green Apple",
    price: 14.99,
    rating: 4,
  },
  {
    id: 6,
    image: orangeImg,
    name: "Orange",
    price: 14.99,
    rating: 4,
  },
  {
    id: 7,
    image: eggplantImg,
    name: "Eggplant",
    price: 14.99,
    rating: 4,
  },
  {
    id: 8,
    image: ladyfingerImg,
    name: "Lady Finger",
    price: 14.99,
    rating: 4,
  },
  {
    id: 9,
    image: tomatoImg,
    name: "Red Tomatoes",
    price: 14.99,
    rating: 4,
  },
  {
    id: 10,
    image: potatoImg,
    name: "Big Potatoes",
    price: 14.99,
    rating: 4,
  },
  {
    id: 11,
    image: cauliflowerImg,
    name: "Fresh Cauliflower",
    price: 14.99,
    rating: 4,
  },
];

const products = () => {
  const filteredItems = productItems.filter((item) =>
    [1, 2, 3, 4].includes(item.id)
  );

  const hotDealsOrder = [5, 6, 2];
  const hotDeals = hotDealsOrder.map((id) =>
    productItems.find((item) => item.id === id)
  );

  const bestSellerOrder = [7, 8, 9];
  const bestSeller = bestSellerOrder.map((id) =>
    productItems.find((item) => item.id === id)
  );

  const topRatedOrder = [10, 4, 11];
  const topRated = topRatedOrder.map((id) =>
    productItems.find((item) => item.id === id)
  );

  return (
    <>
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

          <div className=" grid grid-cols-4 gap-4 ">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className={` group relative px-4 rounded-lg border border-grey-200 hover:shadow-success-bright hover:shadow-md transition-shadow hover:border-success  hover:border-1`}
              >
                <Image src={item.image} alt={item.name} />
                <div className=" opacity-0 group-hover:opacity-100 absolute top-4 right-4 flex flex-col space-y-2 justify-end">
                  <button className=" h-12 w-12 mt-4 border rounded-full bg-wishlistDefault bg-cover hover:bg-wishlistHover hover:transition-all ease-in-out duration-300"></button>

                  <button className=" h-12 w-12 mt-4 border rounded-full bg-quickViewDefault bg-cover hover:bg-quickViewHover hover:transition-all ease-in-out duration-300"></button>
                </div>
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
                    <button className=" h-12 w-12 mt-4 border rounded-full bg-cart bg-cover hover:bg-cartHover hover:transition-all ease-in-out duration-300"></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-4 gap-4 mx-10">
        <div>
          <h1 className="text-grey-900 font-medium mb-2">HOT DEALS</h1>
          <div>
            {hotDeals.map((item) => (
              <div key={item.id} className="flex group border mb-4 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-[6.375rem] h-[6.375rem] m-2"
                />
                <div className="pt-4 ">
                  <p>{item.name}</p>
                  <p className="group-hover:hidden">${item.price}</p>
                </div>
                <div className=" flex absolute top-11 right-9 items-center opacity-0 group-hover:opacity-100">
                  <button className=" h-12 w-12 mr-4 border rounded-full bg-cart bg-cover hover:bg-cartHover hover:transition-all ease-in-out duration-300"></button>
                  <button className=" h-12 w-12 mr-4 border rounded-full bg-wishlistDefault bg-cover hover:bg-wishlistHover hover:transition-all ease-in-out duration-300"></button>
                  <button className=" h-12 w-12 mr-4 border rounded-full bg-quickViewDefault bg-cover hover:bg-quickViewHover hover:transition-all ease-in-out duration-300"></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-grey-900 font-medium mb-2">Best Seller</h1>
          <div>
            {bestSeller.map((item) => (
              <div key={item.id} className="flex group border mb-4 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-[6.375rem] h-[6.375rem] m-2"
                />
                <div className="pt-4 ">
                  <p>{item.name}</p>
                  <p className="group-hover:hidden">${item.price}</p>
                </div>
                <div className=" flex absolute top-11 right-9 items-center opacity-0 group-hover:opacity-100">
                  <button className=" h-12 w-12 mr-4 border rounded-full bg-cart bg-cover hover:bg-cartHover hover:transition-all ease-in-out duration-300"></button>
                  <button className=" h-12 w-12 mr-4 border rounded-full bg-wishlistDefault bg-cover hover:bg-wishlistHover hover:transition-all ease-in-out duration-300"></button>
                  <button className=" h-12 w-12 mr-4 border rounded-full bg-quickViewDefault bg-cover hover:bg-quickViewHover hover:transition-all ease-in-out duration-300"></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-grey-900 font-medium mb-2">Top Rated</h1>
          <div>
            {topRated.map((item) => (
              <div key={item.id} className="flex group border mb-4 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-[6.375rem] h-[6.375rem] m-2"
                />
                <div className="pt-4 ">
                  <p>{item.name}</p>
                  <p className="group-hover:hidden">${item.price}</p>
                </div>
                <div className=" flex absolute top-11 right-9 items-center opacity-0 group-hover:opacity-100">
                  <button className=" h-12 w-12 mr-4 border rounded-full bg-cart bg-cover hover:bg-cartHover hover:transition-all ease-in-out duration-300"></button>
                  <button className=" h-12 w-12 mr-4 border rounded-full bg-wishlistDefault bg-cover hover:bg-wishlistHover hover:transition-all ease-in-out duration-300"></button>
                  <button className=" h-12 w-12 mr-4 border rounded-full bg-quickViewDefault bg-cover hover:bg-quickViewHover hover:transition-all ease-in-out duration-300"></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`flex flex-col items-start mb-4 border hover:shadow-success-bright hover:shadow-md transition-shadow hover:border-success  hover:border-1 mr-4`}
        >
          <div className="col-span-1 lg:col-span-2 bg-hotSale p-4 bg-cover bg-center items-center text-center h-full w-full">
            <p className="text-grey-900 text-body-tiny font-medium py-3">
              HOT SALE
            </p>
            <p className="text-grey-900 text-h5">
              <span className="font-bold text-4xl">Save 37%</span> on <br />{" "}
              Every Order
            </p>

            <div className="mt-5 flex justify-center">
              <button className="cursor-pointer text-success bg-white text-body-small flex items-center px-4 py-2 rounded-full font-semi-bold">
                Shop Now
                <Image src={greenArrowIcon} alt="button" className="ml-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default products;
