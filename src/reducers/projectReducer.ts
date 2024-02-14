import { Project } from '../types'

export type ProjectAction = {
	type: 'ADD_PROJECT' | 'REMOVE_PROJECT' | 'UPDATE_PROJECT'
	payload: Project
}

const initialState: Project[] = []
const projectReducer = (state: Project[], action: ProjectAction) => {
	switch (action.type) {
		case 'ADD_PROJECT':
			action.payload.id = (state[state.length - 1]?.id || 0) + 1
			return [...state, action.payload]
		case 'REMOVE_PROJECT':
			return state.filter((project) => project.id !== action.payload.id)
		case 'UPDATE_PROJECT':
			return state.map((project) => {
				if (project.id === action.payload.id) {
					return action.payload
				}
				return project
			})
		default:
			return state
	}
}

export { projectReducer, initialState }
