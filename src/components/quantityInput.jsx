import React from "react";

const QuantityInput = ({ max = 10, value, onChange }) => {

  const update = (newQty) => {
    if (newQty < 1) newQty = 1;
    if (newQty > max) newQty = max;
    onChange(newQty); // parent controls state
  };

  return (
    <div className="flex w-fit border border-black select-none bg-white">

      {/* Minus */}
      <button
        onClick={() => update(value - 1)}
        className="w-10 h-10 flex items-center justify-center hover:bg-gray-300 text-xl"
      >
        -
      </button>

      {/* Quantity Display */}
      <div className="w-12 h-10 flex items-center justify-center text-lg bg-white">
        {value}
      </div>

      {/* Plus */}
      <button
        onClick={() => update(value + 1)}
        className="w-10 h-10 flex items-center justify-center hover:bg-gray-300 text-xl"
      >
        +
      </button>

    </div>
  );
};

export default QuantityInput;
