import { PencilIcon, TrashIcon } from 'lucide-react'
import { Dialog, DialogProps } from './Dialog'

interface ItemActionsProps extends DialogProps {
	onDelete: () => void
}

export const ItemActions = ({ onClose, onDelete }: ItemActionsProps) => {
	return (
		<div>
			<Dialog
				className="p-0"
				onClose={onClose}
				container=".item-actions"
				closeOnLeave
			>
				<div className="flex flex-col divide-y divide-slate-200 dark:divide-slate-700">
					{/* <button className="flex w-full items-center gap-4 px-4 py-3 text-sm font-medium leading-none text-slate-600 hover:bg-slate-300 hover:text-slate-800 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200">
						<PencilIcon strokeWidth={1.5} size={18} />
						Edit
					</button> */}
					<button
						onClick={onDelete}
						className="flex w-full items-center gap-4 px-4 py-3 text-sm font-medium leading-none text-slate-600 hover:bg-slate-300 hover:text-slate-800 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
					>
						<TrashIcon strokeWidth={1.5} size={18} />
						Delete
					</button>
				</div>
			</Dialog>
		</div>
	)
}
