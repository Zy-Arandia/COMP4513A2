import { useNavigate } from "react-router-dom";

const ProductHomeScreen = ({ product }) => {

    const navigate = useNavigate();

    const goToProductPage = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className="flex flex-row justify-between h-full cursor-pointer *:text-black " onClick={goToProductPage}>
            <div className="w-1/3">
                <div className="text-6xl font-bold">{product.name.toUpperCase()}</div>
                <div className="text-3xl w-2/3">{product.description}</div>
            </div>
            <div className="bg-red-200 grow">
                {/* img */}
                Img Placeholder
            </div>

        </div>
    )
}
export default ProductHomeScreen;