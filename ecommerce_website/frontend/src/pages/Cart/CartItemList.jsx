import React from 'react'
import CartItem from './CartItem'
import BasketContext from '../../context/BasketContext'
import { useContext } from 'react'

export default function CartItemList() {

  const {items} = useContext(BasketContext);
  return (
    <>
        {
            items.map(
                cartItem => {
                    return <CartItem item={cartItem} key={cartItem.pk}/>
                }
            )
        }      
    </>
  )
}
