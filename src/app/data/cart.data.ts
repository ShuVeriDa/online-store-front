import {ICartItem} from "@/app/types/cartItem.interface";
import {products} from "@/app/data/product.data";

export const cart: ICartItem[] = [
  {
    id: 1,
    quantity: 1,
    product: products[0],
    size: "GRANDE",
  },
  {
    id: 2,
    quantity: 2,
    product: products[1],
    size: "TALL"
  },
]