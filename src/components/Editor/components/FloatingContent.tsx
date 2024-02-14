import { icons } from 'lucide-react'

interface FloatingContentProps {
	title: string
	description: string
	icon: keyof typeof icons
}

export const FloatingContent = ({
	title,
	description,
	icon,
}: FloatingContentProps) => {
	const Icon = icons[icon]

	return (
		<>
			<div className="rounded border border-slate-300 bg-slate-100 p-2 dark:border-slate-700 dark:bg-slate-900">
				<Icon strokeWidth={1.5} fontSize={24} />
			</div>
			<div className="flex flex-col items-start gap-1.5">
				<h3 className="text-sm font-medium leading-none text-slate-800 dark:text-slate-200">
					{title}
				</h3>
				<p className="text-xs leading-none text-slate-600 dark:text-slate-400">
					{description}
				</p>
			</div>
		</>
	)
}
