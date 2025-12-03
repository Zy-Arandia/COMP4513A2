const AddToCartButton = ({ onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full max-w-[200px] h-10 flex items-center justify-center border border-black font-bold tracking-wide bg-white hover:bg-gray-100 transition
                  ${disabled ? "opacity-50 cursor-not-allowed hover:bg-white" : ""}`}>
      ADD TO CART
    </button>
  );
};

export default AddToCartButton;
