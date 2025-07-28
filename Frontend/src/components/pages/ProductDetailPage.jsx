// import { useParams } from 'react-router-dom';
// import { ShoppingCartIcon, HeartIcon, ShareIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
// import { useState, useEffect, useContext } from 'react';
// import Addcartmenu from './AddCartmenu';
// import { CartContext } from '../../context/CartContext';
// const isInWishlist = wishlist.some(item => item.id === product.id);




// const ProductDetailPage = () => {
//   const { id } = useParams();

//   const {
//     cartItems,
//     isCartOpen,
//     handleAddToCart,
//     updateQuantity,
//     handleRemoveItem,
//     closeCart,
//   } = useContext(CartContext);

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [currentImageIndex, setImage] = useState(0);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [quantity, setQuantity] = useState(1);

//   useEffect(() => {
//     setLoading(true);
//     setError(null);

//     fetch(`http://localhost:8000/api/products/${id}`)  // Adjust URL if backend runs on a different port or domain
//       .then(res => {
//         if (!res.ok) throw new Error('Product not found');
//         return res.json();
//       })
//       .then(data => {
//         setProduct(data);
//         setSelectedColor(data.colors[0]);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, [id]);

//   const nextImage = () => setImage((prev) => (prev + 1) % product.images.length);
//   const prevImage = () => setImage((prev) => (prev - 1 + product.images.length) % product.images.length);
//   const incrementQuantity = () => setQuantity((q) => q + 1);
//   const decrementQuantity = () => setQuantity((q) => Math.max(1, q - 1));

//   if (loading) return <p className="pt-24 text-center">Loading...</p>;
//   if (error) return <p className="pt-24 text-center text-red-600">{error}</p>;
//   if (!product) return null; // safety fallback

//   const onAddToCart = () => {
//     handleAddToCart(product, selectedColor, quantity);
//   };

