import { Link } from 'react-router-dom';
function CategoryShowCase()
{
const categories =[{
    id: 'living',
    name: 'Living Room',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Create a space for conversation,relaxation and entertainment'
},
{
  id: 'dining',
  name: 'Dining Room',
  image: 'https://images.unsplash.com/photo-1615968679312-9b7ed9f04e79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  description: 'Gather around beautiful tables for meals and memories'
}, 
{
  id: 'bedroom',
  name: 'Bedroom',
  image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  description: 'Transform your bedroom into a serene sanctuary'
}, 
{
  id: 'office',
  name: 'Home Office',
  image: 'https://images.unsplash.com/photo-1593476550610-87baa860004a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  description: 'Design a productive and inspiring workspace'
}

]

    return(

        <div  className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {categories.map((category, index) => <Link key={category.id} to={`/products?category=${category.id}`}  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B]/40 to-[#4ECDC4]/40 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
          <img src={category.image} alt={category.name} className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <h3 className="text-white text-3xl font-bold mb-2">
              {category.name}
            </h3>
            <p className="text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
              {category.description}
            </p>
            <span className="inline-block text-white border-b-2 border-white pb-1">
              Explore Collection
            </span>
          </div>
        </Link>)}
    </div>
    )
}
export default CategoryShowCase;