import { ProductNameTypes } from "../Types"

export interface IProducts {
    id?: string ,
    title: string,
    price: string,
    description: string,
    category:string,
    image: string,
    colors: string[]
}

export interface IFormInputs{

    
        id?:string,
        name: ProductNameTypes,
        label:string,
        type:string
      
}

export interface ICategory {
    id: string,
    name:string,
    imageUrl:string
}