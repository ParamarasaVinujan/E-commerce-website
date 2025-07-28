import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ArrowLeftIcon,
  UserIcon,
  TruckIcon,
  CreditCardIcon,
  CheckCircleIcon
} from 'lucide-react';
import UserRegisterPage from './UserRegisterPage';
import { useCart } from '../../context/CartContext';

function CheckoutPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [authMode, setAuthMode] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { cartItems } = useCart();
  const [userId, setUserId] = useState('665f2ceccdfabc12345def'); // Replace with actual logic

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handlePlaceOrder = async () => {
    const orderData = {
      user: userId,
      orderItems: cartItems,
      shippingAddress: {
        address: formData.address,
        city: formData.city,
        state: formData.state,
        postalCode: formData.zipCode,
        country: formData.country
      },
      paymentMethod: 'Credit Card',
      totalPrice: total.toFixed(2)
    };

    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });

    const data = await res.json();
    if (res.ok) {
      console.log('Order placed:', data);
      navigate('/order-success');
    } else {
      alert('Order failed');
    }
  };

  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto checkout-container">
        <div className="mb-10">
          <button onClick={() => navigate(-1)} className="flex items-center text-neutral-600 hover:text-black transition-colors">
            <ArrowLeftIcon size={18} className="mr-2" />
            Back
          </button>
          <h1 className="text-3xl md:text-4xl font-bold mt-4">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <UserRegisterPage />

            {/* Add Shipping, Payment, Review components here based on step */}

            {step === 3 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">Review Your Order</h2>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-neutral-500">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-medium">${item.price}</p>
                    </div>
                  ))}
                </div>
                <button onClick={handlePlaceOrder} className="mt-6 w-full bg-black text-white py-3 rounded-full">
                  Place Order
                </button>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 mt-3 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <p className="text-sm text-neutral-500">Free delivery in 3-5 business days.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import { gsap } from 'gsap';
// import { ArrowLeftIcon, CreditCardIcon, TruckIcon, CheckCircleIcon, UserIcon, LockIcon, MailIcon, EyeIcon, EyeOffIcon } from 'lucide-react';

// import { useCart } from "../../context/CartContext";
// import { useUser } from '../../context/UserContext';
// import UserRegisterPage from './UserRegisterPage';



