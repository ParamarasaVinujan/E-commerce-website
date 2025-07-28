import { FilterIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import ProductCard from './ProductCard';

function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products') // Adjust your backend URL if needed
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 border border-neutral-300 rounded-full hover:border-neutral-900 transition-colors">
            <FilterIcon size={18} className="mr-2" />
            Filter
          </button>
          <select className="px-4 py-2 border border-neutral-300 rounded-full hover:border-neutral-900 transition-colors bg-white appearance-none pr-8" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
            backgroundPosition: 'right 8px center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '16px'
          }}>
            <option>All Categories</option>
            <option>Sofas</option>
            <option>Chairs</option>
            <option>Tables</option>
            <option>Lighting</option>
            <option>Storage</option>
            <option>Beds</option>
            <option>Decor</option>
          </select>
        </div>
        <select className="px-4 py-2 border border-neutral-300 rounded-full hover:border-neutral-900 transition-colors bg-white appearance-none pr-8" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
          backgroundPosition: 'right 8px center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '16px'
        }}>
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest First</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;

// =======
// import { useState, useEffect } from 'react';
// import { FilterIcon } from 'lucide-react';
// import axios from 'axios';
// import ProductCard from './ProductCard';

// function ProductGrid() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8000/api/getAllProducts') // Updated backend URL to match route
//       .then((res) => setProducts(res.data))
//       .catch((err) => console.error('Error fetching products:', err));
//   }, []);

//   return (
//     <div>
//       <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
//         <div className="flex items-center space-x-4">
//           <button className="flex items-center px-4 py-2 border border-neutral-300 rounded-full hover:border-neutral-900 transition-colors">
//             <FilterIcon size={18} className="mr-2" />
//             Filter
//           </button>
//           <select className="px-4 py-2 border border-neutral-300 rounded-full hover:border-neutral-900 transition-colors bg-white appearance-none pr-8" style={{
//             backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
//             backgroundPosition: 'right 8px center',
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: '16px'
//           }}>
//             <option>All Categories</option>
//             <option>Sofas</option>
//             <option>Chairs</option>
//             <option>Tables</option>
//             <option>Lighting</option>
//             <option>Storage</option>
//             <option>Beds</option>
//             <option>Decor</option>
//           </select>
//         </div>
//         <select className="px-4 py-2 border border-neutral-300 rounded-full hover:border-neutral-900 transition-colors bg-white appearance-none pr-8" style={{
//           backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
//           backgroundPosition: 'right 8px center',
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: '16px'
//         }}>
//           <option>Featured</option>
//           <option>Price: Low to High</option>
//           <option>Price: High to Low</option>
//           <option>Newest First</option>
//         </select>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div key={product._id}>
//             <ProductCard product={product} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductGrid;
