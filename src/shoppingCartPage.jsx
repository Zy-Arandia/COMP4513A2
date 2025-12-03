
import ShoppingCartProduct from "./components/shoppingCartProduct.jsx"
import { useState, useEffect } from "react";

const ShoppingCartPage = ({ shoppingCartState, setShoppingCartState }) => {

    const [ cartPrice, setCartPrice ] = useState(0);
    useEffect(() => {
        let total = 0;
        shoppingCartState.forEach(item => {
            total += item.price;
            // console.log(item);
            console.log("wat");
        });
        setCartPrice(total);
    }, [shoppingCartState]);

    return (
        <div className="w-screen pt-20 flex flex-col justify-center items-center px-10 ">
            {/* Title */}
            <div className="flex w-full max-w-[1100px] bg-white mb-5">
                <h1 className="text-3xl font-medium">Shopping Cart</h1>
            </div>
            {/* Shopping Cart list / Price Info */}
            <div className="max-w-[1100px] w-full bg-red-200 flex flex-row justify-center">
                {/* Shopping Cart list */}
                <div className="max-w-[1100px] w-full bg-red-200 flex flex-col justify-center">
                    {shoppingCartState.map((product) => {
                        return <ShoppingCartProduct key={product.id} product={product} />
                    })}
                </div>
                <div className="w-3xl flex flex-col bg-white h-fit px-10 *:pt-5 *:flex *:justify-between">
                    <div className="">
                        <h1 className="font-semibold text-2xl">Order Summary</h1>
                        <h1 className="font-semibold text-2xl">Count: {shoppingCartState.length}</h1>
                    </div>
                    <div className="">
                        <p>Price</p>
                        <p>$0.00</p>
                    </div>
                    <div className="">
                        <p>Tax</p>
                        <p>$0.00</p>
                    </div>
                    <div>
                        <p>Order Total</p>
                        <p>${cartPrice || 0.00}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartPage;