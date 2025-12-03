import ProductCard from "./components/productCard.jsx";
import ShoppingPageTop from "./components/shoppingPageTop.jsx";
import SortBar from "./components/sortBar.jsx";
import { useEffect } from "react";

const ShoppingPage = (props) => {
    const {
        products,
        filters,
        setFilters,
        sort,
        setSort,
        addToCart,
        filterOptions,
        genderRoute,
    } = props;

    // NEED TO ADD BREADCRUMBS

    console.log("SHOPPING PAGE: Received filters:", filters);
    console.log("SHOPPING PAGE: Received sort:", sort);
    console.log("SHOPPING PAGE: Products to render:", products);

    useEffect(() => {
        if (!genderRoute) return; // normal /

        // Only update if gender is not already selected
        setFilters(prev => ({
            ...prev,
            gender: [genderRoute]     // force gender = "mens" or "womens"
        }));

        console.log("SHOPPING PAGE: Applied gender from route:", genderRoute);
    }, [genderRoute]);

    if (products.length === 0) {
        return (
            <div className="h-screen flex flex-col items-center">
                <ShoppingPageTop genderRoute={genderRoute} />
                <SortBar
                    filters={filters}
                    setFilters={setFilters}
                    sort={sort}
                    setSort={setSort}
                    filterOptions={filterOptions}
                />
                <div className="flex flex-col grow justify-center items-center">
                    <h1 className="text-2xl">NO PRODUCTS FOUND</h1>
                    <h1 className="text-1xl">BROADEN YOUR FILTER</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="w-screen flex flex-col justify-center items-center ">
            {/* Shopping page img */}
            <ShoppingPageTop genderRoute={genderRoute} />
            {/* Sort Bar */}
            <SortBar
                filters={filters}
                setFilters={setFilters}
                sort={sort}
                setSort={setSort}
                filterOptions={filterOptions}
            />
            {/* Product list */}
            <div
                className="
                    grid gap-1 pt-12 
                    w-3/4 mx-auto 
                    grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                    justify-items-center
                "
            >
                {products.map((product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        />
                    );
                })}
            </div>

        </div>
    );
};

export default ShoppingPage;
