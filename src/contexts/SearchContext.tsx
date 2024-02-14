import { ReactNode, createContext, useState } from 'react'

type SearchContextType = {
	search: string
	setSearch: (search: string) => void
}

const SearchContext = createContext<SearchContextType>({
	search: '',
	setSearch: () => {},
})

const SearchProvider = ({ children }: { children: ReactNode }) => {
	const [search, setSearch] = useState('')

	return (
		<SearchContext.Provider value={{ search, setSearch }}>
			{children}
		</SearchContext.Provider>
	)
}

export { SearchProvider, SearchContext }
