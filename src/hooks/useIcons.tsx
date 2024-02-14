import { useEffect, useState } from 'react'
import { LucideIcon, icons as lucideIcons } from 'lucide-react'

const libIcons = Object.values(lucideIcons)

export function useIcons(page: number = 1, limit: number = 36) {
	const [search, setSearch] = useState('')
	const [icons, setIcons] = useState<LucideIcon[]>([])
	const [hasMore, setHasMore] = useState(true)

	useEffect(() => {
		setIcons(libIcons.slice(0, limit))
	}, [limit])

	useEffect(() => {
		setHasMore(libIcons.length > page * limit)
	}, [page, limit])

	useEffect(() => {
		setIcons(
			libIcons
				.filter((icon) =>
					icon.displayName?.toLowerCase().includes(search.toLowerCase()),
				)
				.slice(0, limit * page),
		)
	}, [search, limit, page])

	return { search, setSearch, icons, hasMore }
}
