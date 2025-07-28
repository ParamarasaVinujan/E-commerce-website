import React from 'react';
import { useWishlist } from '../../context/WishlistContext';
import { Link } from 'react-router-dom';

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  if (wishlistItems.length === 0) {
    return <p className="pt-24 text-center">Your wishlist is empty.</p>;
  }

  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wishlistItems.map((product) => (
          <div key={product._id} className="bg-white rounded-xl shadow-md p-4 flex flex-col">
            <Link to={`/products/${product._id}`} className="block mb-4">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
            </Link>
            <p className="text-neutral-600 mb-4">${product.price}</p>
            <button
              onClick={() => removeFromWishlist(product._id)}
              className="mt-auto bg-red-600 text-white py-2 rounded hover:bg-red-700 transition-colors"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
