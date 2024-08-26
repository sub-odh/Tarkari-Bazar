import React from "react";
import Image from "next/image";
import {
  bakingImg,
  BeautyImg,
  BeveragesImg,
  breadImg,
  cookingImg,
  detergentsImg,
  diabeticFoodImg,
  fruitsImg,
  meatsImg,
  oilImg,
  snacksImg,
  vegeImg,
} from "@/assets/images/category";

const categoryItems = [
  {
    icon: fruitsImg,
    title: "Fruits",
  },
  {
    icon: vegeImg,
    title: "Fresh Vegetables",
  },
  {
    icon: meatsImg,
    title: "Meat & Fish",
  },
  {
    icon: snacksImg,
    title: "Snacks",
  },
  {
    icon: BeveragesImg,
    title: "Beverages",
  },
  {
    icon: BeautyImg,
    title: "Beauty & Health",
  },
  {
    icon: breadImg,
    title: "Bread & Bakery",
  },
  {
    icon: bakingImg,
    title: "Baking Needs",
  },
  {
    icon: cookingImg,
    title: "Cooking",
  },
  {
    icon: diabeticFoodImg,
    title: "Diabetic Food",
  },
  {
    icon: detergentsImg,
    title: "Dish Detergents",
  },
  {
    icon: oilImg,
    title: "Oil",
  },
];

const Category = () => {
  return (
    <section className="mt-7 my-10">
      <h1 className="flex justify-center text-success text-body-small mb-2">
        CATEGORY
      </h1>
      <p className="flex justify-center text-grey-900 text-body-xxl font-semi-bold">
        Shop by Top Categories
      </p>
      <div className="grid grid-cols-6 gap-4 mt-5">
        {categoryItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 rounded-lg border border-grey-200 hover:shadow-success-bright hover:shadow-md transition-shadow hover:border-success  hover:border-1`}
          >
            <Image src={item.icon} alt={item.title} />
            <p className="text-grey-900 text-body-medium mt-2">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
