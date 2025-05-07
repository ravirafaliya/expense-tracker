import InputBox from "./InputBox";

type DescriptionProps = {
  description: string;
  setDescription: (value: string) => void;
};

const Description = ({ description, setDescription }: DescriptionProps) => {
  return (
    <div>
      <InputBox
        placeholder="Add description..."
        value={description}
        type="string"
        css="font-normal appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-xl text-center mb-3 py-5 focus:outline-none"
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
};

export default Description;
