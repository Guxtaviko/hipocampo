import { ComponentProps } from 'react'

interface BubbleButtonProps extends ComponentProps<'button'> {}

export const BubbleButton = (props: BubbleButtonProps) => {
	return (
		<button
			className="flex items-center gap-1.5 p-2 text-sm font-medium leading-none text-slate-600 hover:bg-slate-300 hover:text-slate-800 data-[active=true]:text-teal-500 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200 data-[active=true]:dark:text-teal-400"
			{...props}
		/>
	)
}
