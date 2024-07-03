import { InputHTMLAttributes } from "react"

interface IProps extends InputHTMLAttributes<HTMLInputElement> {

}
const Input = ( {...rest}:IProps) => {
  return (
    <input className="border-[1px] border-gray-300 rounded-lg 
      focus:outline-none focus:outline-indigo-300 
      focus:ring-1 focus:ring-indigo-300 shadow-lg p-3 text-md " {...rest}/>
  )
}

export default Input