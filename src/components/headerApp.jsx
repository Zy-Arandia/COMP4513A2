import { IoIosCart } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import HeaderNav from "./headerNav";

const HeaderApp = ({ shoppingCartState, isLoggedIn, setIsLoggedIn }) => {

    const itemCount = shoppingCartState?.length || 0;
    const navigate = useNavigate();
    const handleLogout = () => {
        setIsLoggedIn(false);
        console.log("User logged out");
    }

    return (
        <div className="flex flex-row w-screen justify-center h-12 fixed top-0 left-0 z-50 bg-white px-10">
            <div className="flex grow flex-row max-w-[1100px] justify-between">
                {/* Logo */}
                <div className="flex grow items-center ">
                    <p>logo</p>
                </div>
                {/* Header Nav */}
                <div className="flex justify-center items-center grow">
                    <HeaderNav isLoggedIn={isLoggedIn}/>
                </div>
                {/* Login / Cart */}
                <div className="flex grow items-center justify-end gap-x-8 h-full">
                    {!isLoggedIn ? (
                        <Link to="/login" className="
                        h-full flex items-center 
                        text-lg 
                        border border-transparent border-b-2 hover:border-b-black">
                            LOGIN
                        </Link>)
                        : (
                            <button
                                onClick={() => { handleLogout(); navigate('/'); }}
                                className="h-full flex items-center text-lg border border-transparent border-b-2 hover:border-b-black"
                            >
                                LOGOUT
                            </button>
                        )}

                    <Link to="/cart" className="relative cursor-pointer">
                        <IoIosCart className="text-3xl" />

                        {itemCount > 0 && (
                            <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                {itemCount}
                            </div>
                        )}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeaderApp;