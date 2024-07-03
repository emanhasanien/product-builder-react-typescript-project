import Modal from "./ui/Modal"
import ProductCard from "./components/ProductCard"
import { formInputList, productList } from "./data"
import { useState } from "react"
import { Button } from "@headlessui/react"
import Input from "./ui/Input"


const App = () => {

  const renderProductList = productList.map(product =>  <ProductCard key={product.id}  product = {product} /> )
  const renderFormIputList = formInputList.map( input => <div className="flex flex-col">

   <label htmlFor={input.id} className="mb-2 text-gray-700 text-sm font-medium">{input.label}</label>
   <Input type="text" id={input.id} name={input.name}/>
  </div>)
 

  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <main className="container ">

<Button className="mt-32 p-2 rounded-md w-full bg-indigo-500 text-lg font-medium" onClick={ openModal}>Add A New Product</Button>
      
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add A New Product" >
        <form className="space-y-3" >

        {renderFormIputList}
        <div className="flex items-center space-x-3">
          <Button className="rounded-lg w-full bg-indigo-500 p-2 ">Submit</Button>
          <Button className=" rounded-lg w-full bg-gray-300 hover:bg-gray-400 p-2">Cancel</Button>
        </div>

        </form>
       
      </Modal>
    <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-5">
     {renderProductList}
    </div>
    

    </main>
  )
}

export default App