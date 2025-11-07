import { useDispatch, useSelector } from 'react-redux'
import ProductDetails from '../../utils/product-details'
import Quantity from '../../utils/quantity'


function ShoppingCardTable() {

  const products = useSelector((state) => state.ShoppingCart.products)

  return (
    <section>
      <table className="table">
        <thead>
            <tr>
                <th>Product Details</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>
                    <ProductDetails
                      image={product.image}
                      name={product.name}
                      description={product.description}
                    />
                </td>
                <td>
                  <Quantity 
                    id={product.id} 
                  />
                </td>
                <td>{product.price}</td>
                <td>{(product.price * product.quantity).toFixed(2)}</td>
            </tr>
            ))}
        </tbody>
      </table>
    </section>
  )
}

export default ShoppingCardTable
