import {
  cartIcon,
  dropdownIcon,
  menuIcon,
  favIcon,
  mapPin,
  phoneIcon,
  searchIcon,
  userIcon,
} from "@/assets/icons";
import { logo } from "@/assets/images";
import Image from "next/image";
import NavLink from "./navLink";

export default function Header() {
  return (
    <header className="mx-10">
      <div className="flex items-center justify-between my-4">
        <div className="flex">
          <Image src={mapPin} alt="location" />
          <p className="ml-2 text-grey-500">
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </p>
        </div>
        <div className="flex items-center">
          <span className="flex">
            <span className="mr-2 text-grey-500">Eng</span>
            <Image src={dropdownIcon} alt="location" />
          </span>
          <span className="flex ml-5">
            <span className="mr-2 text-grey-500">USD</span>
            <Image src={dropdownIcon} alt="location" />
          </span>
        </div>
      </div>

      {/* borer */}
      <div className="border border-grey-400"></div>

      {/* Brand logos */}
      <div className="grid grid-cols-12 mx-10 py-6">
        <div className=" w-full b-200 col-span-12 lg:col-span-2 flex items-center">
          <div>
            <Image src={logo} alt="logo" width={"w-36"} height={"h-9"} />
          </div>
        </div>
        <div className=" w-full col-span-12 lg:col-span-8 flex items-center justify-center my-10 lg:my-0">
          <div className="flex">
            <div className="flex items-center border border-grey-100 rounded-r-none border-r-0 rounded overflow-hidden">
              <div className="flex items-center py-3 pl-4">
                <label htmlFor="searchInput">
                  <Image src={searchIcon} alt="Search" />
                </label>
                <input
                  type="text"
                  id="searchInput"
                  placeholder="Search"
                  className="outline-none ml-4 w-64"
                />
              </div>
            </div>
            <button className="bg-success text-white text-body-small py-3 px-6 rounded-r">
              Search
            </button>
          </div>
        </div>
        <div className=" w-full col-span-12 lg:col-span-2 flex items-center justify-end ">
          <div className="flex items-center">
            <Image src={phoneIcon} alt="phone" width={"w-10"} height={"h-10"} />
            <div className="ml-3">
              <p className="text-body-small text-grey-400">Customer Services</p>
              <p className="text-body-xl font-medium text-grey-900">
                (219) 555-0114
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* menu icons */}
      <div className="flex items-center justify-between bg-grey-900 pr-6">
        <div className="flex items-center">
          <div className="p-4 bg-success">
            <Image src={menuIcon} alt="Menu icon" className="h-8 w-8" />
          </div>

          <div className="flex items-center justify-between bg-grey-800 py-5 pl-4 pr-6 w-[25.5rem]">
            <span className="text-white">All Categories</span>
            <Image src={dropdownIcon} alt="down-icon" className="w-5 h-5" />
          </div>

          <NavLink title="Home" href="#" />
          <NavLink title="Shop" href="shop" />
          <NavLink title="Pages" href="pages" />
          <NavLink title="Blogs" href="blogs" />
          <NavLink title="About Us" hideIcon href="about-us" />
          <NavLink title="Contact Us" hideIcon href="contact" />
        </div>
        <div className="flex">
          <div className="py-4">
            <Image src={favIcon} alt="heart" className="w-8 h-8" />
          </div>
          <div className="py-4 relative">
            <Image src={cartIcon} alt="heart" className="w-8 h-8 mx-6" />
            <span className="text-white absolute top-3 right-5 text-[10px] w-5 h-5 bg-success-dark flex items-center justify-center rounded-full border border-grey-800 ">
              2
            </span>
          </div>
          <div className="py-4">
            <Image src={userIcon} alt="heart" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </header>
  );
}
