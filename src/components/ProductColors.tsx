import { HTMLAttributes } from "react"

interface Iprops extends HTMLAttributes<HTMLSpanElement>{
 color:string
}

const ProductColors = ({color , ...rest}:Iprops) => {
  return (
    <span className="block w-5 h-5 rounded-full cursor-pointer" style={{backgroundColor:color}} {...rest}/>
  )
}

export default ProductColors