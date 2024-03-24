import { createContext, useState } from "react";

export const SearchWorkersContext = createContext({
  searchPhrase: "",
  setSearchPhrase: () => {},
});

export const SearchWorkersContextProvider = ({ children }) => {
  const [searchPhrase, setSearchPhrase] = useState("");

  return (
    <SearchWorkersContext.Provider
      value={{
        searchPhrase,
        setSearchPhrase,
      }}
    >
      {children}
    </SearchWorkersContext.Provider>
  );
};
