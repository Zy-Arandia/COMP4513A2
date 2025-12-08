
import ShoppingCartProduct from "./components/shoppingCartProduct.jsx"
import { useState, useEffect } from "react";

const ShoppingCartPage = ({ shoppingCartState, setShoppingCartState, removeFromCart }) => {

    const [cartPrice, setCartPrice] = useState(0);

    const taxAmount = cartPrice * 0.05;

    const shippingFee = 15;

    const cartTotal = cartPrice + taxAmount + shippingFee;

    useEffect(() => {
        let total = 0;

        shoppingCartState.forEach(item => {
            const qty = item.quantity || 1;
            total += item.price * qty;
        });

        setCartPrice(total);
    }, [shoppingCartState]);

    const totalQuantity = shoppingCartState.reduce((sum, item) => sum + (item.quantity || 1), 0);


    return (
        <div className="w-screen pt-20 flex flex-col justify-center items-center px-10 ">
            {/* Title */}
            <div className="flex w-full max-w-[1100px] bg-white mb-5">
                <h1 className="text-3xl font-lg w-full border-b-2 border-gray-400">SHOPPING CART</h1>
            </div>
            {/* Shopping Cart list / Price Info */}
            <div className="max-w-[1100px] w-full flex flex-row justify-center">
                {/* Shopping Cart list */}
                <div className="max-w-[1100px] w-full flex flex-col justify-center">
                    {shoppingCartState.map((product) => {
                        return <ShoppingCartProduct key={`${product.id}-${product.selectedSize}`}
                            product={product}
                            removeFromCart={removeFromCart} />
                    })}
                </div>
                <div className="w-3xl flex flex-col bg-white h-fit px-10 *:pt-5 *:flex *:justify-between">
                    <div className="">
                        <h1 className="font-semibold text-2xl">Order Summary</h1>
                        <h1 className="font-semibold text-2xl">Count: {totalQuantity}</h1>
                    </div>
                    <div className="">
                        <p>Price</p>
                        <p>${cartPrice.toFixed(2)}</p>
                    </div>
                    <div className="">
                        <p>Tax</p>
                        <p>${taxAmount.toFixed(2)}</p>
                    </div>
                    <div>
                        <p>Shipping</p>
                        <p>${shippingFee.toFixed(2)}</p>
                    </div>
                    <div>
                        <p>Order Total</p>
                        <p>${cartTotal.toFixed(2) }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartPage;