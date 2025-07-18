const CustomButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <button
      className={`bg-primaryColor hover:bg-blue-900 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 ${className}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
