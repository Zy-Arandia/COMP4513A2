import { useState } from "react";

const ShoppingCartProduct = ({ product }) => {
    // Note, product object can be the exact same as the product from fetch, specific features need to be chosen
    // console.log(product);

    return (
        <div className="flex flex-row w-full bg-blue-200 mt-3 cursor-pointer">
            {/* Image */}
            <div className="w-[150px] h-[200px] bg-green-100">
            </div>
            {/* Product Info */}
            <div className="flex flex-col justify-left ml-3">
                {/* Product Name */}
                <div className="text-lg">{product.name}</div>
                {/* Product Colour */}
                <div>Colour: {product.color[0].name}</div>
                {/* Product Size */}
                <div>{product.size}</div>
                {/* Product Price */}
                <div>${product.price}.00</div>
                {/* Quantity */}
                <div>Quantity: 2</div>
            </div>
        </div>
    )
}

export default ShoppingCartProduct;