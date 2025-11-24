import { Link } from "react-router-dom";
const headerNav = () => {
    const navPages = [
        {
            "category": "HOME",
            "link": "/"
        },
        {
            "category": "MEN",
            "link": "/men"
        },
        {
            "category": "WOMEN",
            "link": "/women"
        },
        {
            "category": "ABOUT",
            "link": "/about"
        }
    ]

    return (
        <nav className="flex grow flex-row justify-around items-center h-full">
            {navPages.map((page) => (
                <Link
                    key={page.category}
                    to={page.link}
                    className="
                    h-full
                    flex items-center justify-center 
                    p-2
                    text-lg 
                    border border-transparent border-b-2 hover:border-b-black"
                >
                    {page.category}
                </Link>
            ))}
        </nav>
    )
}
export default headerNav;