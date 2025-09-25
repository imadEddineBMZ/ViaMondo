import Image from "next/image"

export type buttonProps = {
    type: "button" | "submit";
    icon?: string;
    text: string;
    variant: "btn_dark_green"
}

const Button = ({ type, icon, text, variant }: buttonProps) => {
  return (
    <button type={type} className={`flexCenter gap-2 rounded-full ${variant}`}>
     
      {icon && <Image src={icon} alt="icon" width={20} height={20} />}
      <label>{text}</label>

    </button>
  )
}

export default Button