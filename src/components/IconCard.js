import Image from "next/image";

export default function IconCard({icon})  {
  return (
    <div className="p-2 bg-[#7D8184] rounded-full">
        <div className="p-2 bg-black rounded-full">
        <Image
        className="h-[25px] w-[25px]"
        src={icon}
        height={100}
        width={100}
        alt="Icon"
      />
    </div>
    </div>
  )
}

