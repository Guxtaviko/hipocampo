import {
	Dispatch,
	ReactNode,
	createContext,
	useEffect,
	useReducer,
} from 'react'
import { Project } from '../types'
import { ProjectAction, initialState, projectReducer } from '../reducers'
import { useLocalStorage } from '../hooks'

type ProjectsContextType = {
	projects: Project[]
	dispatch: Dispatch<ProjectAction>
}

const ProjectsContext = createContext<ProjectsContextType>({
	projects: initialState,
	dispatch: () => null,
})

const ProjectsProvider = ({ children }: { children: ReactNode }) => {
	const [storedProjects, setStoredProjects] = useLocalStorage<Project[]>(
		'projects',
		initialState,
	)
	const [projects, dispatch] = useReducer(projectReducer, storedProjects)

	useEffect(() => {
		setStoredProjects(projects)
	}, [projects, setStoredProjects])

	return (
		<ProjectsContext.Provider value={{ projects, dispatch }}>
			{children}
		</ProjectsContext.Provider>
	)
}

export { ProjectsProvider, ProjectsContext }
