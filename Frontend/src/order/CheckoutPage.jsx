// function CheckoutPage()
// {
//     const handlePlaceOrder = async () => {
//   const orderData = {
//     user: userId,
//     orderItems: cartItems,
//     shippingAddress,
//     paymentMethod,
//     totalPrice
//   };

//   const res = await fetch('/api/orders', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(orderData)
//   });

//   const data = await res.json();
//   if (res.ok) {
//     console.log('Order placed:', data);
//     // Redirect to confirmation or order summary
//   }
// };
// return(
//     <div></div>
// )

// }
// export default CheckoutPage
