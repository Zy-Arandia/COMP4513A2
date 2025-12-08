import { IoChevronUpOutline } from "react-icons/io5";
import { useState } from "react";
import FilterPill from "./filterButton.jsx";

const SortBar = ({ filters, setFilters, sort, setSort, filterOptions }) => {

    console.log("SORTBAR: Current filters:", filters);
    console.log("SORTBAR: Current sort:", sort);
    console.log("SORTBAR: Filter options:", filterOptions);


    const toggleFilter = (type, value) => {
        const updated = filters[type].includes(value)
            ? filters[type].filter((v) => v !== value)
            : [...filters[type], value];

        console.log(`SORTBAR: Updated ${type}:`, updated);

        setFilters(prev => ({
            ...prev,
            [type]: updated
        }));
    };

    const updateSort = (value) => {
        console.log("SORTBAR: Updated sort:", value);
        setSort(value);
    };

    // Sort options (static)
    const sortOptions = [
        { label: "Price: Low → High", value: "price_asc" },
        { label: "Price: High → Low", value: "price_desc" },
        { label: "Newest", value: "newest" }
    ];

    return (
        <div className="flex flex-row gap-x-10 sticky top-12 z-50 bg-gray-100 w-3/4 py-2">

            {/* Gender Filter */}
            <FilterPill label="Gender">
                <div className="flex flex-col gap-2">
                    {filterOptions.gender.map(option => (
                        <label key={option} className="flex gap-2">
                            <input
                                type="checkbox"
                                checked={filters.gender.includes(option)}
                                onChange={() => toggleFilter("gender", option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            </FilterPill>

            {/* Category Filter */}
            <FilterPill label="Category">
                <div className="flex flex-col gap-2">
                    {filterOptions.category.map(option => (
                        <label key={option} className="flex gap-2">
                            <input
                                type="checkbox"
                                checked={filters.category.includes(option)}
                                onChange={() => toggleFilter("category", option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            </FilterPill>

            {/* Size Filter */}
            <FilterPill label="Size">
                <div className="flex flex-col gap-2">
                    {filterOptions.size.map(option => (
                        <label key={option} className="flex gap-2">
                            <input
                                type="checkbox"
                                checked={filters.size.includes(option)}
                                onChange={() => toggleFilter("size", option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            </FilterPill>

            {/* Color Filter */}
            <FilterPill label="Color">
                <div className="flex flex-col gap-2">
                    {filterOptions.color.map(option => (
                        <label key={option} className="flex gap-2">
                            <input
                                type="checkbox"
                                checked={filters.color.includes(option)}
                                onChange={() => toggleFilter("color", option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            </FilterPill>

            {/* Sort Options */}
            <FilterPill label="Sort">
                <div className="flex flex-col gap-2">
                    {sortOptions.map(option => (
                        <label key={option.value} className="flex gap-2">
                            <input
                                type="radio"
                                name="sort"
                                checked={sort === option.value}
                                onChange={() => updateSort(option.value)}
                            />
                            {option.label}
                        </label>
                    ))}
                </div>
            </FilterPill>

        </div>
    );
};

export default SortBar;
