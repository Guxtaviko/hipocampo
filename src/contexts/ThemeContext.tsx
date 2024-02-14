import { createContext, useEffect } from 'react'
import { useLocalStorage } from '../hooks'

export type Themes = 'light' | 'dark'

type ThemeContextType = {
	theme: Themes
	toggleTheme: (theme: Themes) => void
}

const ThemeContext = createContext<ThemeContextType>({
	theme: 'light',
	toggleTheme: () => {},
})

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

	const storedTheme = localStorage.getItem('theme') as Themes | null
	const initialTheme = storedTheme || (isDark ? 'dark' : 'light')

	const [theme, setTheme] = useLocalStorage<Themes>('theme', initialTheme)

	useEffect(() => {
		document.getElementById('root')!.classList.toggle('dark', theme === 'dark')
	}, [theme])

	const toggleTheme = (theme: Themes) => {
		setTheme(theme)
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export { ThemeProvider, ThemeContext }
