import { FEATURES } from "@/constants";
import Image from "next/image";

const Features = () => {
  return (
    <section className="max-container padding-container flex-col flexCenter overflow-hidden py-24">
        <div className="z-20 flex w-full flex-col text-center">
            <h2 className="bold-32">Our Team Delivers</h2>
            <ul className="my-10 grid md:grid-cols-2 md:grid-rows-2 gap-12">
                {FEATURES.map((feature) => (
                    <FeatureItem title={feature.title} icon={feature.icon} key={feature.title}/>
                ))}
            </ul>
        </div>
    </section>
  )
}

type FeatureItemProps = {
    title:string;
    icon: string;
}

const FeatureItem = ({title, icon}:FeatureItemProps) => {
    return (
        <li className="flex w-full flex-1 items-start rounded-md gap-5 shadow-md hover:shadow-lg transition-all py-5 px-3 ">
            <Image src={icon} alt="icon" width={48} height={48} />
            <label className="regular-16 md:regular-18">{title}</label>
        </li>
    )
}

export default Features