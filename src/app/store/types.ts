import {ICartItem} from "@/app/types/cartItem.interface";


export interface IInitialState {
  items: ICartItem[]
}

export interface IAddCartPayload extends Omit<ICartItem, 'id'>{}

export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
  type: 'minus' | 'plus'
}