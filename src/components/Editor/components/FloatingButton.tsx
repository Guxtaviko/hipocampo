import { ComponentProps } from 'react'

interface FloatingButtonProps extends ComponentProps<'button'> {}

export const FloatingButton = (props: FloatingButtonProps) => {
	return (
		<button
			className="flex items-center gap-4 px-4 py-3 text-sm font-medium leading-none text-slate-600 hover:bg-slate-300 hover:text-slate-800 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
			{...props}
		/>
	)
}
