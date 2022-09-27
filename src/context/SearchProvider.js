import { useContext } from "react";
import { createContext, useState } from "react"





const SearchContext = createContext()
const SearchContextDispatcher = createContext()

const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    return (
        <SearchContext.Provider value={search}>
            <SearchContextDispatcher.Provider value={setSearch}>
                {children}
            </SearchContextDispatcher.Provider>
        </SearchContext.Provider>
    )
}

// hooks

export const useSearch = () => useContext(SearchContext)
export const useSearchDispatcher = () => useContext(SearchContextDispatcher)

export default SearchProvider;