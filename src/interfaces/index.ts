
export interface IProducts {
    id?: number | undefined,
    title: string,
    price: string,
    description: string,
    category:string,
    image: string,

}

export interface IFormInputs{

    
        id?:string,
        name: 'title' | 'description' | 'image'| 'price',
        label:string,
        type:string
      
}