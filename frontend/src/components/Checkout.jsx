import { useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("paystack");
  const { cartItems } = useSelector((state) => state.cart);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      items: cartItems,
      address,
      paymentMethod,
      total: cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
    };
    // Proceed to payment (implementation in next section)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Shipping Address</h2>
      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />

      <h2>Payment Method</h2>
      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="paystack">Paystack</option>
        <option value="flutterwave">Flutterwave</option>
      </select>

      <button type="submit">Proceed to Payment</button>
    </form>
  );
};
