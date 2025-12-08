import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useNavigate } from "react-router-dom";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const AdminPage = (props) => {
    const top10BySales = props.top10BySales ?? [];
    const top10ByProfit = props.top10ByProfit ?? [];
    const salesAndProfitByCategory = props.salesAndProfitByCategory ?? {};
    const salesByGender = props.salesByGender ?? { men: 0, women: 0 };
    const navigate = useNavigate();

    const goToProductPage = (product) => {
        navigate(`/product/${product.id}`);
    };

    const genderChartData = {
        labels: ["Men", "Women"],
        datasets: [
            {
                data: [salesByGender.men, salesByGender.women],
                backgroundColor: ["#4B79A1", "#E7717D"],
            },
        ],
    };

    const categoryLabels = Object.keys(salesAndProfitByCategory);
    const categorySales = categoryLabels.map(
        (cat) => salesAndProfitByCategory[cat].totalSales
    );

    const categoryChartData = {
        labels: categoryLabels,
        datasets: [
            {
                label: "Sales by Category",
                data: categorySales,
                backgroundColor: [
                    "#4B79A1",
                    "#E7717D",
                    "#C2CAD0",
                    "#A8E6CF",
                    "#FF8B94",
                    "#F8E9A1",
                    "#3A4750",
                ],
            },
        ],
    };

    return (
        <div className="p-12 pb-0 ">
            <h1 className="text-4xl font-bold ">Admin Dashboard</h1>
            {/* Content */}
            <div className="flex flex-row grow gap-3 wrap">
                {/* Left */}
                <div className="grow h-[800px] overflow-auto">
                    <div className="mb-12 grow">
                        <h2 className="text-2xl font-semibold mb-3">Top 10 Products by Sales</h2>
                        <table className="w-full text-left bg-white text-black border border-gray-700">
                            <thead>
                                <tr className="border-b border-gray-700 text-black">
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Gender</th>
                                    <th className="p-3">Category</th>
                                    <th className="p-3">Total Sales</th>
                                </tr>
                            </thead>
                            <tbody>
                                {top10BySales.map((item) => (
                                    <tr key={item.id} className="border-b border-gray-800 cursor-pointer hover:bg-gray-300" onClick={() => goToProductPage(item)}>
                                        <td className="p-3">{item.name}</td>
                                        <td className="p-3">{item.gender}</td>
                                        <td className="p-3">{item.category}</td>
                                        <td className="p-3">{item.sales.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mb-12 grow">
                        <h2 className="text-2xl font-semibold mb-3">Top 10 Products by Profit</h2>

                        <table className="w-full text-left bg-white border border-gray-700">
                            <thead>
                                <tr className="border-b border-gray-700">
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Category</th>
                                    <th className="p-3">Profit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {top10ByProfit.map((item) => {
                                    const profit = (item.price - item.cost) * item.sales.total;
                                    return (
                                        <tr key={item.id} className="border-b border-gray-800 cursor-pointer hover:bg-gray-300" onClick={() => goToProductPage(item)}>
                                            <td className="p-3">{item.name}</td>
                                            <td className="p-3">{item.category}</td>
                                            <td className="p-3">${profit.toLocaleString()}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className="mb-12 grow">
                        <h2 className="text-2xl font-semibold mb-3">Sales & Profit by Category</h2>

                        <table className="w-full text-left bg-white border border-gray-700">
                            <thead>
                                <tr className="border-b border-gray-700">
                                    <th className="p-3">Category</th>
                                    <th className="p-3">Total Sales</th>
                                    <th className="p-3">Total Profit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categoryLabels.map((cat) => (
                                    <tr key={cat} className="border-b border-gray-800">
                                        <td className="p-3 capitalize">{cat}</td>
                                        <td className="p-3">
                                            {salesAndProfitByCategory[cat].totalSales}
                                        </td>
                                        <td className="p-3">
                                            ${salesAndProfitByCategory[cat].totalProfit.toLocaleString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
                {/* Right */}
                <div className="w-1/3">
                    <div className="mb-12 flex grow flex-col justify-center items-center">
                        <h2 className="text-2xl font-semibold mb-3">Sales by Category</h2>
                        <div className="w-96">
                            <Pie data={categoryChartData} />
                        </div>
                    </div>

                    <div className="mb-12 flex grow flex-col justify-center items-center">
                        <h2 className="text-2xl font-semibold mb-3">Sales by Gender</h2>
                        <div className="w-64">
                            <Pie data={genderChartData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminPage;
