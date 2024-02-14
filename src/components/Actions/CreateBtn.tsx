import { PlusSquare as AddIcon } from 'lucide-react'
import { useState } from 'react'
import { ProjectModal } from '../../layouts'

export const CreateBtn = () => {
	const [open, setOpen] = useState(false)

	const toggle = () => {
		setOpen(!open)
	}

	return (
		<>
			<button className="action-btn" onClick={toggle}>
				<AddIcon strokeWidth={1.5} />
			</button>
			{open && <ProjectModal onClose={() => setOpen(false)} />}
		</>
	)
}
