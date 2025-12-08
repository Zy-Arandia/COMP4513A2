import { IoIosCart } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const goToProductPage = () => {
        navigate(`/product/${product.id}`);
    };

    const minSize = product.sizes[0];
    const maxSize = product.sizes[product.sizes.length - 1];

    return (
        <div 
            className="flex flex-col w-full bg-white h-fit min-h-[450px] cursor-pointer hover:shadow-lg"
            onClick={goToProductPage}
        >
            {/* Image Placeholder */}
            <div className="w-full bg-blue-200 h-[300px] lg:h-[400px]"></div>

            <div className="p-2">
                {/* Colour Options */}
                <div>
                    {product.color.map((colorOption) => (
                        <div
                            key={colorOption.name}
                            className="inline-block w-5 h-5 rounded-full border border-black mr-2"
                            style={{ backgroundColor: colorOption.hex }}
                        ></div>
                    ))}
                </div>

                {/* Gender / Size Range */}
                <div>
                    <p className="text-[14px]">{product.gender.toUpperCase()} {minSize} - {maxSize}</p>
                </div>

                {/* Product Name */}
                <p className="text-[18px]">{product.name}</p>

                {/* Price + Cart Icon */}
                <div className="flex justify-between items-center">
                    <p>${product.price}</p>
                    <div 
                        className="hover:scale-110"
                        onClick={(e) => {
                            e.stopPropagation();   // prevents navigation
                            console.log("Add to cart icon clicked");
                        }}
                    >
                        <IoIosCart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
