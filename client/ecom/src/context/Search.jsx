import { useState, useContext, createContext, useEffect } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState({
    keyword: "",
    result: [],
  });

  // Load search data from localStorage (if any)
  useEffect(() => {
    const savedSearch = localStorage.getItem("search");
    if (savedSearch) {
      setSearch(JSON.parse(savedSearch));
    }
  }, []);

  // Save search data to localStorage whenever it changes
  useEffect(() => {
    if (search.keyword || search.result.length > 0) {
      localStorage.setItem("search", JSON.stringify(search));
    }
  }, [search]);

  return (
    <SearchContext.Provider value={[search, setSearch]}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook for accessing search context
const useSearch = () => useContext(SearchContext);

export { useSearch, SearchProvider };
