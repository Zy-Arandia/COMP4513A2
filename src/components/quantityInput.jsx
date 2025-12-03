import { useState } from "react";

const QuantityInput = ({ max = 10, value = 1, onChange }) => {
  const [qty, setQty] = useState(value);

  const update = (newQty) => {
    if (newQty < 1) newQty = 1;
    if (newQty > max) newQty = max;
    setQty(newQty);
    onChange(newQty);
  };

  return (
    <div className="flex w-fit border border-black rounded-md select-none bg-white">

      {/* Minus */}
      <button onClick={() => update(qty - 1)} className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-300 text-xl">
        -
      </button>

      {/* Quantity Display */}
      <div className="w-12 h-10 flex items-center justify-center text-lg bg-white">
        {qty}
      </div>

      {/* Plus */}
      <button onClick={() => update(qty + 1)} className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-300 text-xl">
        +
      </button>

    </div>
  );
};

export default QuantityInput;
