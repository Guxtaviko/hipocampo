import { FrownIcon } from 'lucide-react'
import { useState } from 'react'
import { ProjectModal } from '../../layouts'

export const NoProjects = () => {
	const [open, setOpen] = useState(false)

	return (
		<>
			<div className="mt-6 flex flex-col items-center justify-center gap-4">
				<FrownIcon size={64} className="text-slate-500" />
				<h1 className="text-3xl font-bold text-slate-500">
					You don't have any projects yet
				</h1>
				<p className="text-slate-600">
					Click the button below to create your first project
				</p>

				<button
					className="rounded-md bg-teal-500 px-4 py-2 text-white transition duration-200 hover:bg-teal-600"
					onClick={() => setOpen(true)}
				>
					Create project
				</button>
			</div>
			{open && <ProjectModal onClose={() => setOpen(false)} />}
		</>
	)
}
