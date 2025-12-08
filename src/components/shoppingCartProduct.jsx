import { useNavigate } from "react-router-dom";

const ShoppingCartProduct = ({ product, removeFromCart }) => {

    const navigate = useNavigate();

    const goToProductPage = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className="flex flex-row w-full bg-white mt-3 cursor-pointer" onClick={goToProductPage}>
            {/* Image */}
            <div className="w-[150px] h-[200px] bg-green-100">
            </div>
            {/* Product Info */}
            <div className="flex flex-col justify-left ml-3 gap-y-1">
                {/* Product Name */}
                <div className="text-xl font-semibold">{product.name}</div>
                {/* Product Colour */}
                <div><span className="font-semibold">Colour: </span>{product.color[0].name}</div>
                {/* Product Size */}
                <div><span className="font-semibold">Size: </span>{product.selectedSize}</div>
                {/* Product Price */}
                <div>${(product.price * product.quantity).toFixed(2)}</div>
                {/* Quantity */}
                <div><span className="font-semibold">Quantity: </span>{product.quantity}</div>
                <p className="mt-4" onClick={(e) => {
                    e.stopPropagation();
                    removeFromCart(product.id, product.selectedSize);
                }}
                >
                    REMOVE
                </p>
            </div>
        </div>
    )
}

export default ShoppingCartProduct;