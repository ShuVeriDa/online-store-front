import {FC} from 'react';
import {Button} from "@chakra-ui/react";
import {COLORS} from "../../../../../../../config/color.config";
import {useActions} from "@/app/hooks/useActions";
import {IProduct} from "@/app/types/product.interface";

interface ICarouselButtonProps {
}

export const CarouselButton: FC<{ product: IProduct }> = ({product}) => {

  const {addToCart} = useActions()

  return (
    <div className='text-center'>
      <Button
        onClick={() => addToCart({
          product: product,
          quantity: 1,
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
  );
};