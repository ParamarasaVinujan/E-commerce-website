// import { ShoppingCartIcon, HeartIcon } from 'lucide-react';
// import { Link } from 'react-router-dom';

// function ProductCard()
// {
//     return(
//         <div  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"  >
//       <Link to={`/products/${product.id}`} className="block relative overflow-hidden">
//         <div className="aspect-square overflow-hidden">
//           <img  src={product.image} alt={product.name} className="w-full h-full object-cover transform transition-transform" />
//         </div>
//         {/* <div  className="absolute bottom-0 left-0 right-0 p-4 flex justify-between opacity-0 translate-y-10"> */}
//           <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">

//           <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors" aria-label="Add to wishlist">
//             <HeartIcon size={18} />
//           </button>
//           <button className="bg-black/90 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black transition-colors" aria-label="Add to cart">
          
//             <ShoppingCartIcon size={18} />
           
//           </button>
//         </div>
//       </Link>
//       <div  className="p-4">
//         <div className="flex justify-between items-start mb-2">
//           <div>
//             <h3 className="text-lg font-medium">{product.name}</h3>
//             <p className="text-sm text-neutral-500">{product.category}</p>
//           </div>
//           <p className="font-semibold">${product.price}</p>
//         </div>
//         <div className="flex space-x-2 mt-3">
//           {product.colors.map((color, i) => <div key={i} className="w-4 h-4 rounded-full border border-neutral-200" style={{
//           backgroundColor: color
//         }} aria-label={`Color option ${i + 1}`}></div>)}
//         </div>
//       </div>
//     </div>

//     )
// }
// export default ProductCard
import { ShoppingCartIcon, HeartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';

function ProductCard({ product }) {
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <Link to={`/products/${product._id}`} className="block relative overflow-hidden">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transform transition-transform"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors"
            aria-label="Add to wishlist"
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product);
            }}
          >
            {isInWishlist(product._id) ? (
              <HeartIcon size={18} className="text-red-600" />
            ) : (
              <HeartIcon size={18} />
            )}
          </button>
          <button className="bg-black/90 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black transition-colors" aria-label="Add to cart">
            <ShoppingCartIcon size={18} />
          </button>
        </div>
      </Link>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-sm text-neutral-500">{product.category}</p>
          </div>
          <p className="font-semibold">${product.price}</p>
        </div>
        <div className="flex space-x-2 mt-3">
          {product.colors.map((color, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full border border-neutral-200"
              style={{ backgroundColor: color.hex }}
              aria-label={`Color option ${i + 1}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;


