import { useDispatch, useSelector } from "react-redux"
import { quantityDecrement, quantityIncrement } from "../feature/Shopping-Card/shoppingCardSlice"

function Quantity({ id }) {

  const quantity = useSelector((state) => state.ShoppingCart.products.find(item => item.id === id)?.quantity || 0)
  const dispatch = useDispatch()

  return (
    <section>
      <button className='btn border m-1' onClick={() => dispatch(quantityDecrement(id))}>-</button>
      <span className='p-2'>{quantity}</span>
      <button className='btn border m-1' onClick={() => dispatch(quantityIncrement(id))}>+</button>
    </section>
  )
}

export default Quantity
