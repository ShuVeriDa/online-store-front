import {FC} from 'react';
import {Button, HStack, Input, useNumberInput} from "@chakra-ui/react";
import {AddIcon, MinusIcon, PlusSquareIcon} from "@chakra-ui/icons";
import {useDispatch} from "react-redux";
import {cartSlice} from "@/app/store/slice";
import {ICartItem} from "@/app/types/cartItem.interface";
import {useActions} from "@/app/hooks/useActions";
import {useCart} from "@/app/hooks/useCart";


export const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
  const {getInputProps, getIncrementButtonProps, getDecrementButtonProps} =
    useNumberInput({
      step: 1,
      defaultValue: 1,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  const {removeFromCart, changeQuantity} = useActions()

  const { cart} = useCart()
  const quantity = cart.find(cartItem => cartItem.id === item.id)?.quantity

  return (
    <div className='mt-3'>
      <HStack>
        <Button {...dec}
                onClick={() => changeQuantity({id: item.id, type: 'minus'})}
                disabled={quantity === 1}
        >
          <MinusIcon fontSize={13}/>
        </Button>
        <Input {...input}
               focusBorderColor={'green.400'}
               readOnly
               _hover={{cursor: 'default'}}
               value={quantity}
               // defaultValue={cart.find(cartItem => cartItem.id === item.id)?.quantity}
        />
        <Button {...inc}
                onClick={() => changeQuantity({id: item.id, type: 'plus'})}
        >
          <AddIcon fontSize={13}/>
        </Button>
      </HStack>

      <Button variant={'unstyled'}
              color={'#f23c3d'}
              marginTop={2}
              size={'sm'}
              opacity={0.5}
              onClick={() => removeFromCart({id: item.id})}
      >
        Remove
      </Button>
    </div>
  );
};