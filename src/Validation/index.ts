

export const productValidation = (product :{title : string , description : string , image: string , price: string}) => {

 const errors : { title:string , description:string , image: string , price : string} =  { 
     
    title: "",
    description:'',
    image: '',
    price:''
 }

 const vaildUrl = /^(http|https|ftp):\/\/[^ "]+$/.test(product.image)


 if (!product.title.trim() || product.title.length < 10 || product.title.length > 80 ){
    errors.title = ' Title must be more than 10 character and less than 80 character'
 }

 if (!product.description.trim() || product.description.length < 10 || product.description.length > 900 ){
    errors.description = ' Description must be more than 10 character and less than 900 character'
 }


 if (!product.image.trim() || !vaildUrl){
    errors.image = 'valid image url is required'

 }

 if(!product.price.trim() || isNaN(Number(product.price))){
    errors.price = 'valid price is required'
 }
 return errors
}