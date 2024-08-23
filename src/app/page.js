import Image from "next/image";
import Banner from "./_components/banner";
import Category from "./[category]/page";
import Deals from "./_components/deals";
import Team from "./_components/team";
import Products from "./[category]/products";
import Testimonial from "./_components/testimonial";
import { videoImg } from "@/assets/images";

export default function Home() {
  return (
    <main className="">
      <Banner />

      <div className="col-span-full">
        <Deals />
      </div>

      <Category />

      <Products />

      <section className=" grid justify-items-center my-10 w-auto">
        <Image src={videoImg} alt="video" />
      </section>

      <Team />

      <Testimonial />
      
    </main>
  );
}
