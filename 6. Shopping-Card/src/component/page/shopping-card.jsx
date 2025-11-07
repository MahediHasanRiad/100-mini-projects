import Shopping from "../ui/shopping-card/shopping";
import OrderSummary from '../ui/shopping-card/orderSummary'


function ShoppingCard() {
  return (
    <section style={{ background: '#e6e7eb', height: '948px'}}>
      <section className="w-75 m-auto p-4">
        <section className="row justify-content-between">
          <Shopping />
          <OrderSummary />
        </section>
      </section>
    </section>
  );
}

export default ShoppingCard;
