import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<any> {
  title: string;
  background?: boolean;
}

export function Button({ title, background = false, ...rest }: ButtonProps) {

  if (!background) {
    return (
      <button className="text-greyCustom-400 bg-white text-base font-bold py-3 rounded-lg w-[120px] text-center border-2 hover:border-black transition-colors"
        {...rest}
      >
        {title}
      </button>
    )
  }

  return (
    <button className="text-white bg-greyCustom-900 text-base font-bold py-3 rounded-lg w-[120px] text-center hover:bg-white hover:text-greyCustom-400 transition-colors"
      {...rest}
    >
      {title}
    </button>
  )
}