import {FC} from 'react';
import Image from "next/image";
import {ICartItem} from "@/app/types/cartItem.interface";
import styles from '../Cart.module.scss';
import {CartActions} from "@/app/components/layout/header/Cart/CartItem/cart-actions/CartActions";
import {formatToCurrency} from "@/app/utils/format-to-currency";

export const CartItem: FC<{ item: ICartItem }> = ({item}) => {
  return (
    <div className={styles.item}>
      <Image src={item.product.images[0]}
             width={100}
             height={100}
             alt={item.product.name}
      />

      <div>
        <div className={styles.name}>{item.product.name}</div>
        <div className={styles.price}>
          {formatToCurrency(item.product.price)}
        </div>
        <CartActions item={item}/>
      </div>
    </div>
  );
};