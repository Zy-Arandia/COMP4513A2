import { useState, useEffect } from "react";

export function useProducts(url) {
  const [productState, setProductState] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    gender: [],
    category: [],
    size: [],
    color: [],
  });

  const [top10BySales, setTop10BySales] = useState([]);
  const [top10ByProfit, setTop10ByProfit] = useState([]);
  const [salesAndProfitByCategory, setSalesAndProfitByCategory] = useState({});
  const [salesByGender, setSalesByGender] = useState({ men: 0, women: 0 });

  async function getProducts() {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Response status: ${response.status}`);
      const result = await response.json();

      setProductState(result);
      buildFilterOptions(result);
      setTop10BySales(getTop10bySales(result));
      setTop10ByProfit(getTop10byProfit(result))
      setSalesAndProfitByCategory(getSalesAndProfitByCategory(result));
      setSalesByGender(getSalesByGender(result)); 
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

  function getTop10bySales(products) {
    return [...products]
      .sort((a, b) => b.sales.total - a.sales.total)
      .slice(0, 10);
  }

function getTop10byProfit(products) {
  return [...products]
    .sort((a, b) => {
      const profitA = (a.price - a.cost) * a.sales.total;
      const profitB = (b.price - b.cost) * b.sales.total;
      return profitB - profitA;
    })
    .slice(0, 10);
}

  function getSalesAndProfitByCategory(products) {
    return products.reduce((result, product) => {
      const category = product.category;
      const unitsSold = product.sales?.total || 0;
      const profit = (product.price - product.cost) * unitsSold;

      if (!result[category]) {
        result[category] = { totalSales: 0, totalProfit: 0 };
      }

      result[category].totalSales += unitsSold;
      result[category].totalProfit += profit;

      return result;
    }, {});
  }

  function getSalesByGender(products) {
    let men = 0;
    let women = 0;

    products.forEach(p => {
      if (p.gender === "mens") {
        men += p.sales.total;
      } else if (p.gender === "womens") {
        women += p.sales.total;
      }
    });

    return { men, women };
  }




  useEffect(() => { getProducts(); }, []);

  return {
    productState,
    filterOptions,
    top10BySales,
    top10ByProfit,
    salesAndProfitByCategory,
    salesByGender
  };
}

export default useProducts;
