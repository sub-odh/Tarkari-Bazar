import React from "react";
import CategoryItem from "./categoryItem";
import {
  appleIcon,
  coffeeIcon,
  cupCakeIcon,
  fishIcon,
  foodIcon,
  iceCreamIcon,
  meatIcon,
  pieIcon,
  plusIcon,
  saladActiveIcon,
} from "@/assets/icons";
import Slider from "./slider";
import Services from "./services";

const categoryItems = [
  {
    id: 1,
    icon: appleIcon,
    activeIcon: saladActiveIcon,
    title: "Fruit Items",
  },
  {
    id: 2,
    icon: saladActiveIcon,
    activeIcon: saladActiveIcon,
    title: "Vegetables",
  },
  {
    id: 3,
    icon: fishIcon,
    activeIcon: saladActiveIcon,
    title: "River Fish",
  },
  {
    id: 4,
    icon: meatIcon,
    activeIcon: saladActiveIcon,
    title: "Chicken & Meat",
  },
  {
    id: 5,
    icon: coffeeIcon,
    activeIcon: saladActiveIcon,
    title: "Drink & Water",
  },
  {
    id: 6,
    icon: iceCreamIcon,
    activeIcon: saladActiveIcon,
    title: "Yogurt & Ice Cream",
  },
  {
    id: 7,
    icon: cupCakeIcon,
    activeIcon: saladActiveIcon,
    title: "Cake & Bread",
  },
  {
    id: 8,
    icon: pieIcon,
    activeIcon: saladActiveIcon,
    title: "Butter & Cream",
  },
  {
    id: 9,
    icon: foodIcon,
    activeIcon: saladActiveIcon,
    title: "Cooking",
  },
  {
    id: 10,
    icon: plusIcon,
    activeIcon: saladActiveIcon,
    title: "View all Category",
  },
];

const Banner = () => {
  return (
    <section className="grid grid-cols-12 mt-6 gap-6">
      <div className="col-span-3 border border-grey-400">
        {categoryItems.map((category, index) => (
          <CategoryItem
            title={category.title}
            key={category.id}
            icon={category.icon}
            active={category.id === 2}
            activeIcon={category.activeIcon}
            showBorder={categoryItems.length - 1 === index}
          />
        ))}
      </div>
      <div className="col-span-9">
        <Slider />
      </div>
      <div className="col-span-full">
        <Services />
      </div>
    </section>
  );
};

export default Banner;
