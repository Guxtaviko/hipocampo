import { useContext } from 'react'
import { RecentIconsContext } from '../contexts'

export function useRecentIcons() {
	const context = useContext(RecentIconsContext)

	if (!context) {
		throw new Error('useRecentIcons must be used within a RecentIconsProvider')
	}

	return context
}
