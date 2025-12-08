import { useState, useEffect } from "react";

export function useProducts(url) {
  const [productState, setProductState] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    gender: [],
    category: [],
    size: [],
    color: [],
  });

  async function getProducts() {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Response status: ${response.status}`);
      const result = await response.json();

      setProductState(result);
      buildFilterOptions(result);
    } catch (err) {
      console.error(err);
    }
  }

  function buildFilterOptions(products) {
    const genders = new Set();
    const categories = new Set();
    const sizes = new Set();
    const colors = new Set();

    products.forEach((p) => {
      if (p.gender) genders.add(p.gender);
      if (p.category) categories.add(p.category);
      p.sizes?.forEach(size => sizes.add(size));
      p.color?.forEach(c => colors.add(c.name));
    });

    setFilterOptions({
      gender: [...genders],
      category: [...categories],
      size: [...sizes],
      color: [...colors],
    });
  }

  useEffect(() => { getProducts(); }, []);

  return { productState, filterOptions };
}

export default useProducts;