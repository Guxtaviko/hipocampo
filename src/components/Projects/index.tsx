import { useProjects, useSearch } from '../../hooks'
import { ListProject } from './ListProject'
import { NoProjects } from './NoProjects'

export const Projects = () => {
	const { search } = useSearch()
	const { projects } = useProjects()

	const filteredProjects = projects.filter((project) =>
		project.title.toLowerCase().includes(search.toLowerCase()),
	)

	return (
		<>
			{projects.length === 0 && <NoProjects />}
			<div className="flex flex-col gap-2">
				{filteredProjects.length === 0 && projects.length > 0 && (
					<p className="text-center text-slate-500">
						No projects found with the name <strong>{search}</strong>
					</p>
				)}
				{filteredProjects.map((project) => (
					<ListProject key={`project-${project.id}`} project={project} />
				))}
			</div>
		</>
	)
}
