import FrontVeiw from "../Home/FrontVeiw";
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ChevronDownIcon } from 'lucide-react';
import CategoryShowCase from "../Home/CategoryShowcase";

function HomePage()
{
    return(
       <div className="w-full">
      <FrontVeiw />
      <div className="flex justify-center mt-4">
        <button  className="flex flex-col items-center text-neutral-500 hover:text-neutral-800 transition-colors" aria-label="Scroll down">
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDownIcon size={20} />
        </button>
      </div>
      <section className="py-24 px-6 bg-neutral-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Featured Collections
          </h2>
          <CategoryShowCase />
          
        </div>
      </section>
      {/* <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Best Sellers</h2>
            <Link to="/products" className="flex items-center text-lg hover:text-[#FF6B6B] transition-colors">
              View All <ArrowRightIcon size={20} className="ml-2" />
            </Link>
          </div>
          
        </div>
      </section> */}
      {/* <section className="py-24 px-6 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Experience Furniture in AR
              </h2>
              <p className="text-xl text-neutral-400 mb-8">
                Visualize our products in your space before you buy. Our AR
                technology lets you see exactly how our furniture will fit in
                your home.
              </p>
              <button className="bg-white text-neutral-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors">
                Try AR Experience
              </button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/30 to-[#4ECDC4]/30 z-10"></div>
              <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="AR furniture experience" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section> */}
      
    </div>
    )
}
export default HomePage;