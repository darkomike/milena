import CaroselCard from "@/components/CaroselCard";
import CountdownTimer from "@/components/CountDownTimer";
import SectionTag from "@/components/SectionTag";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export const metadata = {
  title: "MiLena Black",
  description: "A place to get all your items",
};

export default function Home() {
  // Set the target date (e.g., 30 day from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);
  return (
    <main className="flex flex-col justify-between gap-4">
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
        <CaroselCard src={"/iphone.png"} />
      </div>

      {/* Second Side */}
      <div className="home-second-container">
        <SectionTag tag_name={"Today's"} />
        <div className="flex flex-row  items-center w-full">
          <h1 className="font-bold text-2xl mr-28">Flash Sales</h1>
          <div className="flex flex-row items-center justify-between">
            <CountdownTimer targetDate={targetDate} />
            
            <div>
            {/* TODO: */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
