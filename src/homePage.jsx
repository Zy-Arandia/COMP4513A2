import ProductCard from "./components/productCard.jsx"

const HomePage = (props) => {
    if (props.products.length === 0) {
            return (
                <div className="h-screen pt-12 flex justify-center items-center">
                    <h1 className="text-3xl">UNABLE TO LOAD PRODUCTS</h1>
                </div>
            )
        } else {

            return (
                <div className="w-screen flex justify-center items-center ">
                    <div className="
                        grid gap-1 pt-12 
                        w-3/4 mx-auto bg-green-200
                        grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
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