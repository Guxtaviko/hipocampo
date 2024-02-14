import { LucideIcon } from 'lucide-react'
import {
	ChangeEvent,
	ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'
import { useIcons, useRecentIcons } from '../../hooks'
import { Dialog } from './Dialog'
import '../../styles/icon-selection.css'

interface IconSelectionProps {
	onIconChange: (icon: LucideIcon) => void
	buttonClassName?: string
	children: ReactNode
}

export const IconSelection = ({
	children: currentIcon,
	buttonClassName,
	onIconChange,
}: IconSelectionProps) => {
	const [page, setPage] = useState(1)
	const { recentIcons, addIcon } = useRecentIcons()
	const { icons, search, setSearch, hasMore } = useIcons(page)
	const [open, setOpen] = useState(false)

	const observer = useRef<IntersectionObserver>()
	const lastIconRef = useCallback(
		(node: HTMLButtonElement | null) => {
			if (observer.current) observer.current.disconnect()

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					if (!hasMore) return
					setPage((prev) => prev + 1)
				}
			})

			if (node) observer.current.observe(node)
		},
		[hasMore],
	)

	useEffect(() => {
		if (open)
			setPage(1) // Reset page when dialog opens
		else setSearch('') // Reset search when dialog closes
	}, [open, setSearch])

	const toggle = () => {
		setOpen(!open)
	}

	const handleIconClick = (Icon: LucideIcon) => {
		onIconChange(Icon)
		addIcon(Icon)
		setOpen(false)
	}

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}

	return (
		<div className="icon-selection relative">
			<button
				onClick={toggle}
				className={`grid h-full place-items-center ${buttonClassName ?? ''}`}
			>
				{currentIcon}
			</button>
			{open && (
				<Dialog onClose={() => setOpen(false)} container=".icon-selection">
					<div>
						<input
							autoFocus
							type="text"
							placeholder="Search"
							className="icon-searchbox"
							value={search}
							onChange={handleSearch}
						/>
					</div>
					<div>
						{!search && (
							<div className="mt-2">
								<span className="dialog-headline">Recent</span>
								<div className="grid max-h-48 w-80 grid-cols-9 justify-center gap-2 overflow-auto pr-2">
									{recentIcons.length === 0 && (
										<span className="col-span-9 h-full text-sm leading-8 text-gray-500">
											No recent icons
										</span>
									)}
									{recentIcons.map((Icon, i) => (
										<button
											className="icon-btn"
											key={`recent-icon-${i}`}
											onClick={() => handleIconClick(Icon)}
										>
											<Icon strokeWidth={1.5} />
										</button>
									))}
								</div>
							</div>
						)}

						<div className="mt-2">
							<span className="dialog-headline">Icons</span>
							<div className="grid max-h-48 w-80 grid-cols-9 justify-center gap-2 overflow-auto pr-2">
								{icons.length === 0 && (
									<span className="col-span-9 h-full text-sm leading-8 text-gray-500">
										No icons found
									</span>
								)}
								{icons.map((Icon, i) => {
									if (icons.length === i + 1) {
										return (
											<button
												className="icon-btn"
												ref={lastIconRef}
												key={`icon-${i}`}
												onClick={() => handleIconClick(Icon)}
											>
												<Icon strokeWidth={1.5} />
											</button>
										)
									}
									return (
										<button
											className="icon-btn"
											key={`icon-${i}`}
											onClick={() => handleIconClick(Icon)}
										>
											<Icon strokeWidth={1.5} />
										</button>
									)
								})}
							</div>
						</div>
					</div>
				</Dialog>
			)}
		</div>
	)
}
