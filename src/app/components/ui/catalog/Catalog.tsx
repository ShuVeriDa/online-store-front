import {FC} from 'react';
import {Carousel} from "@/app/components/ui/catalog/carousel/Carousel";
import {IProduct} from "@/app/types/product.interface";

interface ICatalogProps {
}

export const Catalog: FC<{products: IProduct[]}> = ({products}) => {
  return (
    <div>
      <Carousel products={products}/>
    </div>
  );
};