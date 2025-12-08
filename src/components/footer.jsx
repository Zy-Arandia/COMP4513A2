const Footer = () => {
    return (
        <footer className="w-screen bg-white h-fit flex justify-center flex-row">
            <div className="w-3/4 flex flex-row justify-between">
                {/* Left: Site Name or Logo */}
                <div className="text-lg font-semibold tracking-wide">
                    Store Name
                </div>

                {/* Center: Links */}
                <div className="flex flex-col md:flex-row gap-4 text-sm text-black">
                    <a
                        href="https://github.com/Zy-Arandia/COMP4513A2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400"
                    >
                        GitHub Repository
                    </a>

                    {/* Example future links */}
                    <a className="hover:text-gray-400 transition cursor-pointer">
                        Privacy Policy
                    </a>
                    <a className="hover:text-gray-400 transition cursor-pointer">
                        Contact
                    </a>
                </div>

                <div className="text-sm text-black">
                    © 2025 Zy Arandia
                </div>
            </div>
        </footer>
    )
}

export default Footer;