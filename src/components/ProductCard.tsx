import Image from "./Image";
import Button from "../ui/Button";
import { IProducts } from "../interfaces";
import { textSlicer } from "../Utils/functions";
import ProductColors from "./ProductColors";


interface IProps {
  product: IProducts;
  setProductToEdit: (product :IProducts) => void,
  openEditModal: ()=> void,
  setProductToEditIndx: (value:number) => void, 
  indx: number,
  openConfirmedModal: ()=> void
}

const ProductCard = ({ product, setProductToEdit , openEditModal, setProductToEditIndx , indx ,openConfirmedModal}: IProps) => {
  const { title, description, image, price, colors, category } = product;

  const renderProductColors = colors.map((color) => ( <ProductColors key={color} color={color} />
  ));

  // ! ----------------- HANDLER ----------------------

  const EditHandler = () => {
    setProductToEdit(product);
    setProductToEditIndx(indx)
    openEditModal()
  
  }

  const onRemove = ()=> {
    openConfirmedModal()
    setProductToEdit(product)
  }


  
  return (
    <div className="border p-2  m-5 mx-w-sm md:max-w-lg mx-auto md:mx-0 flex flex-col rounded-md card">
      <Image
        imageUrl={image}
        alt="product name"
        className=" rounded-md w-full h-52 "
      />
      <h3>{title}</h3>

      <p>{textSlicer(description)}</p>

      <div className="flex items-center space-x-1">{renderProductColors}</div>

      <div className="flex items-center justify-between">
        <span> ${price}</span>
       <div className=" flex items-center space-x-1 text-gray-400">
       <span>{category}</span>
       <Image
          imageUrl={image}
          alt="product name"
          className="w-10 h-10 rounded-full object-bottom"
        />

        
       </div>
      </div>

      <div className="flex items-center mt-5 space-x-2 text-white">
        <Button
          className="bg-indigo-700 "
          width="w-full"
          onClick={EditHandler}
        >
          {" "}
          EDIT
        </Button>

        <Button className="bg-red-800 " 
       onClick={onRemove}
        >DELETE</Button>
      </div>
    </div>
  );
};

export default ProductCard;
