"use client";
import { codyImg, janeImg, jennyImg, robertImg } from "@/assets/images";
import Image from "next/image";
import FacebookButton from "./facebookButton";
import TwitterButton from "./twitterButton";
import PinterestButton from "./pinterestButton";
import InstagramButton from "./instagramButton";
const teamMembers = [
  {
    id: 1,
    image: jennyImg,
    name: "Jenny Wilson",
    title: "CEO & Founder",
  },
  {
    id: 2,
    image: janeImg,
    name: "Jane Cooper",
    title: "Worker",
  },
  {
    id: 3,
    image: codyImg,
    name: "Cody Fisher",
    title: "Security Guard",
  },
  {
    id: 4,
    image: robertImg,
    name: "Robert Fox",
    title: "Senior Farmer Manager",
  },
];
const team = () => {
  return (
    <section className="grid grid-cols-4 mx-10 justify-items-center">
      {teamMembers.map((item) => (
        <div key={item.id} className="flex group relative flex-col ">
          <Image
            src={item.image}
            alt={item.name}
            className="w-[19.5rem] h-[17.5rem] brightness-100 group-hover:brightness-50"
          />
          <div className="opacity-0 absolute group-hover:opacity-100 top-1/3 right-1/4">
            <FacebookButton />
            <TwitterButton />
            <PinterestButton />
            <InstagramButton />
          </div>
          <span className="flex flex-col my-2">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.title}</p>
          </span>
        </div>
      ))}
    </section>
  );
};

export default team;
