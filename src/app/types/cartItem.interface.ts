import {IProduct} from "@/app/types/product.interface";
import {TypeSize} from "@/app/store/types";

export interface ICartItem {
  id: number
  product: IProduct,
  quantity: number
  size: TypeSize
}