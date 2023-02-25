import {FC, useRef, useState} from 'react';
import styles from './Cart.module.scss';
import {CartItem} from "@/app/components/layout/header/Cart/CartItem/CartItem";
import {Drawer, DrawerContent} from "@chakra-ui/modal";
import {Button, DrawerBody, DrawerCloseButton, DrawerFooter, DrawerHeader, DrawerOverlay} from "@chakra-ui/react";
import {useTypedSelector} from "@/app/hooks/useTypedSelector";
import {formatToCurrency} from "@/app/utils/format-to-currency";
import {useCart} from "@/app/hooks/useCart";

interface ICartProps {
}

export const Cart: FC<ICartProps> = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const btnRef = useRef<HTMLButtonElement>(null)

  const {total, cart} = useCart()

  return (
    <div className={styles['wrapper-cart']}>
      <button className={styles.heading} onClick={() => setIsOpen(!isOpen)} ref={btnRef}>
        <span className={styles.badge}>1</span>
        <span className={styles.text}>MY BASKET</span>
      </button>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={() => setIsOpen(false)}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerCloseButton/>
          <DrawerHeader>My basket</DrawerHeader>

          <DrawerBody>
            <div className={styles.cart}>
              {cart.length
                ? cart.map(item => (
                  <CartItem item={item} key={item.id}/>
                ))
                : <div>Basket is empty</div>
              }
            </div>
          </DrawerBody>

          <DrawerFooter justifyContent={"space-between"}
                        borderTopColor="#a49b8f"
                        borderTopWidth={1}
          >
            <div className={styles.footer}>
              <div>Total:</div>
              <div>{formatToCurrency(total)}</div>
            </div>
            <Button colorScheme='green'>Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

    </div>
  );
};