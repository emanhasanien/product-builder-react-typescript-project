import Image from "./Image"
import Button from "../ui/Button"
import { IProducts } from "../interfaces"
import { textSlicer } from "../Utils/functions"

interface IProps {
product:IProducts
}
const ProductCard = ( {product}:IProps) => {
  const {title , description , image,price} =product
  return (
    <div className="border p-2  m-5 mx-w-sm md:max-w-lg mx-auto md:mx-0 flex flex-col rounded-md card">
      
  
      <Image imageUrl={image} alt="product name" className=" rounded-md w-full h-52 "/>
      <h3>{title}</h3>

      <p>{textSlicer(description)}</p>

      <div className="flex my-4 space-x-2">
        <span className="block w-5 h-5 bg-indigo-600 rounded-full cursor-pointer"/>
        <span className="block w-5 h-5 bg-yellow-500 rounded-full cursor-pointer"/>
        <span className="block w-5 h-5 bg-red-700 rounded-full cursor-pointer"/>
     
      </div>

      <div className="flex items-center justify-between">
        <span>{price}</span>
        <Image imageUrl={image} alt="product name" className="w-10 h-10 rounded-full object-bottom"/>
      </div>

      <div className="flex items-center mt-5 space-x-2 text-white">
        <Button className="bg-indigo-700 " width="w-full" onClick={()=> console.log('clicked')} > EDIT</Button>

        <Button className="bg-red-800 ">DELETE</Button>
      </div>
      
       </div>
  )
}

export default ProductCard