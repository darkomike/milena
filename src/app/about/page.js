import AboutServiceCard from "@/components/AboutServiceCard";
import AchievementCard from "@/components/AchievementCard";
import PersonnelCard from "@/components/PersonnelCard";
import Image from "next/image";

export const metadata = {
  title: "MiLena Black | About Us",
  description: "A place to get all your items.",
};

export default function About() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      {/* First Part */}
      <div className="flex flex-row items-center justify-between">
        {/* Left Side  */}
        <div className="w-[40%] pl-24 pr-10 h-[50%] space-y-4">
          <h1 className="font-bold text-3xl mb-3">Our Story</h1>
          <p>
            {`Launced in 2015, Exclusive is South Asia's premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region. `}
          </p>
          <p>
            {`Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.`}
          </p>
        </div>
        {/* Right Side  */}
        <div className="">
          <Image
            src={"/about.png"}
            height={100}
            width={100}
            layout="responsive" // Set layout to responsive
            alt="About Image"
          />
        </div>
      </div>
      {/* Second Part */}
      <div className="flex flex-row items-center justify-between my-8 mx-24 space-x-3">
        <AchievementCard
          numbers={10.5}
          label={"Sellers active at our site"}
          icon={"/shop.svg"}
        />
        <AchievementCard
          numbers={33}
          label={"Monthly Product Sale"}
          icon={"/sale.svg"}
        />
        <AchievementCard
          numbers={45.5}
          label={"Customer active in our site"}
          icon={"/shopping bag.svg"}
        />
        <AchievementCard
          numbers={25}
          label={"Anual gross sale in our site"}
          icon={"/moneybag.svg"}
        />
      </div>
      {/* Third Part */}
      <div className="flex flex-row space-x-16 mb-8  justify-between">
        {personnels.map((item, index) => (
          <PersonnelCard
            key={index}
            instagram={item.instagram}
            linkedIn={item.linkedIn}
            name={item.name}
            position={item.position}
            src={item.src}
            twitter={item.twitter}
          />
        ))}
      </div>
      {/* Fourth Part  */}

      <div className="flex flex-row items-center justify-evenly my-10 space-x-12">
        <AboutServiceCard
          icon={"/delivery.svg"}
          title={"FREE AND FAST DELIVERY"}
          subtitle={"Free delivery for all orders over $140"}
        />
        <AboutServiceCard
          icon={"/customer service.svg"}
          title={"24/7 CUSTOMER SERVICE"}
          subtitle={"Friendly 24/7 customer support"}
        />
        <AboutServiceCard
          icon={"/secure.svg"}
          title={"MONEY BACK GUARANTEE"}
          subtitle={"We reurn money within 30 days"}
        />
      </div>
    </main>
  );
}

let personnels = [
  {
    name: "Tom Cruise",
    position: "Founder & Chairman",
    instagram: "",
    linkedIn: "",
    twitter: "",
    src: "/tom.png",
  },
  {
    name: "Emma Watson",
    position: "Managing Director",
    instagram: "",
    linkedIn: "",
    twitter: "",
    src: "/emma.png",
  },
  {
    name: "Will Smith",
    position: "Product Designer",
    instagram: "",
    linkedIn: "",
    twitter: "",
    src: "/will.png",
  },
];