//   return (
//     <>
//       <div className="pt-24 pb-16 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Product Images */}
//             <div className="space-y-6">
//               <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-100">
//                 <img src={product.images[currentImageIndex]} alt={product.name} className="w-full h-full object-cover" />
//                 <div className="absolute inset-x-0 bottom-0 p-6 flex justify-between">
//                   <button onClick={prevImage} className="bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors" aria-label="Previous image">
//                     <ArrowLeftIcon size={20} />
//                   </button>
//                   <button onClick={nextImage} className="bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors" aria-label="Next image">
//                     <ArrowRightIcon size={20} />
//                   </button>
//                 </div>
//               </div>
//               <div className="flex space-x-4">
//                 {product.images.map((image, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setImage(index)}
//                     className={`relative flex-1 aspect-square rounded-lg overflow-hidden ${
//                       index === currentImageIndex ? 'ring-2 ring-offset-2 ring-black' : ''
//                     }`}
//                   >
//                     <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
//                   </button>
//                 ))}
//               </div>
//             </div>
//             {/* Product Info */}
//             <div className="space-y-8">
//               <div>
//                 <p className="text-neutral-500 mb-2">{product.category}</p>
//                 <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
//                 <p className="text-2xl font-semibold">${product.price}</p>
//               </div>
//               <p className="text-neutral-600 leading-relaxed">{product.description}</p>
//               <div>
//                 <h3 className="text-sm font-medium text-neutral-500 mb-3">COLOR</h3>
//                 <div className="flex space-x-3">
//                   {product.colors.map(color => (
//                     <button
//                       key={color.name}
//                       onClick={() => setSelectedColor(color)}
//                       className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                         selectedColor.name === color.name ? 'ring-2 ring-offset-2 ring-black' : ''
//                       }`}
//                       aria-label={`Select ${color.name} color`}
//                     >
//                       <span className="w-8 h-8 rounded-full" style={{ backgroundColor: color.hex }}></span>
//                     </button>
//                   ))}
//                 </div>
//                 <p className="text-sm mt-2">{selectedColor.name}</p>
//               </div>
//               <div>
//                 <h3 className="text-sm font-medium text-neutral-500 mb-3">QUANTITY</h3>
//                 <div className="flex border border-neutral-300 rounded-full w-fit">
//                   <button
//                     onClick={decrementQuantity}
//                     className="px-4 py-2 hover:bg-neutral-100 transition-colors rounded-l-full"
//                     aria-label="Decrease quantity"
//                   >
//                     -
//                   </button>
//                   <span className="px-6 py-2 flex items-center justify-center min-w-[4rem]">{quantity}</span>
//                   <button
//                     onClick={incrementQuantity}
//                     className="px-4 py-2 hover:bg-neutral-100 transition-colors rounded-r-full"
//                     aria-label="Increase quantity"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button onClick={onAddToCart} className="flex-1 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center">
//                   <ShoppingCartIcon size={20} className="mr-2" />
//                   Add to Cart
//                 </button>
//                 <button
//                   className="px-4 py-4 rounded-full border border-neutral-300 hover:border-neutral-900 transition-colors"
//                   aria-label="Add to wishlist"
//                   onClick={() => toggleWishlist(product)}
//                 >
//                   {isInWishlist(product._id) ? (
//                     <HeartIcon size={20} className="text-red-600" />
//                   ) : (
//                     <HeartIcon size={20} />
//                   )}
//                 </button>
//                 <button
//                   className="px-4 py-4 rounded-full border border-neutral-300 hover:border-neutral-900 transition-colors"
//                   aria-label="Share"
//                 >
//                   <ShareIcon size={20} />
//                 </button>
//               </div>
//               <div className="pt-8 border-t border-neutral-200 space-y-6">
//                 <div>
//                   <h3 className="font-medium mb-3">Features</h3>
//                   <ul className="space-y-2 text-neutral-600">
//                     {product.features.map((feature, index) => (
//                       <li key={index} className="flex items-start">
//                         <span className="mr-2 mt-1 block w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="font-medium mb-3">Materials</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {product.materials.map((material, index) => (
//                       <span key={index} className="px-3 py-1 bg-neutral-100 rounded-full text-sm">
//                         {material}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="font-medium mb-3">Specifications</h3>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-neutral-600">
//                     {Object.entries(product.specs).map(([key, value]) => (
//                       <div key={key} className="flex justify-between py-2 border-b border-neutral-100">
//                         <span className="capitalize">{key}</span>
//                         <span>{value}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Addcartmenu
//         isOpen={isCartOpen}
//         onClose={() => setIsCartOpen(false)}
//         items={cartItems}
//         updateQuantity={updateQuantity}
//         handleRemoveItem={handleRemoveItem}
//       />
//     </>
//   );
// };

// export default ProductDetailPage;

