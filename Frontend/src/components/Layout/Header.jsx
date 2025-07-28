import { Link } from 'react-router-dom';
import { ShoppingCartIcon, SearchIcon, UserIcon, MenuIcon,HeartIcon } from 'lucide-react';

function Header()
{
    return(
        
        <header  className="fixed top-0 left-0 w-full z-40 px-6 py-4 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
         <span className="text-black">

            MANGALA SHOWROOM
          </span>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-10">
            <li>
                <Link to="/" >
              
                Home
                </Link>
              
            </li>
            <li>
                <Link to="/products">
              
                Products
                </Link>
             
            </li>
            <li>
                <Link to="/about">
             
                About
                </Link>
              
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:text-[#FF6B6B] transition-colors" aria-label="Search">
            <SearchIcon size={20} />
          </button>
          <button className="p-2 hover:text-[#FF6B6B] transition-colors" aria-label="Account">
            <Link to="/register">
            <UserIcon size={20} />
            </Link>
          </button>

          <button className="p-2 hover:text-[#FF6B6B] transition-colors" aria-label="Account">
            <Link to="/wishlist">
            <HeartIcon size={20} />
            </Link>
          </button>

          <button className="p-2 hover:text-[#FF6B6B] transition-colors relative" aria-label="Cart">
            <ShoppingCartIcon size={20} />
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
          <button className="md:hidden p-2 hover:text-[#FF6B6B] transition-colors" aria-label="Menu">
            <MenuIcon size={24} />
          </button>
        </div>
      </div>
    </header>
    )
}
export default Header