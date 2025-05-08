type SelectProps = {
  options: string[];
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectBox = ({ options, value, onChange }: SelectProps) => {
  const defaultValue = value ?? options[0];
  return (
    <select
      className="flex border-2 text-center text-xl capitalize border-[var(--border-primary)] rounded-md px-3 py-2 focus:border-2 focus:border-[var(--accent-primary-border)] "
      value={defaultValue}
      onChange={onChange}
    >
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
