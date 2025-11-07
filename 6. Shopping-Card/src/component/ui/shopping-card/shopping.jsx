import { useDispatch, useSelector } from "react-redux";
import ShoppingCardTable from "./shopping-card-table";
import { addToCard } from "../../feature/Shopping-Card/shoppingCardSlice";

function Shopping() {

  const products = useSelector((state) => state.ShoppingCart.products)
  const dispatch = useDispatch()

  return (
    <div className="col-8 p-5"  style={{ background: "#ffffff" }}>
      <section className="d-flex justify-content-between mb-4">
        <h4>Shopping Card</h4>
        <p>total {products.length} items</p>
      </section>
        <hr />
      <section>
        <ShoppingCardTable/>
      </section>
      <section>
        <button className="btn btn-success float-end" onClick={() => dispatch(addToCard())}>ADD To Card</button>
      </section>
    </div>
  );
}

export default Shopping;
