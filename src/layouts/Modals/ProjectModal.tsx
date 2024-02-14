import { Modal, ModalProps } from './Modal'
import { IconSelection } from '../Dialogs/IconSelection'
import { LucideIcon, SmileIcon, icons } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Editor } from '../../components'
import { Project } from '../../types'
import { useProjects } from '../../hooks'

interface ProjectModalProps extends ModalProps {
	project?: Project
}

export const ProjectModal = ({ onClose, project }: ProjectModalProps) => {
	const { dispatch } = useProjects()
	const [title, setTitle] = useState(project?.title)
	const [description, setDescription] = useState(project?.description)
	const [Icon, setIcon] = useState<LucideIcon>(() =>
		project?.icon ? icons[project.icon] : SmileIcon,
	)

	const id = project?.id
	const projectRef = useRef(project)

	useEffect(() => {
		projectRef.current = {
			id: id ?? 0,
			title: title ?? '',
			description: description ?? '',
			icon: Icon.displayName as keyof typeof icons,
		}
	}, [id, title, description, Icon])

	useEffect(() => {
		return () => {
			if (!projectRef.current) return

			const type = project ? 'UPDATE_PROJECT' : 'ADD_PROJECT'

			if (
				projectRef.current.description === '' &&
				projectRef.current.title === ''
			)
				return

			dispatch({
				type,
				payload: projectRef.current,
			})
		}
	}, [dispatch, project])

	const handleDescriptionChange = (content: string) => {
		setDescription(content)
	}

	return (
		<Modal onClose={onClose}>
			<div className="mx-auto flex h-full w-2/3 flex-col py-24">
				<IconSelection onIconChange={setIcon}>
					<Icon size={48} />
				</IconSelection>
				<input
					value={title ?? ''}
					placeholder="Title"
					onChange={(e) => setTitle(e.target.value)}
					className="my-4 w-full bg-transparent text-[2.75rem] font-bold focus:outline-none dark:placeholder:text-slate-700"
				/>
				<hr className="h-px border-none bg-slate-300 dark:bg-slate-600" />
				<Editor
					className="mt-4 max-h-full w-full flex-1 overflow-y-auto text-lg"
					content={description}
					onContentChange={handleDescriptionChange}
				/>
			</div>
		</Modal>
	)
}
