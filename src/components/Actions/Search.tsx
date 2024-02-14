import { SearchIcon } from 'lucide-react'
import { useSearch } from '../../hooks'

export const Search = () => {
	const { search, setSearch } = useSearch()

	return (
		<div className="searchbox">
			<SearchIcon strokeWidth={1.5} className="text-slate-400" />
			<input
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className="searchbox-input"
				type="text"
				placeholder="Project name"
			/>
			<button className="searchbox-btn">Search</button>
		</div>
	)
}
