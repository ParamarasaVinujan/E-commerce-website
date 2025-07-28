import React, { useState } from 'react';
import {
  UserIcon,
  LockIcon,
  MailIcon,
  EyeIcon,
  EyeOffIcon
} from 'lucide-react';

function UserRegisterPage() {
  const [step, setStep] = useState(0);
  const [authMode, setAuthMode] = useState('register'); // or 'login'
  const [authError, setAuthError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate async call
    setTimeout(() => {
      setIsLoading(false);
      alert(`${authMode === 'login' ? 'Logged in' : 'Registered'} successfully!`);
    }, 1000);
  };

  return (
    <>
      <div className="lg:col-span-2">
        {/* Step 0: Authentication */}
        {step === 0 && (
          <div className="step-0 bg-white p-8 rounded-xl shadow-sm">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                <UserIcon size={24} className="text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-center">
              {authMode === 'login' ? 'Sign In to Your Account' : 'Create an Account'}
            </h2>
            <p className="text-neutral-500 text-center mb-8">
              {authMode === 'login'
                ? 'Sign in to speed up your checkout process'
                : 'Register to manage your orders and checkout faster'}
            </p>
            {authError && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                {authError}
              </div>
            )}
            <form onSubmit={handleAuthSubmit}>
              {authMode === 'register' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                </div>
              )}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <MailIcon size={18} className="text-neutral-500" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <LockIcon size={18} className="text-neutral-500" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-12 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOffIcon size={18} className="text-neutral-500" /> : <EyeIcon size={18} className="text-neutral-500" />}
                  </button>
                </div>
              </div>
              {authMode === 'register' && (
                <div className="mb-6">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <LockIcon size={18} className="text-neutral-500" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-12 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOffIcon size={18} className="text-neutral-500" /> : <EyeIcon size={18} className="text-neutral-500" />}
                    </button>
                  </div>
                </div>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-black text-white py-4 rounded-full hover:bg-neutral-800 transition-colors transform hover:scale-[1.02] active:scale-[0.98] duration-200 flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : authMode === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-neutral-600">
                {authMode === 'login' ? "Don't have an account?" : 'Already have an account?'}
                <button onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')} className="ml-2 text-[#FF6B6B] hover:underline">
                  {authMode === 'login' ? 'Register' : 'Sign In'}
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default UserRegisterPage;
