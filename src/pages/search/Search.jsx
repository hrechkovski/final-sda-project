import { useContext } from "react";
import { SearchWorkersContext } from "../context/SearchWorkersContext.jsx";

export const Search = () => {
  const { searchPhrase, setSearchPhrase } = useContext(SearchWorkersContext);

  return (
    <article>
      <input
        value={searchPhrase}
        onChange={(event) => {
          setSearchPhrase(event.target.value);
        }}
        type="text"
        placeholder="Search"
      />
      <button onClick={() => setSearchPhrase("")}>Reset</button>
    </article>
  );
};
