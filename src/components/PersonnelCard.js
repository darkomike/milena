import Image from "next/image";
import { GrFacebookOption } from "react-icons/gr";
import { LuTwitter } from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";
import { RxInstagramLogo } from "react-icons/rx";

export default function PersonnelCard({
  src,
  name,
  instagram,
  linkedIn,
  twitter,
  position,
}) {
  return (
    <div className="flex flex-col justify-start h-min w-[270px] mx-auto rounded-[5px] overflow-hidden">
      <Image
        className="personal-image mb-4"
        src={src}
        height={100}
        width={100}
        alt="Image"
      />
      <p className=" mt-4 font-medium text-xl">{name}</p>
      <p className="mt-4 text-sm font-medium">{position}</p>
      <div className="mt-4 flex flex-row items-center space-x-4">
        <LuTwitter className="text-black" />
        <RxInstagramLogo className="text-black" />
        <RiLinkedinLine className="text-black" />
      </div>
    </div>
  );
}
