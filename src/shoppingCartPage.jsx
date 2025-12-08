
import ShoppingCartProduct from "./components/shoppingCartProduct.jsx"
import SelectBox from "./components/selectBox.jsx"
import { useState, useEffect } from "react";

const ShoppingCartPage = ({ shoppingCartState, removeFromCart }) => {

    const [cartPrice, setCartPrice] = useState(0);
    const [destination, setDestination] = useState("Canada");
    const [shippingMethod, setShippingMethod] = useState("Standard");

    const [taxAmount, setTaxAmount] = useState(0);
    const [shippingFee, setShippingFee] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const countries = ["Canada", "United States", "International"]

    const calculateOrderTotals = ({ subtotal, destination, shippingMethod }) => {
        const taxRate = destination === "Canada" ? 0.05 : 0;
        const tax = subtotal * taxRate;

        if (subtotal > 500) {
            return {
                shippingCost: 0,
                tax,
                total: subtotal + tax
            };
        }

        const shippingRates = {
            Standard: {
                Canada: 10,
                "United States": 15,
                International: 20
            },
            Express: {
                Canada: 25,
                "United States": 25,
                International: 30
            },
            Priority: {
                Canada: 35,
                "United States": 50,
                International: 50
            }
        };

        const shippingCost = shippingRates[shippingMethod][destination];

        return {
            shippingCost,
            tax,
            total: subtotal + tax + shippingCost
        };
    };


    useEffect(() => {
        let total = 0;

        shoppingCartState.forEach(item => {
            const qty = item.quantity || 1;
            total += item.price * qty;
        });

        setCartPrice(total);
    }, [shoppingCartState]);

    useEffect(() => {
        const { tax, shippingCost, total } = calculateOrderTotals({
            subtotal: cartPrice,
            destination,
            shippingMethod
        });

        setTaxAmount(tax);
        setShippingFee(shippingCost);
        setCartTotal(total);
    }, [cartPrice, destination, shippingMethod]);


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
                {/* Cart Info */}
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
                        <p>${cartTotal.toFixed(2)}</p>
                    </div>
                    {/* Shipping options */}
                    <div className="gap-x-2">
                        <SelectBox
                            label="Destination"
                            value={destination}
                            onChange={setDestination}
                            options={["Canada", "United States", "International"]}
                        />

                        <SelectBox
                            label="Shipping Method"
                            value={shippingMethod}
                            onChange={setShippingMethod}
                            options={["Standard", "Express", "Priority"]}
                        />


                    </div>
                    <div className="">
                        <p className="
                            flex justify-center items-center
                            bg-black text-white 
                            border 
                            w-full h-12 
                            cursor-pointer
                            hover:bg-white hover:text-black"
                        >
                            CHECKOUT
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartPage;