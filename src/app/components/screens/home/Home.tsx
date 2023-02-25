import {FC} from 'react';
import Layout from "@/app/components/layout/Layout";
import {Catalog} from "@/app/components/ui/catalog/Catalog";
import {products} from '@/app/data/product.data';

interface IHomeProps {
}

export const Home: FC<IHomeProps> = () => {
  return (
    <Layout title={'Home'}>
      <Catalog products={products}/>
    </Layout>

  );
};