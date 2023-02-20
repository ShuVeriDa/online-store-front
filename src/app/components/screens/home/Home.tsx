import {FC} from 'react';

interface IHomeProps {
}

export const Home: FC<IHomeProps> = () => {
  return (
    <div className='flex h-screen w-full items-center justify-content'>
      <h1 className='text-center text-7xl font-bold text-red'>Shop</h1>
    </div>
  );
};