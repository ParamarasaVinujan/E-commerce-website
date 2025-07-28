import ProductGrid from "../../Products/ProductGrid";

function ProductsPage()
{
    return(
        <div className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Products</h1>
          <p className="text-xl text-neutral-600">
            Discover our collection of modern furniture
          </p>
        </header>
        <ProductGrid />
        
      </div>
    </div>
    


    )
}
export default ProductsPage;