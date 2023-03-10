import {FC} from 'react';

import {IProduct} from "@/app/types/product.interface";
import {CarouselItem} from "@/app/components/ui/catalog/carousel/carousel-item/CarouselItem";

import styles from './Carousel.module.scss';

export const Carousel: FC<{products: IProduct[]}> = ({products}) => {
  return (
    <section className={styles.carousel}>
      {products.map(product => <CarouselItem product={product} key={product.id} />)}
    </section>
  );
};