// const CheckoutPage = () => {
//   const [step, setStep] = useState(0); // Start with auth step (0)
//   const [formData, setFormData] = useState({
//     // Auth details
//     email: '',
//     password: '',
//     confirmPassword: '',
//     // Shipping details
//     firstName: '',
//     lastName: '',
//     phone: '',
//     address: '',
//     city: '',
//     state: '',
//     zipCode: '',
//     country: 'United States',
//     // Payment details
//     cardName: '',
//     cardNumber: '',
//     expiryDate: '',
//     cvv: ''
//   });
//   const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [authError, setAuthError] = useState('');
//   const navigate = useNavigate();
//   const {
//     items,
//     clearCart
//   } = useCart();
//   const {
//     user,
//     login,
//     register,
//     isAuthenticated
//   } = useUser();
//   useEffect(() => {
//     // Animate form entry
//     gsap.from('.checkout-container', {
//       opacity: 0,
//       y: 30,
//       duration: 0.8,
//       ease: 'power3.out'
//     });
//     // If cart is empty, redirect to products page
//     if (items.length === 0) {
//       navigate('/products');
//     }
//     // If user is already authenticated, skip to shipping step
//     if (isAuthenticated) {
//       setStep(1);
//       // Pre-fill user data if available
//       if (user) {
//         setFormData(prev => ({
//           ...prev,
//           firstName: user.firstName || prev.firstName,
//           lastName: user.lastName || prev.lastName,
//           email: user.email || prev.email
//         }));
//       }
//     }
//   }, [items, navigate, isAuthenticated, user]);
//   const handleInputChange = e => {
//     const {
//       name,
//       value
//     } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };
//   const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   const shipping = 15;
//   const tax = subtotal * 0.08;
//   const total = subtotal + shipping + tax;
//   const handleAuthSubmit = async e => {
//     e.preventDefault();
//     setAuthError('');
//     setIsLoading(true);
//     try {
//       if (authMode === 'login') {
//         // Attempt login
//         const success = await login(formData.email, formData.password);
//         if (success) {
//           setStep(1); // Move to shipping step
//         }
//       } else {
//         // Validate registration form
//         if (formData.password !== formData.confirmPassword) {
//           setAuthError('Passwords do not match');
//           setIsLoading(false);
//           return;
//         }
//         // Attempt registration
//         const success = await register({
//           firstName: formData.firstName,
//           lastName: formData.lastName,
//           email: formData.email,
//           password: formData.password
//         });
//         if (success) {
//           setStep(1); // Move to shipping step
//         }
//       }
//     } catch (error) {
//       setAuthError('Authentication failed. Please try again.');
//     }
//     setIsLoading(false);
//   };
//   // const nextStep = () => {
//   //   gsap.to(`.step-${step}`, {
//   //     opacity: 0,
//   //     x: -50,
//   //     duration: 0.3,
//   //     onComplete: () => {
//   //       setStep(step + 1);
//   //       gsap.fromTo(`.step-${step + 1}`, {
//   //         opacity: 0,
//   //         x: 50
//   //       }, {
//   //         opacity: 1,
//   //         x: 0,
//   //         duration: 0.3
//   //       });
//   //     }
//   //   });
//   // };
//   // const prevStep = () => {
//   //   gsap.to(`.step-${step}`, {
//   //     opacity: 0,
//   //     x: 50,
//   //     duration: 0.3,
//   //     onComplete: () => {
//   //       setStep(step - 1);
//   //       gsap.fromTo(`.step-${step - 1}`, {
//   //         opacity: 0,
//   //         x: -50
//   //       }, {
//   //         opacity: 1,
//   //         x: 0,
//   //         duration: 0.3
//   //       });
//   //     }
//   //   });
//   // };
//   const placeOrder = () => {
//     setIsLoading(true);
//     // Simulate order processing
//     setTimeout(() => {
//       const orderId = `ORD-${Math.floor(Math.random() * 1000000)}`;
//       clearCart();
//       navigate('/order-confirmation', {
//         state: {
//           orderId,
//           total,
//           items,
//           shippingDetails: {
//             name: `${formData.firstName} ${formData.lastName}`,
//             address: formData.address,
//             city: formData.city,
//             state: formData.state,
//             zipCode: formData.zipCode,
//             country: formData.country
//           }
//         }
//       });
//     }, 2000);
//   };
//   return <div className="pt-24 pb-16 px-6">
//       <div className="max-w-6xl mx-auto checkout-container">
//         <div className="mb-10">
//           <button onClick={() => navigate(-1)} className="flex items-center text-neutral-600 hover:text-black transition-colors">
//             <ArrowLeftIcon size={18} className="mr-2" />
//             Back
//           </button>
//           <h1 className="text-3xl md:text-4xl font-bold mt-4">Checkout</h1>
//         </div>
//         {/* Checkout Steps Progress */}
//         <div className="flex justify-center mb-12">
//           <div className="relative flex items-center w-full max-w-2xl">
//             <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-neutral-200 -z-10"></div>
//             {/* Step 0: Authentication */}
//             <div className="flex-1 flex flex-col items-center">
//               <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 0 ? 'bg-black text-white' : 'bg-neutral-200 text-neutral-500'}`}>
//                 <UserIcon size={20} />
//               </div>
//               <span className="text-sm mt-2 font-medium">Account</span>
//             </div>
//             {/* Step 1: Shipping */}
//             <div className="flex-1 flex flex-col items-center">
//               <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-black text-white' : 'bg-neutral-200 text-neutral-500'}`}>
//                 <TruckIcon size={20} />
//               </div>
//               <span className="text-sm mt-2 font-medium">Shipping</span>
//             </div>
//             {/* Step 2: Payment */}
//             <div className="flex-1 flex flex-col items-center">
//               <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-black text-white' : 'bg-neutral-200 text-neutral-500'}`}>
//                 <CreditCardIcon size={20} />
//               </div>
//               <span className="text-sm mt-2 font-medium">Payment</span>
//             </div>
//             {/* Step 3: Review */}
//             <div className="flex-1 flex flex-col items-center">
//               <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-black text-white' : 'bg-neutral-200 text-neutral-500'}`}>
//                 <CheckCircleIcon size={20} />
//               </div>
//               <span className="text-sm mt-2 font-medium">Review</span>
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//           {/* Form Section */}
//           <div className="lg:col-span-2">
//             {/* Step 0: Authentication */}
//             {step === 0 && <div className="step-0 bg-white p-8 rounded-xl shadow-sm">
//                 <div className="flex justify-center mb-6">
//                   <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
//                     <UserIcon size={24} className="text-white" />
//                   </div>
//                 </div>
//                 <h2 className="text-2xl font-semibold mb-2 text-center">
//                   {authMode === 'login' ? 'Sign In to Your Account' : 'Create an Account'}
//                 </h2>
//                 <p className="text-neutral-500 text-center mb-8">
//                   {authMode === 'login' ? 'Sign in to speed up your checkout process' : 'Register to manage your orders and checkout faster'}
//                 </p>
//                 {authError && <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
//                     {authError}
//                   </div>}
//                 <form onSubmit={handleAuthSubmit}>
//                   {authMode === 'register' && <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                       <div>
//                         <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
//                           First Name
//                         </label>
//                         <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" required />
//                       </div>
//                       <div>
//                         <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
//                           Last Name
//                         </label>
//                         <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" required />
//                       </div>
//                     </div>}
//                   <div className="mb-6">
//                     <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
//                       Email Address
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
//                         <MailIcon size={18} className="text-neutral-500" />
//                       </div>
//                       <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full pl-12 pr-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" required />
//                     </div>
//                   </div>
//                   <div className="mb-6">
//                     <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
//                       Password
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
//                         <LockIcon size={18} className="text-neutral-500" />
//                       </div>
//                       <input type={showPassword ? 'text' : 'password'} id="password" name="password" value={formData.password} onChange={handleInputChange} className="w-full pl-12 pr-12 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" required />
//                       <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3" onClick={() => setShowPassword(!showPassword)}>
//                         {showPassword ? <EyeOffIcon size={18} className="text-neutral-500" /> : <EyeIcon size={18} className="text-neutral-500" />}
//                       </button>
//                     </div>
//                   </div>
//                   {authMode === 'register' && <div className="mb-6">
//                       <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700 mb-1">
//                         Confirm Password
//                       </label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
//                           <LockIcon size={18} className="text-neutral-500" />
//                         </div>
//                         <input type={showPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} className="w-full pl-12 pr-12 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" required />
//                         <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3" onClick={() => setShowPassword(!showPassword)}>
//                           {showPassword ? <EyeOffIcon size={18} className="text-neutral-500" /> : <EyeIcon size={18} className="text-neutral-500" />}
//                         </button>
//                       </div>
//                     </div>}
//                   <button type="submit" disabled={isLoading} className="w-full bg-black text-white py-4 rounded-full hover:bg-neutral-800 transition-colors transform hover:scale-[1.02] active:scale-[0.98] duration-200 flex items-center justify-center">
//                     {isLoading ? <>
//                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         Processing...
//                       </> : authMode === 'login' ? 'Sign In' : 'Create Account'}
//                   </button>
//                 </form>
//                 <div className="mt-6 text-center">
//                   <p className="text-neutral-600">
//                     {authMode === 'login' ? "Don't have an account?" : 'Already have an account?'}
//                     <button onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')} className="ml-2 text-[#FF6B6B] hover:underline">
//                       {authMode === 'login' ? 'Register' : 'Sign In'}
//                     </button>
//                   </p>
//                 </div>
//               </div>}
//             {/* Step 1: Shipping Information */}
//             {step === 1 && <div className="step-1 bg-white p-8 rounded-xl shadow-sm">
//                 <h2 className="text-2xl font-semibold mb-6">
//                   Shipping Information
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   <div>
//                     <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
//                       First Name
//                     </label>
//                     <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" required />
//                   </div>
//                   <div>
//                     <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
//                       Last Name
//                     </label>
//                     <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" required />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
//                       Email Address
//                     </label>
//                     <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" required readOnly={isAuthenticated} />
//                   </div>
//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
//                       Phone Number
//                     </label>
//                     <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" required />
//                   </div>
//                 </div>
//                 <div className="mb-6">
//                   <label htmlFor="address" className="block text-sm font-medium text-neutral-700 mb-1">
//                     Address
//                   </label>
//                   <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" required />
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//                   <div>
//                     <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-1">
//                       City
//                     </label>
//                     <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" required />
//                   </div>
//                   <div>
//                     <label htmlFor="state" className="block text-sm font-medium text-neutral-700 mb-1">
//                       State/Province
//                     </label>
//                     <input type="text" id="state" name="state" value={formData.state} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" required />
//                   </div>
//                   <div>
//                     <label htmlFor="zipCode" className="block text-sm font-medium text-neutral-700 mb-1">
//                       ZIP / Postal Code
//                     </label>
//                     <input type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" required />
//                   </div>
//                 </div>
//                 <div className="mb-8">
//                   <label htmlFor="country" className="block text-sm font-medium text-neutral-700 mb-1">
//                     Country
//                   </label>
//                   <select id="country" name="country" value={formData.country} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all bg-white" required>
//                     <option value="United States">United States</option>
//                     <option value="Canada">Canada</option>
//                     <option value="United Kingdom">United Kingdom</option>
//                     <option value="Australia">Australia</option>
//                     <option value="Germany">Germany</option>
//                     <option value="France">France</option>
//                   </select>
//                 </div>
//                 <button onClick={nextStep} className="w-full bg-black text-white py-4 rounded-full hover:bg-neutral-800 transition-colors transform hover:scale-[1.02] active:scale-[0.98] duration-200">
//                   Continue to Payment
//                 </button>
//               </div>}
//                {/* <UserRegisterPage /> */}
//             {/* Step 2: Payment Information */}
//             {step === 2 && <div className="step-2 bg-white p-8 rounded-xl shadow-sm">
//                 <h2 className="text-2xl font-semibold mb-6">
//                   Payment Information
//                 </h2>
//                 <div className="mb-6">
//                   <label htmlFor="cardName" className="block text-sm font-medium text-neutral-700 mb-1">
//                     Name on Card
//                   </label>
//                   <input type="text" id="cardName" name="cardName" value={formData.cardName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" required />
//                 </div>
//                 <div className="mb-6">
//                   <label htmlFor="cardNumber" className="block text-sm font-medium text-neutral-700 mb-1">
//                     Card Number
//                   </label>
//                   <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} placeholder="XXXX XXXX XXXX XXXX" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" required />
//                 </div>
//                 <div className="grid grid-cols-2 gap-6 mb-8">
//                   <div>
//                     <label htmlFor="expiryDate" className="block text-sm font-medium text-neutral-700 mb-1">
//                       Expiry Date
//                     </label>
//                     <input type="text" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleInputChange} placeholder="MM/YY" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" required />
//                   </div>
//                   <div>
//                     <label htmlFor="cvv" className="block text-sm font-medium text-neutral-700 mb-1">
//                       CVV
//                     </label>
//                     <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleInputChange} placeholder="123" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" required />
//                   </div>
//                 </div>
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <button onClick={prevStep} className="flex-1 border border-neutral-300 py-4 rounded-full hover:border-neutral-900 transition-colors">
//                     Back
//                   </button>
//                   <button onClick={nextStep} className="flex-1 bg-black text-white py-4 rounded-full hover:bg-neutral-800 transition-colors transform hover:scale-[1.02] active:scale-[0.98] duration-200">
//                     Review Order
//                   </button>
//                 </div>
//               </div>}
//             {/* Step 3: Review Order */}
//             {step === 3 && <div className="step-3 bg-white p-8 rounded-xl shadow-sm">
//                 <h2 className="text-2xl font-semibold mb-6">
//                   Review Your Order
//                 </h2>
//                 <div className="border-b pb-6 mb-6">
//                   <h3 className="font-medium mb-3">Shipping Address</h3>
//                   <p className="text-neutral-600">
//                     {formData.firstName} {formData.lastName}
//                     <br />
//                     {formData.address}
//                     <br />
//                     {formData.city}, {formData.state} {formData.zipCode}
//                     <br />
//                     {formData.country}
//                     <br />
//                     {formData.email}
//                     <br />
//                     {formData.phone}
//                   </p>
//                 </div>
//                 <div className="border-b pb-6 mb-6">
//                   <h3 className="font-medium mb-3">Payment Method</h3>
//                   <div className="flex items-center">
//                     <CreditCardIcon size={20} className="mr-2 text-neutral-500" />
//                     <span>
//                       Credit Card ending in {formData.cardNumber.slice(-4)}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="mb-8">
//                   <h3 className="font-medium mb-3">Items</h3>
//                   <div className="space-y-4">
//                     {items.map(item => <div key={item.id} className="flex gap-4 items-center">
//                         <div className="w-16 h-16 rounded-lg overflow-hidden bg-neutral-100 flex-shrink-0">
//                           <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                         </div>
//                         <div className="flex-1">
//                           <h4 className="font-medium">{item.name}</h4>
//                           {item.color && <p className="text-neutral-500 text-sm">
//                               {item.color}
//                             </p>}
//                         </div>
//                         <div className="text-right">
//                           <p className="font-medium">${item.price}</p>
//                           <p className="text-sm text-neutral-500">
//                             Qty: {item.quantity}
//                           </p>
//                         </div>
//                       </div>)}
//                   </div>
//                 </div>
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <button onClick={prevStep} className="flex-1 border border-neutral-300 py-4 rounded-full hover:border-neutral-900 transition-colors">
//                     Back
//                   </button>
//                   <button onClick={placeOrder} disabled={isLoading} className="flex-1 bg-black text-white py-4 rounded-full hover:bg-neutral-800 transition-colors transform hover:scale-[1.02] active:scale-[0.98] duration-200 flex items-center justify-center">
//                     {isLoading ? <>
//                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         Processing...
//                       </> : 'Place Order'}
//                   </button>
//                 </div>
//               </div>}
//           </div>
//           {/* Order Summary */}
//           <div className="lg:col-span-1">
//             <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
//               <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
//               <div className="space-y-3 mb-6">
//                 <div className="flex justify-between">
//                   <span className="text-neutral-600">Subtotal</span>
//                   <span>${subtotal.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-neutral-600">Shipping</span>
//                   <span>${shipping.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-neutral-600">Tax</span>
//                   <span>${tax.toFixed(2)}</span>
//                 </div>
//                 <div className="border-t pt-3 mt-3 flex justify-between font-semibold">
//                   <span>Total</span>
//                   <span>${total.toFixed(2)}</span>
//                 </div>
//               </div>
//               <div className="border-t pt-6">
//                 <div className="flex items-start mb-4">
//                   <TruckIcon size={20} className="mr-3 text-neutral-500 mt-0.5" />
//                   <div>
//                     <h4 className="font-medium">Free Shipping</h4>
//                     <p className="text-sm text-neutral-500">
//                       Delivery in 3-5 business days
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 text-neutral-500 mt-0.5">
//                     <path d="M9 12L11 14L15 10M20.618 5.984C17.45 3.07 12.618 2.725 9.154 4.632L4.95 2.877C3.564 2.278 2.114 3.36 2.022 4.851L1.532 12.583C1.429 14.208 2.61 15.634 4.224 15.866L6 16.13V19C6 20.657 7.343 22 9 22H15C16.657 22 18 20.657 18 19V14.154C20.239 10.91 20.524 6.82 18.346 3.228" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                   <div>
//                     <h4 className="font-medium">Satisfaction Guaranteed</h4>
//                     <p className="text-sm text-neutral-500">
//                       30-day money-back guarantee
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>;
// };
// export default CheckoutPage;