import { ReactNode, useEffect } from 'react'
import { XIcon as CloseIcon } from 'lucide-react'
import '../../styles/modal.css'

export interface ModalProps {
	onClose: () => void
}

interface DefaultModalProps extends ModalProps {
	children?: ReactNode
	closeOnBackdrop?: boolean
	closeOnEscape?: boolean
	closeBtn?: boolean
	className?: string
}

const defaultPorps: DefaultModalProps = {
	onClose: () => {},
	closeOnBackdrop: true,
	closeOnEscape: true,
	closeBtn: true,
	className: '',
}

export const Modal = ({ children, onClose, ...rest }: DefaultModalProps) => {
	const { closeOnBackdrop, closeOnEscape, closeBtn, className } = {
		...defaultPorps,
		...rest,
	}

	useEffect(() => {
		if (!closeOnBackdrop) return

		const handleClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement
			if (target.classList.contains('backdrop')) onClose()
		}

		window.addEventListener('click', handleClick)

		return () => {
			window.removeEventListener('click', handleClick)
		}
	}, [onClose, closeOnBackdrop])

	useEffect(() => {
		if (!closeOnEscape) return

		const handleKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose()
		}

		window.addEventListener('keydown', handleKey)

		return () => {
			window.removeEventListener('keydown', handleKey)
		}
	}, [onClose, closeOnEscape])

	return (
		<div className="backdrop">
			<div className={`modal ${className}`}>
				{closeBtn && (
					<button
						className="modal-close-btn"
						onClick={onClose}
						aria-label="Close modal"
					>
						<CloseIcon size={20} />
					</button>
				)}
				{children}
			</div>
		</div>
	)
}
