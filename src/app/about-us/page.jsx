import React from "react";
import Nav from "../_components/nav";
import Brands from "../_components/brands";
import Team from "../_components/team";
import Testimonial from "../_components/testimonial";
import Image from "next/image";
import { aboutImage1, aboutImage2, aboutImage3 } from "@/assets/images";
import {
  check,
  feedbackIcon,
  moneyback,
  organicIcon,
  securePayment,
  shippingIcon,
  support,
  arrowIcon,
} from "@/assets/icons";

const AboutUs = () => {
  return (
    <>
      <Nav />
      <section className="mx-10 my-2">
        <div className="grid grid-cols-2 ml-56 my-20 mr-52">
          <div>
            <h1 className=" text-grey-900 text-h1 font-semibold w-[550px]">
              100% Trusted <br /> Organic Food Store
            </h1>
            <p className="text-grey-600 text-body-large font-normal mt-8">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </p>
          </div>
          <Image
            src={aboutImage1}
            alt="Farmers"
            className="ml-14
          "
          />
        </div>

        <div className="grid grid-cols-2">
          <Image
            src={aboutImage2}
            alt="Farmers"
            className="h-[40rem] object-cover"
          />

          <div className=" mt-20">
            <h1 className=" text-grey-900 text-h1 font-semibold">
              100% Trusted <br /> Organic Food Store
            </h1>
            <p className="text-grey-600 text-body-large font-normal mt-8">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a
              a mi. Nulla eu eros consequat tortor tincidunt feugiat.
            </p>

            <div className="grid grid-cols-2 my-6  justify-items-start">
              <div className="grid gap-y-4">
                <div className="flex items-center">
                  <Image src={organicIcon} alt="Organic" />
                  <div className="ml-4">
                    <h1 className="text-grey-900 text-body-large font-medium ">
                      100% Organic Food
                    </h1>
                    <p className="text-grey-500 text-body-small font-normal ">
                      100% healthy & fresh food.
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Image src={feedbackIcon} alt="Feedback" />
                  <div className="ml-4">
                    <h1 className="text-grey-900 text-body-large font-medium ">
                      Customer Feedback
                    </h1>
                    <p className="text-grey-500 text-body-small font-normal ">
                      Our happy customer.
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Image src={shippingIcon} alt="Shipping" />
                  <div className="ml-4">
                    <h1 className="text-grey-900 text-body-large font-medium ">
                      Free Shipping
                    </h1>
                    <p className="text-grey-500 text-body-small font-normal ">
                      Free Shipping with discount.
                    </p>
                  </div>
                </div>
              </div>

              <div className=" grid gap-y-4">
                <div className="flex items-center">
                  <Image src={support} alt="Support" />
                  <div className="ml-4">
                    <h1 className="text-grey-900 text-body-large font-medium ">
                      Great Support 24/7
                    </h1>
                    <p className="text-grey-500 text-body-small font-normal ">
                      Instant access to contact.
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Image src={securePayment} alt="Secure Payment" />
                  <div className="ml-4">
                    <h1 className="text-grey-900 text-body-large font-medium ">
                      100% Secure payment
                    </h1>
                    <p className="text-grey-500 text-body-small font-normal ">
                      We ensure your money is safe.
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Image src={moneyback} alt="Moneyback" />
                  <div className="ml-4">
                    <h1 className="text-grey-900 text-body-large font-medium ">
                      Money Back Guarantee
                    </h1>
                    <p className="text-grey-500 text-body-small font-normal ">
                      30 days money-back policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 py-14">
          <div className="ml-32 my-14 mr-7">
            <h1 className="text-grey-900 text-h1 font-semibold mb-4">
              We deliver,
              <br />
              You enjoy your order.
            </h1>
            <p className="mb-4">
              Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
              ultrices consectetur velit dapibus eu. Mauris sollicitudin
              dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor
              bibendum nunc eget elementum.
            </p>
            <ul className="mb-4">
              <li className="flex gap-4">
                <Image src={check} alt="" />
                Sed in metus pellentesque.
              </li>
              <li className="flex gap-4">
                <Image src={check} alt="" />
                Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
              </li>
              <li className="flex gap-4">
                <Image src={check} alt="" />
                Maecenas ut nunc fringilla erat varius.
              </li>
            </ul>
            <button className="bg-success flex items-center text-white px-4 py-2 rounded-full">
              Shop Now
              <Image className="ml-2" src={arrowIcon} />
            </button>
          </div>
          <Image src={aboutImage3} alt="Delivery" />
        </div>
      </section>
      <Team />
      <Testimonial />
      <Brands />
    </>
  );
};

export default AboutUs;
