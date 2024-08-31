"use client";
import React from "react";
import Image from "next/image";
import {
  applePay,
  appleStore,
  discover,
  googlePlay,
  mail,
  mastercard,
  securePay,
  visa,
} from "@/assets/icons";
import FacebookButton from "./facebookButton";
import TwitterButton from "./twitterButton";
import PinterestButton from "./pinterestButton";
import InstagramButton from "./instagramButton";
import { logo } from "@/assets/images";
import Link from "next/link";

const footer = () => (
  <section className="mt-14 mx-10">
    <section>
      <div className="bg-black flex px-16 py-20 items-center justify-between">
        <div className="flex items-center">
          <Image src={mail} alt="mail" />
          <p className="text-white ml-2 mr-20 text-body-xxl font-medium">
            Subcribe to our Newsletter!
          </p>
        </div>

        <div className="flex relative mr-6">
          <input
            type="email"
            placeholder="Your email address"
            className=" rounded-3xl bg-grey-800 text-grey-400 h-[3.25rem] w-[28.75rem] px-6 "
          />
          <button className="bg-success text-white text-body-medium font-semibold py-3 px-6 rounded-3xl h-[3.25rem] absolute right-0">
            Subscribe
          </button>
        </div>
        <div>
          <FacebookButton />
          <TwitterButton />
          <PinterestButton />
          <InstagramButton />
        </div>
      </div>
    </section>
    <section className=" p-[3.75rem] grid grid-cols-3 bg-grey-50">
      <div className="mr-14">
        <Image src={logo} alt="Logo" />
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero
          maxime ut, similique tempore sunt, dolorum fugit recusandae optio
          nihil sit ipsa distinctio voluptate, minus nobis earum nesciunt
          voluptates!
        </p>

        <div className="flex items-center">
          <p className="hover:border-b-2 border-success text-body-small">
            <a href="tel: +9779844223366">+977-9844223366</a>
          </p>
          <span className="mx-4">or</span>
          <p className="hover:border-b-2 border-success text-body-small">
            <a href="mailto:tarkarbazar@gmail.com">tarkarbazar@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <p className="text-grey-900 text-body-medium font-medium">
            My Account
          </p>
          <ul className="text-grey-600">
            <li className="text-body-small font-medium mt-4">
              <Link href="/">My Account</Link>
            </li>
            <li className="text-body-small font-medium mt-4">
              <Link href="/about">Order History</Link>
            </li>
            <li className="text-body-small font-medium mt-4">
              <Link href="/">Shopping Cart</Link>
            </li>
            <li className="text-body-small font-medium mt-4">
              <Link href="/">Wishlist</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-grey-900 text-body-medium font-medium">Helps</p>
          <ul className="text-grey-600">
            <li className="text-body-small font-medium mt-4">
              <Link href="/">Contact</Link>
            </li>
            <li className="text-body-small font-medium mt-4">
              <Link href="/about">FAQs</Link>
            </li>
            <li className="text-body-small font-medium mt-4">
              <Link href="/">Terms & Condition</Link>
            </li>
            <li className="text-body-small font-medium mt-4">
              <Link href="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-grey-900 text-body-medium font-medium">Proxy</p>
          <ul className="text-grey-600">
            <li className="text-body-small font-medium mt-4">
              <Link href="/">About</Link>
            </li>
            <li className="text-body-small font-medium mt-4">
              <Link href="/about">Shop</Link>
            </li>
            <li className="text-body-small font-medium mt-4">
              <Link href="/">Product</Link>
            </li>
            <li className="text-body-small font-medium mt-4">
              <Link href="/">Track Order</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="ml-14 ">
        <h3>Download Mobile App</h3>
        <div className="flex">
          <div className="flex bg-white mr-2 items-center p-2">
            <Image src={appleStore} alt="App Store" className=" h-7 w-7" />
            <p className="text-body-tiny font-normal text-grey-700">
              Download on the <br />
              <span className="text-body-medium text-grey-900 font-medium">
                App Store
              </span>
            </p>
          </div>
          <div className="flex bg-white mr-2 items-center p-2">
            <Image src={googlePlay} alt="Google Play" />
            <p className="text-body-tiny font-normal text-grey-700">
              Download on the <br />
              <span className="text-body-medium text-grey-900 font-medium">
                Google Play
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-8 flex justify-between items-center">
      <div>
        <p className="text-grey-500 text-body-small font-normal">{`Tarkari Bazar eCommerce © ${new Date().getFullYear()}. All Rights Reserved.`}</p>
      </div>
      <div className="flex">
        <Image src={applePay} alt="Apple Pay" className="mr-1" />
        <Image src={visa} alt="Visa" className="mr-1" />
        <Image src={discover} alt="Discover" className="mr-1" />
        <Image src={securePay} alt="Secure Pay" className="mr-1" />
        <Image src={mastercard} alt="Master Card" />
      </div>
    </section>
  </section>
);

export default footer;
