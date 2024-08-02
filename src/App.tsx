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

import { v4 as uuid } from "uuid";
import Select from "./ui/Select";
import { ProductNameTypes } from "./Types";
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const defaultProductObj = {
    title: "",
    description: "",
    image: "",
    price: "",
    category: "",
    colors: [],
  };

  // !     --------------- STATE ------------------------
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenConfirmedModal, setIsOpenConfirmedModal] = useState(false);

  const [products, setProducts] = useState<IProducts[]>(productList);

  const [product, setProduct] = useState<IProducts>(defaultProductObj);

  const [productToEdit, setProductToEdit] =
    useState<IProducts>(defaultProductObj);
  const [productToEditIndx, setProductToEditIndx] = useState<number>(0);

  const [tempColors, setTempColors] = useState<string[]>([]);

  const [selected, setSelected] = useState(Categories[0]);

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
  });

  // ! ---------------- HANDLER -------------------------

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeEditModal = () => {
    setIsOpenEditModal(false);
  };

  const openEditModal = () => {
    setIsOpenEditModal(true);
  };

  const closeConfirmedModal = () => {
    setIsOpenConfirmedModal(false);
  };

  const openConfirmedModal = () => {
    setIsOpenConfirmedModal(true);
  };

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

  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { title, description, image, price } = product;

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

    setProducts((prev) => [
      {
        ...product,
        id: uuid(),
        colors: tempColors,
        image: selected.imageUrl,
        category: selected.name,
      },
      ...prev,
    ]);
    setProduct(defaultProductObj);
    setTempColors([]);
    closeModal();
    toast.success('Product has been Added' ,{
      style:{
        backgroundColor:'black',
        color:'white'
      }
    })
  };

  const submitEditHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { title, description, image, price, category } = productToEdit;
    console.log(productToEdit);

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

    const updatedProducts = [...products];
    updatedProducts[productToEditIndx] = {
      ...productToEdit,
      colors: tempColors.concat(productToEdit.colors),
    };
  

    setProducts(updatedProducts);
    setProductToEdit(defaultProductObj);
    setTempColors([]);
    closeEditModal();
    toast.success('Product has been Edit' ,{
      style:{
        backgroundColor:'black',
        color:'white'
      }
    })
  };

  const cancelHandler = () => {
    setProduct(defaultProductObj);
    closeModal();
    closeEditModal();
    closeConfirmedModal()
  
  };


  const onRemoeHandler =()=> {

    const filtered = products.filter(product => product.id !== productToEdit.id )
    setProducts(filtered);
    closeConfirmedModal()
    toast.success('Product has been deleted' ,{
      style:{
        backgroundColor:'black',
        color:'white'
      }
    })
  }

  // ! ------------------- RENDER -----------------------------

  const renderProductList = products.map((product, indx) => (
    <ProductCard
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
      setProductToEditIndx={setProductToEditIndx}
      indx={indx}
      openConfirmedModal={openConfirmedModal}
    />
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

  const renderProductColors = Colors.map((color) => (
    <ProductColors
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item != color));
          return;
        }

        if (productToEdit.colors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item != color));
          return;
        }

        setTempColors((prev) => [...prev, color]);
      }}
    />
  ));

  const renderProductEditWithErrMsg = (
    id: string,
    label: string,
    name: ProductNameTypes
  ) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={id} className="mb-2 text-gray-700 text-sm font-medium">
          {label}
        </label>
        <Input
          type="text"
          id={id}
          name={name}
          value={productToEdit[name]}
          onChange={onChangeEditHandler}
        />
        <ErrorMassege msg={errors[name]} />
      </div>
    );
  };

  return (
    <main className="container ">
      <Button
        className="mt-32 p-2 rounded-md w-full bg-indigo-500 text-lg font-medium"
        onClick={openModal}
      >
        Add A New Product
      </Button>

      {/* Add New Product Modal */}

      <Modal isOpen={isOpen} closeModal={closeModal} title="Add A New Product">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormIputList}

          <Select selected={selected} setSelected={setSelected} />

          <div className="flex items-center space-x-1">
            {renderProductColors}
          </div>

          <div className="flex items-center space-x-1 flex-wrap ">
            {tempColors.map((color) => (
              <span
                key={color}
                className="rounded-md mb-2 mr-2"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
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

      {/* Edit Modal */}

      <Modal
        isOpen={isOpenEditModal}
        closeModal={closeEditModal}
        title="Edit Product"
      >
        <form className="space-y-3" onSubmit={submitEditHandler}>
          {renderProductEditWithErrMsg("title", "Product Title", "title")}
          {renderProductEditWithErrMsg(
            "description",
            "Product Description",
            "description"
          )}
          {renderProductEditWithErrMsg("image", "Product image URL", "image")}
          {renderProductEditWithErrMsg("price", "Product Price", "price")}

          <Select
            selected={{
              name: productToEdit.category,
              imageUrl: productToEdit.image,
            }}
            setSelected={(value) => {
              setProductToEdit({
                ...productToEdit,
                category: value.name,
                image: value.imageUrl,
              });
            }}
          />

          <div className="flex items-center space-x-1">
            {renderProductColors}
          </div>

          <div className="flex items-center space-x-1 flex-wrap ">
            {tempColors.concat(productToEdit.colors).map((color) => (
              <span
                key={color}
                className="rounded-md mb-2 mr-2"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
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

      {/*REMOVE PRODUCT Model */}

      <Modal
        isOpen={isOpenConfirmedModal}
        closeModal={closeConfirmedModal}
        title="Are You Sure To Remove This Product from store?"
        description="You are about to delete the selected product. This action cannot be undone. Please confirm your decision below.
           Click Remove to proceed with the deletion or Cancel to go back"
      >
        <div className="flex items-center space-x-3">
          <Button
            className="rounded-lg w-full bg-red-800 text-white p-2 "
            type="submit"
            onClick={onRemoeHandler}
          >
            Remove
          </Button>

          <Button
            className=" rounded-lg w-full bg-gray-300 hover:bg-gray-400 p-2"
            onClick={cancelHandler}
          >
            Cancel
          </Button>
        </div>
      </Modal>

      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-5">
        {renderProductList}
      </div>
      <Toaster />
    </main>
  );
};

export default App;
