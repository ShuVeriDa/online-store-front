import {IProduct} from "@/app/types/product.interface";

export const products: IProduct[] = [
  {
    id: 1,
    description: 'Calories Total Fat 19g Saturated Fat 13g Trans Fat 0.5g 29% 65%',
    name: 'Midnight Mint Mocha Frappuccino',
    images: [
      '/images/products/peppermint.png',
      '/images/products/sugar-cookie.png',
      '/images/products/mocha-cookie.png',
    ],
    price: 9,
    reviews: []
  },
  {
    id: 2,
    description: 'Calories Total Fat 20g Saturated Fat 13g Trans Fat 0.5g 29% 65%',
    name: 'Peppermint Mocha',
    images: [
      '/images/products/coffee-cup.png',
    ],
    price: 5,
    reviews: []
  },
  {
    id: 3,
    description: 'Calories Total Fat 19g Saturated Fat 13g Trans Fat 0.5g 29% 65%',
    name: 'Matcha Creme Frappuccino Blended Beverage',
    images: [
      '/images/products/mocha-cookie.png',
    ],
    price: 7,
    reviews: []
  },
  {
    id: 4,
    description: 'Calories Total Fat 19g Saturated Fat 13g Trans Fat 0.5g 29% 65%',
    name: 'Irish Cream Cold Brew',
    images: [
      '/images/products/ice-coffee.png',
    ],
    price: 8,
    reviews: []
  },
  {
    id: 5,
    description: 'Calories Total Fat 19g Saturated Fat 13g Trans Fat 0.5g 29% 65%',
    name: 'Mango Dragonfruit Lemonade Starbucks Beverage',
    images: [
      '/images/products/lemonade.png',
    ],
    price: 15,
    reviews: []
  },

]