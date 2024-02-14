import { ReactNode } from 'react'
import {
	ThemeProvider,
	RecentIconsProvider,
	ProjectsProvider,
	SearchProvider,
} from '.'

export const AppProvider = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider>
			<RecentIconsProvider>
				<SearchProvider>
					<ProjectsProvider>{children}</ProjectsProvider>
				</SearchProvider>
			</RecentIconsProvider>
		</ThemeProvider>
	)
}
