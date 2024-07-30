
export interface IProducts {
    id?: string | undefined,
    title: string,
    price: string,
    description: string,
    category:string,
    image: string,
    colors: string[]
}

export interface IFormInputs{

    
        id?:string,
        name: 'title' | 'description' | 'image'| 'price',
        label:string,
        type:string
      
}

export interface ICategory {
    id: string,
    name:string,
    imageUrl:string
}