import { useParams } from 'react-router-dom';
import { ShoppingCartIcon, HeartIcon, ShareIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { useState, useEffect, useContext } from 'react';
import Addcartmenu from './AddCartmenu';
import { CartContext } from '../../context/CartContext';

const ProductDetailPage = () => {
  const { id } = useParams();

  const {
    cartItems,
    isCartOpen,
    handleAddToCart,
    updateQuantity,
    handleRemoveItem,
    closeCart,
  } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentImageIndex, setImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const [wishlist, setWishlist] = useState([]); // ✅ Wishlist state

  // ✅ Helper functions
  const isInWishlist = (productId) => {
    return wishlist.some((item) => item._id === productId);
  };

  const toggleWishlist = (product) => {
    if (isInWishlist(product._id)) {
      setWishlist(wishlist.filter((item) => item._id !== product._id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`/api/products/${id}`)
      .then(async (res) => {
        if (!res.ok) {
          // Try to parse error message from JSON
          let errorMessage = 'Product not found';
          try {
            const errorData = await res.json();
            if (errorData.message) errorMessage = errorData.message;
          } catch {
            // Non-JSON response
            errorMessage = `Error: ${res.status} ${res.statusText}`;
          }
          throw new Error(errorMessage);
        }
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setSelectedColor(data.colors[0]);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const nextImage = () => setImage((prev) => (prev + 1) % product.images.length);
  const prevImage = () => setImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  const incrementQuantity = () => setQuantity((q) => q + 1);
  const decrementQuantity = () => setQuantity((q) => Math.max(1, q - 1));

  if (loading) return <p className="pt-24 text-center">Loading...</p>;
  if (error) return <p className="pt-24 text-center text-red-600">{error}</p>;
  if (!product) return null;

  const onAddToCart = () => {
    handleAddToCart(product, selectedColor, quantity);
  };

  return (
    <>
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-6">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-100">
                <img src={product.images[currentImageIndex]} alt={product.name} className="w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 p-6 flex justify-between">
                  <button onClick={prevImage} className="bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors" aria-label="Previous image">
                    <ArrowLeftIcon size={20} />
                  </button>
                  <button onClick={nextImage} className="bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors" aria-label="Next image">
                    <ArrowRightIcon size={20} />
                  </button>
                </div>
              </div>
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setImage(index)}
                    className={`relative flex-1 aspect-square rounded-lg overflow-hidden ${index === currentImageIndex ? 'ring-2 ring-offset-2 ring-black' : ''}`}
                  >
                    <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <p className="text-neutral-500 mb-2">{product.category}</p>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-2xl font-semibold">${product.price}</p>
              </div>
              <p className="text-neutral-600 leading-relaxed">{product.description}</p>

              {/* Color Selection */}
              <div>
                <h3 className="text-sm font-medium text-neutral-500 mb-3">COLOR</h3>
                <div className="flex space-x-3">
                  {product.colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedColor.name === color.name ? 'ring-2 ring-offset-2 ring-black' : ''}`}
                      aria-label={`Select ${color.name} color`}
                    >
                      <span className="w-8 h-8 rounded-full" style={{ backgroundColor: color.hex }}></span>
                    </button>
                  ))}
                </div>
                <p className="text-sm mt-2">{selectedColor.name}</p>
              </div>

              {/* Quantity Selector */}
              <div>
                <h3 className="text-sm font-medium text-neutral-500 mb-3">QUANTITY</h3>
                <div className="flex border border-neutral-300 rounded-full w-fit">
                  <button onClick={decrementQuantity} className="px-4 py-2 hover:bg-neutral-100 transition-colors rounded-l-full">-</button>
                  <span className="px-6 py-2 flex items-center justify-center min-w-[4rem]">{quantity}</span>
                  <button onClick={incrementQuantity} className="px-4 py-2 hover:bg-neutral-100 transition-colors rounded-r-full">+</button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={onAddToCart} className="flex-1 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center">
                  <ShoppingCartIcon size={20} className="mr-2" />
                  Add to Cart
                </button>

                <button
                  className="px-4 py-4 rounded-full border border-neutral-300 hover:border-neutral-900 transition-colors"
                  aria-label="Add to wishlist"
                  onClick={() => toggleWishlist(product)}
                >
                  {isInWishlist(product._id) ? (
                    <HeartIcon size={20} className="text-red-600" />
                  ) : (
                    <HeartIcon size={20} />
                  )}
                </button>

                <button className="px-4 py-4 rounded-full border border-neutral-300 hover:border-neutral-900 transition-colors" aria-label="Share">
                  <ShareIcon size={20} />
                </button>
              </div>

              {/* Product Details */}
              <div className="pt-8 border-t border-neutral-200 space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Features</h3>
                  <ul className="space-y-2 text-neutral-600">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1 block w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Materials</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map((material, index) => (
                      <span key={index} className="px-3 py-1 bg-neutral-100 rounded-full text-sm">{material}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Specifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-neutral-600">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-neutral-100">
                        <span className="capitalize">{key}</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Menu */}
      <Addcartmenu
        isOpen={isCartOpen}
        onClose={closeCart}
        items={cartItems}
        updateQuantity={updateQuantity}
        handleRemoveItem={handleRemoveItem}
      />
    </>
  );
};

export default ProductDetailPage;

