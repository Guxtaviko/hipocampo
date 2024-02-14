import { MoreVerticalIcon as MoreIcon, icons } from 'lucide-react'
import { Project } from '../../types'
import { MouseEvent, useEffect, useState } from 'react'
import { IconSelection } from '../../layouts/Dialogs/IconSelection'
import { ItemActions } from '../../layouts/Dialogs/ItemActions'
import { ProjectModal } from '../../layouts'
import { useProjects } from '../../hooks'

interface ListProjectProps {
	project: Project
}

export const ListProject = ({ project }: ListProjectProps) => {
	const { dispatch } = useProjects()

	const [Icon, setIcon] = useState(() => icons[project.icon])
	const [isDialogOpen, setIsDialogOpen] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)

	useEffect(() => {
		dispatch({
			type: 'UPDATE_PROJECT',
			payload: {
				...project,
				icon: Icon.displayName as keyof typeof icons,
			},
		})
	}, [Icon, dispatch, project])

	const toggleDialog = () => setIsDialogOpen(!isDialogOpen)
	const toggleModal = (e: MouseEvent) => {
		const target = e.target as HTMLElement

		if (target instanceof HTMLButtonElement || target instanceof SVGElement)
			return
		if (target.closest('.dialog')) return

		setIsModalOpen(!isModalOpen)
	}

	const handleDelete = () => {
		dispatch({
			type: 'REMOVE_PROJECT',
			payload: project,
		})
	}

	return (
		<>
			<div
				className="flex cursor-pointer items-center gap-6 rounded-md border border-slate-300 px-4 py-3 hover:bg-slate-200 dark:border-slate-600 hover:dark:bg-slate-700"
				onClick={toggleModal}
			>
				<div className="rounded hover:bg-slate-100 hover:dark:bg-slate-800">
					<IconSelection onIconChange={setIcon} buttonClassName="p-2">
						<Icon strokeWidth={1.5} />
					</IconSelection>
				</div>
				<div>
					<h3 className="font-bold">{project.title}</h3>
					<p
						className="line-clamp-1 text-xs"
						dangerouslySetInnerHTML={{
							__html: project.description,
						}}
					></p>
				</div>
				<button
					className="item-actions relative ml-auto rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-200"
					onClick={toggleDialog}
				>
					<MoreIcon strokeWidth={1.5} />
					{isDialogOpen && (
						<ItemActions onClose={toggleDialog} onDelete={handleDelete} />
					)}
				</button>
			</div>
			{isModalOpen && (
				<ProjectModal onClose={() => setIsModalOpen(false)} project={project} />
			)}
		</>
	)
}
