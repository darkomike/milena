import IconCard from "./IconCard";

export default function AboutServiceCard ({icon,title,subtitle}) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
        <IconCard icon={icon}/>
        <p className="font-bold">{title}</p>
        <p className="text-sm">{subtitle}</p>
    </div>
  )
}

