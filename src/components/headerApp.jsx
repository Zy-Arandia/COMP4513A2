import HeaderNav from "./headerNav";

const headerApp = () => {
    return (
        <div className="flex flex-row w-screen justify-center h-12 fixed top-0 left-0 z-50 bg-white">
            <div className="flex grow flex-row max-w-[1200px] justify-between">
                {/* Logo */}
                <div className="flex grow items-center ">
                    <p>logo</p>
                </div>
                {/* Header Nav */}
                <div className="flex justify-center items-center grow">
                    <HeaderNav />
                </div>
                {/* Filler */}
                <div className="flex grow items-center ">


                </div>
            </div>
        </div>
    )
}

export default headerApp;