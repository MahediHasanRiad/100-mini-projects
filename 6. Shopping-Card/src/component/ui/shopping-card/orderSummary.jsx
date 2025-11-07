import { useSelector } from "react-redux";

function OrderSummary() {

  const orderSummary = useSelector((state) => state.ShoppingCart.OrderSummary)

  return (
      <section className="col-4 p-5" style={{ background: "#f5f5f6" }}>
        <h4>Order Summary</h4>
        <hr />
        <section className="d-flex justify-content-between">
          <span>ITEMS {orderSummary.totalItems}</span>
          <span>{orderSummary.totalAmmounts}/-</span>
        </section>
        <section style={{ marginTop: '50px' }}>
          <h5>Promo Code</h5>
          <input className="form-control mt-3" type="text" placeholder="copun..." /> <br />
          <button className="btn btn-danger m-0">APPLY</button>
        </section>
        <section style={{ marginTop: '22rem' }}>
          <button className="btn btn-primary w-100">CHACK OUT</button>
        </section>
      </section>
  );
}

export default OrderSummary;
