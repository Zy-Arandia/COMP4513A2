import QuantityInput from "./components/quantityInput";
import AddToCartButton from "./components/addToCartButton";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./components/productCard";



const ProductPage = ({ addToCart, productState, isLoggedIn }) => {
    // Add Bread Crumb
    // console.log(product);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const { id } = useParams();
    const product = productState.find((item) => item.id === id);

    const domesticGross = product ? product.sales.domestic * product.price : 0;
    const internationalGross = product ? product.sales.international * product.price : 0;
    const totalGross = domesticGross + internationalGross;

    const domesticCost = product ? product.sales.domestic * product.cost : 0;
    const internationalCost = product ? product.sales.international * product.cost : 0;
    const totalCost = domesticCost + internationalCost;

    if (!product) return <p>Product not found.</p>;

    const handleAdd = () => {
        if (!selectedSize) {
            alert("Please select a size before adding to cart.");
            return;
        }

        addToCart({
            ...product,
            selectedSize,
            quantity
        });
    };



    return (
        <div className="flex flex-col items-center w-screen pt-12">
            <div className="w-3/4 h-fit">
            {/* Bread Crumb */}
            <p className="text-lg mb-3">HOME > {product.gender.toUpperCase()} > {product.category.toUpperCase()} > {product.name.toUpperCase()}</p>
                {/* Product Info */}
                <div className="flex flex-row gap-x-3 ">
                    {/* Image Placeholder */}
                    <div className="grid grid-cols-2 w-3/5 gap-2">
                        <div className="flex grow h-[400px] bg-amber-200">a</div>
                        <div className="flex grow h-[400px] bg-pink-100">b</div>
                        <div className="flex grow h-[400px] bg-purple-200">c</div>
                        <div className="flex grow h-[400px] bg-lime-200">d</div>
                    </div>
                    {/* Product Desc */}
                    <div className="flex grow flex-col gap-y-5">
                        {/* Product Name */}
                        <span className="flex items-center justify-between">
                            <h1 className="text-3xl">{product.name}</h1>
                            {!isLoggedIn ? (<span />) : (<Popover><PopoverButton><IoIosMenu className="scale-150 cursor-pointer" /></PopoverButton>
                                <PopoverPanel
                                    transition
                                    anchor="bottom"
                                    className="bg-white border border-black divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
                                >
                                    <div className="flex flex-col bg-white p-4">
                                        <h1 className="text-bold text-2xl">Sales</h1>
                                        <div className="grid grid-cols-3 gap-x-5 gap-y-1">
                                            <h1>Domestic</h1>
                                            <h1>International</h1>
                                            <h1>Total</h1>
                                            <p>Sales: {product.sales.domestic}</p>
                                            <p>Sales: {product.sales.international}</p>
                                            <p>Sales: {product.sales.total}</p>
                                            <p>Gross: {domesticGross}</p>
                                            <p>Gross: {internationalGross}</p>
                                            <p>Gross: {totalGross}</p>
                                            <p>Cost: {domesticCost}</p>
                                            <p>Cost: {internationalCost}</p>
                                            <p>Cost: {totalCost}</p>
                                        </div>
                                    </div>
                                </PopoverPanel>
                            </Popover>)}

                        </span>
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
                            {!selectedSize && (
                                <p className="text-red-600 text-sm">Please select a size.</p>
                            )}

                        </div>
                        {/* Add to Cart / Quantity */}
                        <div className="flex flex-row gap-x-3">
                            {/* Quantity */}
                            <div>
                                <QuantityInput
                                    max={10}
                                    value={quantity}
                                    onChange={setQuantity}
                                />

                            </div>
                            {/* Add to Cart */}
                            <AddToCartButton
                                onClick={handleAdd}
                                disabled={!quantity}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;