
const ShoppingCartPage = ({shoppingCartState, setShoppingCartState}) => {
    // List of products in a shopping cart
    console.log(shoppingCartState);
    console.log("please work");

    return (
        <div className="w-screen pt-20 flex justify-center items-center bg-red-200 ">
            <div className="w-[1200px] flex bg-white">
                <h1 className="text-3xl font-medium">Shopping Cart</h1>
            </div>
        </div>
    )
}

export default ShoppingCartPage;