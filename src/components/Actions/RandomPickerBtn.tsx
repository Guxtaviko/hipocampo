import { DicesIcon } from 'lucide-react'
import { useState } from 'react'
import { RandomPickerModal } from '../../layouts'

export const RandomPickerBtn = () => {
	const [open, setOpen] = useState(false)

	const toggle = () => {
		console.log('toggle', !open)
		setOpen(!open)
	}

	return (
		<>
			<button className="action-btn" onClick={toggle}>
				<DicesIcon strokeWidth={1.5} />
			</button>
			{open && <RandomPickerModal onClose={() => setOpen(false)} />}
		</>
	)
}
