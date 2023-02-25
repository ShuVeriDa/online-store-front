import {FC} from 'react';
import {IProduct} from "@/app/types/product.interface";
import Image from "next/image";
import styles from '../Carousel.module.scss';
import cn from 'clsx'



export const CarouselItem: FC<{product: IProduct}> = ({product}) => {
  const isActive = product.id === 2

  return (
    <div className={cn(styles.item, {
      [styles.active]: isActive
    })}>
      <Image className={styles.image}
             src={product.images[0]}
             alt={product.name}
             width={315}
             height={315}
      />
      
      <div className={styles.heading}>
        <div>{product.name}</div>
      </div>
      {!isActive &&  <div className={styles.description}>
        {product.description}
      </div>}

    </div>
  );
};