import {FC} from 'react';
import {IProduct} from "@/app/types/product.interface";
import Image from "next/image";
import styles from '../Carousel.module.scss';
import cn from 'clsx'
import * as url from "url";
import {background, Button} from "@chakra-ui/react";
import {useActions} from "@/app/hooks/useActions";
import {COLORS} from "../../../../../../../config/color.config";


export const CarouselItem: FC<{ product: IProduct }> = ({product}) => {
  const isActive = product.id === 2
  const {addToCart} = useActions()

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
              <div className='text-center'>
                <Button
                  onClick={() => addToCart({
                    product: product,
                    quantity: 1
                  })}
                  color={COLORS.green}
                  className='tracking-widest'
                  marginTop={10}
                  borderRadius={20}
                  fontWeight={500}
                  textTransform={"uppercase"}
                  fontSize={12}
                >
                  Add to Basket
                </Button>
              </div>
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
};