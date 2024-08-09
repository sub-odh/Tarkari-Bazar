import {
  freeShippingIcon,
  moneybackIcon,
  paymentIcon,
  supportIcon,
} from "@/assets/icons";
import Image from "next/image";
import React from "react";

const serviceItems = [
  {
    icon: freeShippingIcon,
    title: "Free Shipping",
    description: "Free shipping with discount",
  },
  {
    icon: supportIcon,
    title: "Great Support 24/7",
    description: "Instant access to Contact",
  },
  {
    icon: paymentIcon,
    title: "100% Secure Payment",
    description: "We ensure your money is safe",
  },
  {
    icon: moneybackIcon,
    title: "Money-Back Guarantee",
    description: "30 days money-back policy",
  },
];

const services = () => {
  return (
    <section className={`border-b-2 mb-4`}>
      <div className="flex justify-between items-center">
        {serviceItems.map((services, index) => (
          <div
            key={index}
            className={`flex flex-row items-center py-3 ${
              index === serviceItems.length - 2
                ? "border-b-2 border-success"
                : ""
            }`}
          >
            <Image
              src={services.icon}
              alt="service-icon"
              width={"w-4.5"}
              height={"w-4.5"}
            />
            <span className="ml-4">
              <h2 className="text-body-medium text-grey-900 font-semi-bold">
                {services.title}
              </h2>
              <p className="text-body-small text-grey-400 font-regular">
                {services.description}
              </p>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default services;
