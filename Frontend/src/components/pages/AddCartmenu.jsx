// import { ShoppingBagIcon, XIcon, MinusIcon, PlusIcon, TrashIcon } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { useRef } from 'react';

// function Addcartmenu({ isOpen, onClose, items, updateQuantity, handleRemoveItem }) {
//   const contentRef = useRef();

//   const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
//           isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
//         }`}
//         onClick={onClose}
//       />
      
//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         <div className="h-full flex flex-col">
//           <div className="flex items-center justify-between p-6 border-b">
//             <h2 className="text-xl font-semibold flex items-center">
//               <ShoppingBagIcon className="mr-2" size={24} />
//               Shopping Cart ({items.reduce((acc, item) => acc + item.quantity, 0)})
//             </h2>
//             <button
//               onClick={onClose}
//               className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
//               aria-label="Close cart"
//             >
//               <XIcon size={20} />
//             </button>
//           </div>

//           {items.length > 0 ? (
//             <>
//               <div ref={contentRef} className="flex-1 overflow-y-auto py-6 px-4 space-y-6">
//                 {items.map((item) => (
//                   <div key={item.id} className="flex gap-4 p-3 rounded-xl hover:bg-neutral-50 transition-colors">
//                     <div className="w-24 h-24 rounded-lg overflow-hidden bg-neutral-100 flex-shrink-0">
//                       <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="font-medium">{item.name}</h3>
//                       {item.color && (
//                         <p className="text-neutral-500 text-sm mb-1">{item.color}</p>
//                       )}
//                       <p className="font-medium">${item.price}</p>
//                       <div className="flex items-center mt-2">
//                         <button
//                           onClick={() => updateQuantity(item.id, -1)}
//                           className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center hover:border-neutral-400 transition-colors"
//                           aria-label="Decrease quantity"
//                         >
//                           <MinusIcon size={14} />
//                         </button>
//                         <span className="w-8 text-center mx-1">{item.quantity}</span>
//                         <button
//                           onClick={() => updateQuantity(item.id, 1)}
//                           className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center hover:border-neutral-400 transition-colors"
//                           aria-label="Increase quantity"
//                         >
//                           <PlusIcon size={14} />
//                         </button>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => handleRemoveItem(item.id)}
//                       className="p-2 h-fit hover:bg-neutral-200 rounded-full transition-colors"
//                       aria-label={`Remove ${item.name} from cart`}
//                     >
//                       <TrashIcon size={18} />
//                     </button>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t p-6 space-y-4">
//                 <div className="flex justify-between text-lg font-semibold">
//                   <span>Subtotal</span>
//                   <span>${subtotal.toLocaleString()}</span>
//                 </div>
//                 <p className="text-sm text-neutral-500">
//                   Shipping and taxes calculated at checkout
//                 </p>
//                 <Link
//                   to="/checkout"
//                   onClick={onClose}
//                   className="block w-full bg-black text-white py-4 rounded-full hover:bg-neutral-800 transition-colors transform hover:scale-[1.02] active:scale-[0.98] duration-200 text-center"
//                 >
//                   Checkout
//                 </Link>
//                 <button
//                   onClick={onClose}
//                   className="w-full border border-neutral-200 py-4 rounded-full hover:border-neutral-400 transition-colors"
//                 >
//                   Continue Shopping
//                 </button>
//               </div>
//             </>
//           ) : (
//             <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
//               <div className="w-20 h-20 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
//                 <ShoppingBagIcon size={32} className="text-neutral-400" />
//               </div>
//               <h3 className="text-xl font-medium mb-2">Your cart is empty</h3>
//               <p className="text-neutral-500 mb-6">
//                 Start shopping to add items to your cart
//               </p>
//               <button
//                 onClick={onClose}
//                 className="px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition-colors"
//               >
//                 Continue Shopping
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Addcartmenu;


import {
  ShoppingBagIcon,
  XIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

function Addcartmenu({
  isOpen,
  onClose,
  items = [], // ensure it's always an array
  updateQuantity,
  handleRemoveItem,
}) {
  const contentRef = useRef();

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-semibold flex items-center">
              <ShoppingBagIcon className="mr-2" size={24} />
              Shopping Cart ({items.reduce((acc, item) => acc + item.quantity, 0)})
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <XIcon size={20} />
            </button>
          </div>

          {items.length > 0 ? (
            <>
              <div
                ref={contentRef}
                className="flex-1 overflow-y-auto py-6 px-4 space-y-6"
              >
                {items.map((item, index) => (
                  <div
                    key={item.id || `${item.name}-${index}`} // ✅ fallback key if id is missing
                    className="flex gap-4 p-3 rounded-xl hover:bg-neutral-50 transition-colors"
                  >
                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-neutral-100 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      {item.color && (
                        <p className="text-neutral-500 text-sm mb-1">{item.color}</p>
                      )}
                      <p className="font-medium">${item.price}</p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center hover:border-neutral-400 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <MinusIcon size={14} />
                        </button>
                        <span className="w-8 text-center mx-1">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center hover:border-neutral-400 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <PlusIcon size={14} />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="p-2 h-fit hover:bg-neutral-200 rounded-full transition-colors"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <TrashIcon size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t p-6 space-y-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <p className="text-sm text-neutral-500">
                  Shipping and taxes calculated at checkout
                </p>
                <Link
                  to="/checkout"
                  onClick={onClose}
                  className="block w-full bg-black text-white py-4 rounded-full hover:bg-neutral-800 transition-colors transform hover:scale-[1.02] active:scale-[0.98] duration-200 text-center"
                >
                  Checkout
                </Link>
                <button
                  onClick={onClose}
                  className="w-full border border-neutral-200 py-4 rounded-full hover:border-neutral-400 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
                <ShoppingBagIcon size={32} className="text-neutral-400" />
              </div>
              <h3 className="text-xl font-medium mb-2">Your cart is empty</h3>
              <p className="text-neutral-500 mb-6">
                Start shopping to add items to your cart
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Addcartmenu;

