const ShoppingPageTop = ({genderRoute}) => {

    return (
        <div className="w-3/4 flex flex-col justify-center pt-12">
            {/* Img placeholder */}
            <h1 className="flex items-end text-5xl font-bold text-white relative p-5 h-[200px] bg-green-200 w-full">{genderRoute.toUpperCase()}</h1>
        </div>
    )
}

export default ShoppingPageTop;