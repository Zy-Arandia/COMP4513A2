import { Link } from "react-router-dom";
const headerNav = () => { 
    return (
        <nav className="flex flex-row bg-red-200 w-3xl">
            <Link to="/" className="text-2xl button">Home</Link>
            <Link to="/women">Women</Link>
            <Link to="/men">Men</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

export default headerNav;