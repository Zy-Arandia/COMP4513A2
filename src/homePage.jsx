import ProductCard from "./components/productCard.jsx"

const HomePage = (props) => {

    const product = props.products[1];
    if (props.products.length === 0) {
        return (
            <div className="h-[2000px] bg-red-200 pt-12">
            </div>
        )
    } else {
        return (
            <div className="w-screen  flex justify-center items-center bg-red-200">
                <div className="
  grid gap-1 pt-12 
  w-3/4 mx-auto bg-green-200
  grid-cols-2
  lg:grid-cols-3
  xl:grid-cols-4
  justify-items-center
">
                    {props.products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                    <p>test2</p>
                </div>
            </div>
        )
    }
}
export default HomePage;