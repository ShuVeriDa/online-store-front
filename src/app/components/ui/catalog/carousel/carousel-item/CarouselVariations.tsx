import {FC} from 'react';

import cn from 'clsx'
import styles from '../Carousel.module.scss';
import {TypeSize} from "@/app/store/types";
import {useCart} from "@/app/hooks/useCart";

interface ICarouselVariationsProps {
}

const SIZES: TypeSize[] = ['SHORT', 'TALL', "GRANDE", "VENTI"]


export const CarouselVariations: FC<{ productId: number }> = ({productId}) => {
  const {cart} = useCart()
  return (
    <div className={styles.variations}>
      {SIZES.map(size => <button key={size}
                                 className={cn( {
                                   [styles.active]: cart
                                 })}
      >
        {size}
      </button>)}
    </div>
  );
};

