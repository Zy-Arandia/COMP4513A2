const ProductCard = (props) => {

    const minSize = props.product.sizes[0];
    const maxSize = props.product.sizes[props.product.sizes.length - 1];


    return (
        <div className="flex flex-col w-full bg-white h-fit min-h-[450px] cursor-pointer
                        transition-transform duration-200 ease-out
                        hover:scale-105 hover:shadow-lg">
            {/* Product Image */}
            {/* <img src="" alt="" className=""/> */}
            <div className="w-full bg-blue-200 h-[300px] lg:h-[400px]"></div>
            <div className="p-2">
                {/* Colour Options */}
                <div>
                    {props.product.color.map((colorOption) => (
                        <div
                            key={colorOption.name}
                            className="inline-block w-5 h-5 rounded-full border border-black mr-2"
                            style={{ backgroundColor: colorOption.hex }}
                        ></div>
                    ))}
                </div>
                {/* Gender / Size Range */}
                <div>
                    <p className="text-[14px]">{props.product.gender.toUpperCase()} {minSize} - {maxSize}</p>
                </div>
                {/* Product Name */}
                <div className="" >
                    <p className="text-[18px]">{props.product.name}</p>
                </div>
                {/* Price */}
                <div>
                    <p>${props.product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;