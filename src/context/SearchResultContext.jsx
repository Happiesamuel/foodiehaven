import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";
const Search = createContext();
function SearchResultContext({ children }) {
  const [searchData, setSearchData] = useState("");
  return (
    <Search.Provider value={{ searchData, setSearchData }}>
      {children}
    </Search.Provider>
  );
}
function useSearch() {
  const context = useContext(Search);
  if (context === undefined) throw new Error("wrong position!!!");
  return context;
}

SearchResultContext.propTypes = {
  children: PropTypes,
};
export { SearchResultContext, useSearch };
