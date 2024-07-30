import Modal from "./ui/Modal";
import ProductCard from "./components/ProductCard";
import { Categories, Colors, formInputList, productList } from "./data";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "@headlessui/react";
import Input from "./ui/Input";
import { IProducts } from "./interfaces";
import { productValidation } from "./Validation";
import ErrorMassege from "./components/ErrorMassege";
import ProductColors from "./components/ProductColors";

import { v4 as uuid} from 'uuid'
import Select from "./ui/Select";

const App = () => {
  const defaultProductObj = {
    title: "",
    description: "",
    image: "",
    price: "",
    category: "",
    colors:[]
  };

  // !     --------------- STATE ------------------------
  const [isOpen, setIsOpen] = useState(false);

  const [products, setProducts] = useState<IProducts[]>(productList);

  const [product, setProduct] = useState<IProducts>(defaultProductObj);

  const [tempColors , setTempColors] = useState<string[]>([])

  const [selected, setSelected] = useState(Categories[0])
  

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
  });

  const { title, description, image, price } = product;

  // ! ---------------- HANDLER -------------------------

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const errors = productValidation({
      title,
      description,
      image,
      price,
    });

    const hasError =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasError) {
      setErrors(errors);
      return;
    }
    
    setProducts( prev => [ {...product ,id : uuid() ,colors:tempColors ,image:selected.imageUrl ,category:selected.name} , ...prev])
    setProduct(defaultProductObj)
    setTempColors([])
    closeModal()
    console.log("Send Data To Backend Server");
  };

  const cancelHandler = () => {
    setProduct(defaultProductObj);
    closeModal();
  };

  // ! ------------------- RENDER -----------------------------

  const renderProductList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFormIputList = formInputList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-2 text-gray-700 text-sm font-medium"
      >
        {input.label}
      </label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMassege msg={errors[input.name]} />
    </div>
  ));

  const renderProductColors = Colors.map( color => 
  <ProductColors key={color} color={color} onClick={() => {
    if( tempColors.includes(color)){
     
      setTempColors( (prev) => prev.filter( (item)=> item != color ))
      return ;
    }

    setTempColors((prev) => [...prev , color])
  }}/>)

  return (
    <main className="container ">
      <Button
        className="mt-32 p-2 rounded-md w-full bg-indigo-500 text-lg font-medium"
        onClick={openModal}
      >
        Add A New Product
      </Button>

      <Modal isOpen={isOpen} closeModal={closeModal} title="Add A New Product">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormIputList}

          <Select selected={selected} setSelected={setSelected} />
            
          <div className="flex items-center space-x-1">
          { renderProductColors}  
          </div>

          <div className="flex items-center space-x-1 flex-wrap ">
          { tempColors.map( color => <span key={color} className="rounded-md mb-2 mr-2" style={{backgroundColor:color}}>{color}</span>)}  
          </div>  

          

          <div className="flex items-center space-x-3">
            <Button
              className="rounded-lg w-full bg-indigo-500 p-2 "
              type="submit"
            >
              Submit
            </Button>

            <Button
              className=" rounded-lg w-full bg-gray-300 hover:bg-gray-400 p-2"
              onClick={cancelHandler}
            >
              Cancel
            </Button>
          </div>

        </form>
      </Modal>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-5">
        {renderProductList}
      </div>
    </main>
  );
};

export default App;
