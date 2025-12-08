import { useState, useEffect } from "react";

export function useFilters(productState) {
  const [filters, setFilters] = useState({
    gender: [],
    category: [],
    size: [],
    color: [],
  });

  const [sort, setSort] = useState("none");
  const [filteredProducts, setFilteredProducts] = useState([]);

  function applyFilters() {
    let result = [...productState];

    if (filters.gender.length)
      result = result.filter(p => filters.gender.includes(p.gender));

    if (filters.category.length)
      result = result.filter(p => filters.category.includes(p.category));

    if (filters.size.length)
      result = result.filter(p => p.sizes.some(size => filters.size.includes(size)));

    if (filters.color.length)
      result = result.filter(p => p.color.some(c => filters.color.includes(c.name)));

    if (sort === "price_asc") result.sort((a, b) => a.price - b.price);
    if (sort === "price_desc") result.sort((a, b) => b.price - a.price);
    if (sort === "newest") result.sort((a, b) => new Date(b.date) - new Date(a.date));

    setFilteredProducts(result);
  }

  useEffect(() => { applyFilters(); }, [productState, filters, sort]);

  return { filteredProducts, filterState: filters, setFilters, sort, setSort };
}

export default useFilters;