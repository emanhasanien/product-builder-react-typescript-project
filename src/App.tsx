import Modal from "./ui/Modal"
import ProductCard from "./components/ProductCard"
import { productList } from "./data"
import { useState } from "react"
import { Button } from "@headlessui/react"


const App = () => {

  const renderProductList = productList.map(product =>  <ProductCard key={product.id}  product = {product} /> )

 

  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <main className="container ">

<Button className="mt-32 p-2 rounded-md w-full bg-indigo-500" onClick={ openModal}>Open Modal</Button>
      
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add A New Product" >
        <div className="flex items-center space-x-3">
          <Button className="rounded-md w-full bg-indigo-500 p-2">Submit</Button>
          <Button className=" rounded-md w-full bg-gray-300 hover:bg-gray-400 p-2">Cancel</Button>
        </div>
      </Modal>
    <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-5">
     {renderProductList}
    </div>
    

    </main>
  )
}

export default App