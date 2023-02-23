import {FC, useState} from 'react';
import styles from './Cart.module.scss';
import {CartItem} from "@/app/components/layout/header/Cart/CartItem/CartItem";
import {cart} from "@/app/data/cart.data";

interface ICartProps {
}

export const Cart: FC<ICartProps> = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={styles['wrapper-cart']}>
      <button className={styles.heading} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.badge}>
          1
        </span>
        <span className={styles.text}>MY BASKET</span>
      </button>

      {isOpen && (
        <div className={styles.cart}>
          {cart.map(item => (
            <CartItem item={item} key={item.id}/>
          ))}
        </div>
      )}
    </div>
  );
};