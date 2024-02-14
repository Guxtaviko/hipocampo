import { CreateBtn } from './CreateBtn'
import { RandomPickerBtn } from './RandomPickerBtn'
import { Search } from './Search'
import '../../styles/actions.css'

export const Actions = () => {
	return (
		<div className="mb-4 flex gap-2">
			<CreateBtn />
			<Search />
			<RandomPickerBtn />
		</div>
	)
}
