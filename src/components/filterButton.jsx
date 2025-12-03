import { useEffect, useRef, useState } from "react";
import { IoChevronUpOutline } from "react-icons/io5";

const filterButton = ({ label, children }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    // close when clicking outside
    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div ref={ref} className="relative">
            {/* Button */}
            <div
                onClick={() => setOpen(!open)}
                className="flex flex-row items-center text-lg border 
                           rounded-2xl px-4 py-1 gap-3 cursor-pointer bg-white"
            >
                {label}
                <IoChevronUpOutline
                    className={`transition-transform ${open ? "rotate-180" : ""}`}
                />
            </div>

            {/* Dropdown menu */}
            {open && (
                <div className="absolute mt-2 bg-white border rounded-xl shadow-lg p-4 z-50 min-w-[200px]">
                    {children}
                </div>
            )}
        </div>
    );
};

export default filterButton;