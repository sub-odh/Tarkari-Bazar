import React from "react";
import Image from "next/image";
import { quoteIcon } from "@/assets/icons";
import { robertFoxImg, dianneImg, eleanorImg } from "@/assets/images";

const userTestimonials = [
  {
    id: 1,
    name: "Robert Fox",
    image: robertFoxImg,
    say: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cupiditate itaque aspernatur impedit sit, exercitationem explicabo corporis aperiam eveniet, rem necessitatibus molestias expedita voluptate voluptatum, consectetur dolores minima ullam doloribus.",
  },
  {
    id: 2,
    name: "Dianne Russell",
    image: dianneImg,
    say: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cupiditate itaque aspernatur impedit sit, exercitationem explicabo corporis aperiam eveniet, rem necessitatibus molestias expedita voluptate voluptatum, consectetur dolores minima ullam doloribus.",
  },
  {
    id: 3,
    name: "Eleanor Pena",
    image: eleanorImg,
    say: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cupiditate itaque aspernatur impedit sit, exercitationem explicabo corporis aperiam eveniet, rem necessitatibus molestias expedita voluptate voluptatum, consectetur dolores minima ullam doloribus.",
  },
];

export const testimonial = () => {
  return (
    <section className="bg-gray-50">
      <div className="pt-24 pb-9">
        <p className="text-center text-success text-body-small font-medium">
          Client Testiomial
        </p>
        <p className="text-center text-gray-900 text-h4 font-semibold">
          What our Client says?
        </p>
      </div>

      <div>
        <div className="grid grid-cols-3 gap-6 px-14 pb-14">
          {userTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 shadow-sm">
              <Image className="pb-4" src={quoteIcon} alt="quote" />
              <p className="text-gray-700 text-body-small font-normal">
                {testimonial.say}
              </p>
              <div className="flex mt-4 items-center">
                <Image className="mr-3" src={testimonial.image} alt="user" />
                <p className="text-gray-900 text-base font-medium">
                  {testimonial.name}
                  <p className="text-gray-400 text-body-small font-normal">
                    Customer
                  </p>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default testimonial;
