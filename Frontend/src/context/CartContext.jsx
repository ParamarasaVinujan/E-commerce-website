// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const handleAddToCart = (product, selectedColor, quantity) => {
//     const existingItem = cartItems.find(
//       item => item.id === product.id && item.color === selectedColor.name
//     );

//     if (existingItem) {
//       setCartItems(prev =>
//         prev.map(item =>
//           item.id === existingItem.id && item.color === existingItem.color
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         )
//       );
//     } else {
//       const newItem = {
//         id: product.id,
//         name: product.name,
//         image: product.images[0],
//         color: selectedColor.name,
//         price: product.price,
//         quantity,
//       };
//       setCartItems(prev => [...prev, newItem]);
//     }

//     setIsCartOpen(true);
//   };

//   const updateQuantity = (id, delta) => {
//     setCartItems(prev =>
//       prev.map(item =>
//         item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
//       )
//     );
//   };

//   const handleRemoveItem = (id) => {
//     setCartItems(prev => prev.filter(item => item.id !== id));
//   };

//   const closeCart = () => {
//     setIsCartOpen(false);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         isCartOpen,
//         handleAddToCart,
//         updateQuantity,
//         handleRemoveItem,
//         closeCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product, selectedColor, quantity) => {
    const existingItem = cartItems.find(
      item => item.id === product.id && item.color === selectedColor.name
    );

    if (existingItem) {
      setCartItems(prev =>
        prev.map(item =>
          item.id === existingItem.id && item.color === existingItem.color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      const newItem = {
        id: product.id,
        name: product.name,
        image: product.images[0],
        color: selectedColor.name,
        price: product.price,
        quantity,
      };
      setCartItems(prev => [...prev, newItem]);
    }

    setIsCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        handleAddToCart,
        updateQuantity,
        handleRemoveItem,
        closeCart,
        
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ✅ Add this to fix the error:
export const useCart = () => useContext(CartContext);
