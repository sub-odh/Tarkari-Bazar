import Banner from "./_components/banner";
import Category from "./[category]/page";
import Deals from "./_components/deals";
import Products from "./[category]/products";

export default function Home() {
  return (
    <main className="">
      <Banner />

      <div className="col-span-full">
        <Deals />
      </div>

      <Category />
      
      <Products />
    </main>
  );
}
