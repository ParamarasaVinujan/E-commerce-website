export const getCartItems = (req, res) => {
  // For now, return mock cart items
  const cartItems = [
    {
      _id: '1',
      name: 'Sample Product 1',
      price: 29.99,
      quantity: 2,
      image: '/images/sample1.jpg',
    },
    {
      _id: '2',
      name: 'Sample Product 2',
      price: 49.99,
      quantity: 1,
      image: '/images/sample2.jpg',
    },
  ];
  res.status(200).json(cartItems);
};
