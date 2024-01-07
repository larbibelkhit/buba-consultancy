import Image from "next/image"

type ButtonProps = {
    type: "button" | "submit";
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
}

const Button = ({type, title, icon, variant, full}: ButtonProps) => {
  return (
    <button type={type} className={`flexCenter gap-3 rounded-md border ${variant} ${full && 'w-full'}`}>
        {icon && <Image src={icon} alt="icon" width={32} height={32} className="text-white"/>}
        <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button