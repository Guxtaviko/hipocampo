import { FishIcon } from 'lucide-react'

export const Header = () => {
	return (
		<div className="absolute left-4 top-4 flex items-center gap-2 text-teal-500">
			<FishIcon size={32} strokeWidth={1.5} />
			<h1 className="font-display text-2xl font-bold">Hipocampo</h1>
		</div>
	)
}
