import QuantityInput from "./components/quantityInput";
import AddToCartButton from "./components/addToCartButton";
import { useState } from "react";
import { useLocation } from "react-router-dom";


const ProductPage = ({ addToCart }) => {
    // Add Bread Crumb
    // console.log(product);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const location = useLocation();
    const product = location.state?.product;

    if (!product) return <p>Product not found.</p>;

    const handleAdd = () => {
        addToCart({ ...product, selectedSize: selectedSize, quantity: quantity });
    };

    // const product = {
    //     id: "P001",
    //     name: "Silk Wrap Blouse",
    //     gender: "womens",
    //     category: "Tops",
    //     description:
    //         "Elegant wrap blouse crafted from luxurious silk with adjustable tie waist and feminine draping. Perfect for office or evening occasions.",
    //     price: 89.99,
    //     cost: 35,
    //     color: [
    //         { name: "Ivory", hex: "#FFFFF0" }
    //     ],
    //     sizes: ["XS", "S", "M", "L"],
    //     material: "100% Silk",
    //     sales: {
    //         domestic: 142,
    //         international: 38,
    //         total: 180
    //     }
    // };


    return (
        <div className="flex flex-col items-center w-screen pt-20">
            <div className="w-3/5 bg-green-200 h-fit">
                {/* Product Info */}
                <div className="flex flex-row gap-x-3 ">
                    {/* Image Placeholder */}
                    <div className="grid grid-cols-2 w-3/5 bg-blue-200 gap-2">
                        <div className="flex grow h-[400px] bg-amber-200">a</div>
                        <div className="flex grow h-[400px] bg-pink-100">b</div>
                        <div className="flex grow h-[400px] bg-purple-200">c</div>
                        <div className="flex grow h-[400px] bg-lime-200">d</div>
                    </div>
                    {/* Product Desc */}
                    <div className="flex grow bg-red-200 flex-col">
                        {/* Product Name */}
                        <h1 className="text-3xl">{product.name}</h1>
                        {/* Price */}
                        <p className="text-2xl">${product.price}</p>
                        {/* Description */}
                        <div className="max-w-[400px] flex wrap">
                            {product.description}
                        </div>
                        {/* Colour Options */}
                        <div className="flex flex-col">
                            <p>
                                <span className="font-bold">Colour:</span> {product.color[0].name}
                            </p>
                            <div>
                                {product.color.map((colorOption) => (
                                    <div
                                        key={colorOption.name}
                                        className="inline-block w-8 h-8 rounded-full border border-black mr-2"
                                        style={{ backgroundColor: colorOption.hex }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                        {/* Size Options */}
                        <div className="flex flex-col mt-4">
                            <p >
                                <span className="font-bold mb-2">Size:</span> {selectedSize}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {product.sizes.map((size) => {
                                    const isSelected = selectedSize === size;
                                    return (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={"w-10 h-10 flex items-center justify-center border rounded-md transition " +
                                                (isSelected ? "bg-black text-white border-black"
                                                    : "border-black hover:bg-black hover:text-white")}>
                                            {size}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                        {/* Add to Cart / Quantity */}
                        <div className="flex flex-row gap-x-3">
                            {/* Quantity */}
                            <div>
                                <QuantityInput max={10} value={1} setQuantity={setQuantity} />
                            </div>
                            {/* Add to Cart */}
                            <AddToCartButton onClick={handleAdd} disabled={!quantity} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;