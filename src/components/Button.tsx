type ButtonProps = {
  name: string;
  bgColor?: string;
  onClick?: () => void;
};

const Button = ({ name, bgColor, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} w-[80%] text-white font-normal rounded-lg px-10 py-4 mb-3 cursor-pointer`}
    >
      {name}
    </button>
  );
};

export default Button;
