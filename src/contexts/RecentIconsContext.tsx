import { createContext, useEffect, useState } from 'react'
import { LucideIcon, icons } from 'lucide-react'
import { useLocalStorage } from '../hooks'

type RecentIconsContextType = {
	recentIcons: LucideIcon[]
	addIcon: (icon: LucideIcon) => void
}

const RecentIconsContext = createContext<RecentIconsContextType>({
	recentIcons: [],
	addIcon: () => {},
})

const RecentIconsProvider = ({ children }: { children: React.ReactNode }) => {
	const [storedRecentIcons, setStoredRecentIcons] = useLocalStorage<
		(keyof typeof icons)[]
	>('recentIcons', [])

	const [recentIcons, setRecentIcons] = useState(
		storedRecentIcons.map((icon) => icons[icon]),
	)

	const addIcon = (icon: LucideIcon) => {
		const newIcon = icon.displayName
		const icons = recentIcons.map((i) => i.displayName)

		if (!icons.includes(newIcon)) return setRecentIcons([icon, ...recentIcons])

		setRecentIcons((prev) => [
			icon,
			...prev.filter((i) => i.displayName !== newIcon),
		])
	}

	useEffect(() => {
		if (recentIcons.length > 9) {
			setRecentIcons(recentIcons.slice(0, 9))
		}
	}, [recentIcons, setRecentIcons])

	useEffect(() => {
		if (
			storedRecentIcons.every((icon) =>
				Object.values(recentIcons).some(
					(recentIcon) => recentIcon.displayName === icon,
				),
			)
		)
			return

		setStoredRecentIcons(
			recentIcons.map((icon) => icon.displayName as keyof typeof icons),
		)
	}, [recentIcons, setStoredRecentIcons, storedRecentIcons])

	return (
		<RecentIconsContext.Provider value={{ recentIcons, addIcon }}>
			{children}
		</RecentIconsContext.Provider>
	)
}

export { RecentIconsContext, RecentIconsProvider }
