import { Link } from 'react-router-dom';
function FrontVeiw()
{
    return(
        <section  className="relative h-screen flex items-center overflow-hidden bg-neutral-50 pt-16">
      <div className="absolute inset-0 z-0">
        <div  className="w-full h-full absolute">
          <div className="absolute top-[10%] left-[10%] w-32 h-32 rounded-full bg-[#FF6B6B]/10"></div>
          <div className="absolute top-[20%] right-[15%] w-40 h-40 rounded-full bg-[#4ECDC4]/10"></div>
          <div className="absolute bottom-[15%] left-[20%] w-24 h-24 rounded-full bg-[#FF6B6B]/10"></div>
          <div className="absolute bottom-[30%] right-[25%] w-20 h-20 rounded-full bg-[#4ECDC4]/10"></div>
          <div className="absolute top-[40%] left-[30%] w-16 h-16 rounded-full bg-[#FF6B6B]/10"></div>
        </div>
      </div>
      <div className="container mx-auto px-6 z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1  className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block overflow-hidden">
              <span className="block">Modern</span>
            </span>
            <span className="block overflow-hidden mt-2">
              <span className="block">Design for</span>
            </span>
           
            <span className="block overflow-hidden mt-2 text-black">

              <span className="block">Modern Living</span>
            </span>
          </h1>
          <p  className="text-xl text-neutral-600 mb-10">
            Elevate your space with our curated collection of contemporary
            furniture that blends form, function, and sustainability.
          </p>
          <div >
            <Link to="/products" className="inline-block bg-neutral-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-neutral-800 transition-colors mr-4">
              Shop Collection
            </Link>
            <Link to="/about" className="inline-block px-8 py-4 rounded-full text-lg font-medium border border-neutral-300 hover:border-neutral-900 transition-colors">
              Our Story
            </Link>
          </div>
        </div>
        <div  className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/20 to-[#4ECDC4]/20 rounded-2xl z-10"></div>
          <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Modern furniture in stylish living room" className="w-full h-[500px] object-cover rounded-2xl shadow-2xl" />
        </div>
      </div>
    </section>

    )
}
export default FrontVeiw