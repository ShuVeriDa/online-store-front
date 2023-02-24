import {ICartItem} from "@/app/types/cartItem.interface";


export interface IInitialState {
  items: ICartItem[]
}


export interface IAddCartPayload extends Omit<ICartItem, 'id'>{

}