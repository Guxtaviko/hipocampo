import { ZapIcon } from 'lucide-react'

export const Footer = () => {
	return (
		<footer className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1">
			Coded with love by{' '}
			<a
				href="https://github.com/guxtaviko"
				target="_blank"
				rel="noreferrer"
				className="flex items-center gap-1 text-teal-500 hover:underline "
			>
				Guxtaviko
				<ZapIcon strokeWidth={1} size={16} />
			</a>
		</footer>
	)
}
