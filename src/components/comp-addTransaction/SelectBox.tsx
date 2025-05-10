type SelectProps = {
  options: string[];
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectBox = ({ options, value, onChange }: SelectProps) => {
  const defaultValue = value ?? options[0];
  return (
    <div className="relative inline-block w-full">
      <select
        className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[var(--border-primary)] focus:border-[var(--border-primary)]"
        value={defaultValue}
        onChange={onChange}
      >
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default SelectBox;
