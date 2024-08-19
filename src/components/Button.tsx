import { FC } from "react"

interface Props{
  value: string;
  handleClick: () => void;
}

export const Button:FC<Props> = ({value, handleClick}) => {
  return (
    <button onClick={handleClick} className="w-48 max-w-full border-black border-2 py-3"><p className="font-bold text-xl">{value}</p></button>
  )
}
