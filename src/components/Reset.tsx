type ResetProps = {
  icon: React.ReactNode;
};

const Reset = ({ icon }: ResetProps) => {
  return (
    <>
      <button
        onClick={() => {
          localStorage.removeItem("transactions");
          window.location.reload();
        }}
        className={`text-white cursor-pointer !flex !justify-center items-center  px-1 py-1 !text-center bg-red-500 hover:bg-red-600 !hover:font-semibold shadow-3xl rounded-full !text-2xl !font-normal transition-colors duration-300`}
      >
        {icon}
      </button>
    </>
  );
};

export default Reset;
