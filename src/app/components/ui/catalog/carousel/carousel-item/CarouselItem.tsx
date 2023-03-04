import {FC} from 'react';
import {IProduct} from "@/app/types/product.interface";
import Image from "next/image";
import styles from '../Carousel.module.scss';
import cn from 'clsx'
import * as url from "url";
import {background, Button} from "@chakra-ui/react";
import {useActions} from "@/app/hooks/useActions";
import {COLORS} from "../../../../../../../config/color.config";
import {CarouselButton} from "@/app/components/ui/catalog/carousel/carousel-item/CarouselButton";
import {CarouselVariations} from "@/app/components/ui/catalog/carousel/carousel-item/CarouselVariations";


export const CarouselItem: FC<{ product: IProduct }> = ({product}) => {
  const isActive = product.id === 2

  return (
    <div className={cn(styles.item, {
      [styles.active]: isActive
    })}>
      <div>
        <Image className={styles.image}
               src={product.images[0]}
               alt={product.name}
               width={315}
               height={315}
        />

        <div className={styles.heading}>
          <div>{product.name}</div>
        </div>
        {isActive
          ? (
            <>
              {/*TODO: не отображается в центре*/}
              <CarouselVariations productId={product.id}/>
              <CarouselButton product={product} />
            </>
          )

          : (
            <div className={styles.description}>
              {product.description}
            </div>
          )}
      </div>
    </div>
  );
}