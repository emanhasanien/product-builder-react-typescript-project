import { ICategory, IFormInputs, IProducts } from "../interfaces";
import { v4 as uuid} from 'uuid'

export const productList: IProducts[] = [
  {
    id: uuid(),
    title: "Opna Women's Short Sleeve Moisture",
    price: "7.95",
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    colors:[
      "#A31ACB",
      "#3C2A21",
      "#1F8A70",
      "#820000",
      "#FF0032",
      "#fead9a",
  "#5c85cc",
    ]
  },

  {
    id: uuid(),
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: "22.3",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      colors:[
        "#A31ACB",
        "#3C2A21",
        "#1F8A70",
        "#820000",
        "#FF0032",
      ]
      
  },
  {
    id: uuid(),
    title: "Mens Cotton Jacket",
    price: "55.99",
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    colors:[
      "#A31ACB",
      "#3C2A21",
      "#1F8A70",
      "#820000",
      "#FF0032",
    ]
  },
  {
    id:uuid(),
    title: "Mens Casual Slim Fit",
    price: "15.99",
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    colors:[
      "#A31ACB",
      "#3C2A21",
      "#1F8A70",
      "#820000",
      "#FF0032",
       "#fead9a",
  "#5c85cc",
    ]
  },
  {
    id:uuid(),
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: "39.99",
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    colors:[
      "#A31ACB",
      "#3C2A21",
      "#1F8A70",
      "#820000",
      "#FF0032",
    ]
  },
  {
    id: uuid(),
    title: "Solid Gold Petite Micropave ",
    price: "168",
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
     colors:[
      "#A31ACB",
      "#3C2A21",
      "#1F8A70",
      "#820000",
      "#FF0032",
    ]
  },
  {
    id: uuid(),
    title: "White Gold Plated Princess",
    price: "9.99",
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    colors:[
      "#A31ACB",
      "#3C2A21",
      "#1F8A70",
      "#820000",
      "#FF0032",
    ]
  },

  {
    id: uuid(),
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: "109",
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    colors:[
      "#A31ACB",
      "#3C2A21",
      "#1F8A70",
      "#820000",
      "#FF0032",
      "#fead9a",
  "#5c85cc",
    ]
  },

  {
    id: uuid(),
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: "64",
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    colors:[
      "#A31ACB",
      "#3C2A21",
      "#1F8A70",
      "#820000",
      "#FF0032",
    ]
  },
  {
    id: uuid(),
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: "109",
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    colors:[
      "#A31ACB",
      "#3C2A21",
      "#1F8A70",
      "#820000",
      "#FF0032",
    ]
  },
];

export const formInputList: IFormInputs[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },

  {
    id: "description",
    name: "description",
    label: "Product description",
    type: "text",
  },

  {
    id: "image",
    name: "image",
    label: "Product Image URL",
    type: "text",
  },

  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];

export const Colors = [
  "#A31ACB",
  "#3C2A21",
  "#1F8A70",
  "#820000",
  "#FF0032",
  "#7e61a4",
  "#065535",
  "#fead9a",
  "#5c85cc",
  "#fdcd7f",
];


export const Categories : ICategory[] = 
[
  {
    id:uuid() ,
    name:"women's clothing" ,
    imageUrl: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
  } ,

  
  {
    id: uuid(),
    name:"women's clothing" ,
    imageUrl: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
  },


  
  {
    id: uuid(),
    name:"Electronics",
    imageUrl: "https://i.ibb.co/1r28gMk/1.webp"
  },

    
  {
    id: uuid(),
    name:"Electronics",
    imageUrl: "https://i.ibb.co/VL1Dnv1/4.webp"
  },

  {
    id: uuid(),
    name: "Home Decoration",
    imageUrl: "https://i.ibb.co/Ycz8hkV/6.webp"
  },

  {
    id: uuid(),
    name: "Fashion",
    imageUrl: "https://i.ibb.co/BLCDw7v/3.webp"
  },


  {
    id: uuid(),
    name:"Equipments",
    imageUrl: "https://i.ibb.co/TTS9wY4/9.webp"
  },

  {
    id: uuid(),
    name:"Beauty Product",
    imageUrl: "https://i.ibb.co/QC4L3RF/top8.jpg"
  },


  ]
