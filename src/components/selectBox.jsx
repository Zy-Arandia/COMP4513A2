import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import clsx from "clsx";
import { IoIosArrowDown } from "react-icons/io";

{/* https://headlessui.com/react/listbox */ }

const SelectBox = ({ label, value, onChange, options }) => {
    return (
        <div className="w-full mt-3">
            {label && <p className="mb-1 text-sm font-medium">{label}</p>}

            <Listbox value={value} onChange={onChange}>
                <div className="relative">
                    <ListboxButton
                        className={clsx(
                            "relative block w-full rounded-lg bg-black text-white py-2 pr-10 pl-3 text-left",
                            "cursor-pointer border border-gray-600"
                        )}
                    >
                        {value}
                        <IoIosArrowDown
                            className="absolute right-3 top-2.5 text-white pointer-events-none"
                        />
                    </ListboxButton>

                    <ListboxOptions
                        className="absolute mt-1 w-full rounded-lg bg-black border border-gray-600 shadow-lg z-10"
                    >
                        {options.map((option) => (
                            <ListboxOption
                                key={option}
                                value={option}
                                className={({ active, selected }) =>
                                    clsx(
                                        "cursor-pointer select-none py-2 pl-4 pr-4",
                                        active && "bg-gray-700",
                                        selected && "font-semibold text-white"
                                    )
                                }
                            >
                                {({ selected }) => (
                                    <span className={selected ? "text-white" : "text-gray-300"}>
                                        {option}
                                    </span>
                                )}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </Listbox>
        </div>
    );
};

export default SelectBox;
