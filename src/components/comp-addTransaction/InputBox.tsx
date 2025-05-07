type InputProps = {
  placeholder?: string;
  value: string;
  type: string;
  css: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputBox = ({ placeholder, value, type, css, onChange }: InputProps) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={css}
      />
    </>
  );
};

export default InputBox;
