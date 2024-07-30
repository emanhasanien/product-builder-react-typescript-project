import { ReactNode } from "react"

interface IProps  extends React.DOMAttributes<HTMLButtonElement>{
    children:ReactNode,
    className:string,
    width?:"w-full" | "w-fit"
    type?: string
}
const Button = ( {children, className,width="w-full", ... rest}:IProps) => {

  return (
   <button className={`${className} ${width} p-2 rounded-md`} {... rest} type="submit">{children}</button>
  )
}

export default Button