export const initiatePayment = async (orderData) => {
  const response = await fetch("/api/payment/initialize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: orderData.total }),
  });
  const { data } = await response.json();
  window.location.href = data.authorization_url; // Redirect to Paystack
};
