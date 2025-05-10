import { createContext, useState } from "react";

interface EditContextType {
  item: Transaction | null;
  setItem: React.Dispatch<React.SetStateAction<Transaction | null>>;
}

export const EditContext = createContext<EditContextType>({
  item: null,
  setItem: () => {},
});

interface Transaction {
  type: string;
  amount: string;
  description: string;
  category: string;
}

interface EditProviderProps {
  children: React.ReactNode;
}

export const EditProvider = ({ children }: EditProviderProps) => {
  const [item, setItem] = useState<Transaction | null>(null);

  return (
    <EditContext.Provider value={{ item, setItem }}>
      {children}
    </EditContext.Provider>
  );
};
