import CaroselCard from "@/components/CaroselCard";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export const metadata = {
  title: "MiLena Black",
  description: "A place to get all your items",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      {/* First Side  */}
      <div className="home-first-container">
        {/* Left Side */}
        <div className="home-tab-container">
          <ul className="w-max flex flex-col space-y-2">
            <li className="home-tab">
              <p>{`Women's Fashion`}</p>
              <IoIosArrowForward />
            </li>
            <li className="home-tab">
              <p>{`Men's Fashion`}</p>
              <IoIosArrowForward />
            </li>

            <li className="home-tab">
              <p>{`Electronics`}</p>
            </li>
            <li className="home-tab">
              <p>{`Home & Lifestyle`}</p>
            </li>

            <li className="home-tab">
              <p>{`Sports & Outdoor`}</p>
            </li>

            <li className="home-tab">
              <p>{`Baby's & Toys`}</p>
            </li>

            <li className="home-tab">
              <p>{`Groceries's & Pets`}</p>
            </li>
            <li className="home-tab">
              <p>{`Health & Beauty`}</p>
            </li>
          </ul>
        </div>
        {/* Right Side  */}
        <CaroselCard src={'/iphone.png'}/>
      </div>
    </main>
  );
}
