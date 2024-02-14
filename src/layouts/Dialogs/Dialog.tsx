import { ReactNode, useEffect } from 'react'
import '../../styles/dialog.css'

export interface DialogProps {
	onClose: () => void
}

interface DefaultDialogProps extends DialogProps {
	children?: ReactNode
	closeOnBackdrop?: boolean
	closeOnEscape?: boolean
	closeOnLeave?: boolean
	className?: string
	container?: string
}

const defaultPorps: DefaultDialogProps = {
	onClose: () => {},
	closeOnBackdrop: true,
	closeOnEscape: true,
	closeOnLeave: false,
	className: '',
	container: '.dialog',
}

export const Dialog = ({ children, onClose, ...rest }: DefaultDialogProps) => {
	const { closeOnBackdrop, closeOnEscape, closeOnLeave, className, container } =
		{
			...defaultPorps,
			...rest,
		}

	useEffect(() => {
		if (!closeOnBackdrop) return

		const handleClick = (e: MouseEvent) => {
			const openedDialogs = [...document.querySelectorAll('.dialog')]
			e.stopImmediatePropagation()

			if (openedDialogs.length > 1) {
				openedDialogs.forEach((dialog) => {
					if (dialog.contains(e.target as Node)) return
					onClose()
				})
			}

			const target = e.target as HTMLElement
			if (target.closest(container!)) return
			onClose()
		}

		document.body.addEventListener('click', handleClick)

		return () => {
			document.body.removeEventListener('click', handleClick)
		}
	}, [onClose, closeOnBackdrop, container])

	useEffect(() => {
		if (!closeOnEscape) return

		const handleKey = (e: KeyboardEvent) => {
			e.stopImmediatePropagation()
			if (e.key === 'Escape') onClose()
		}

		document.body.addEventListener('keydown', handleKey)

		return () => {
			document.body.removeEventListener('keydown', handleKey)
		}
	}, [onClose, closeOnEscape])

	return (
		<div
			onMouseLeave={() => closeOnLeave && onClose()}
			className={`dialog ${className}`}
		>
			{children}
		</div>
	)
}
