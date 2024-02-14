import { MoreHorizontal as MoreIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../hooks'
import { Dialog } from '../layouts'
import '../styles/settings.css'

export const Settings = () => {
	const [open, setOpen] = useState(false)
	const { theme, toggleTheme } = useTheme()

	const isDark = theme === 'dark'

	const toggle = () => {
		setOpen(!open)
	}

	return (
		<div id="settings" className="absolute right-4 top-4">
			<button onClick={toggle} className="text-slate-900 dark:text-slate-200">
				<MoreIcon />
			</button>
			{open && (
				<Dialog
					className="right-0"
					onClose={() => setOpen(false)}
					container="#settings"
				>
					<div>
						<span className="dialog-headline">Theme</span>
						<div className="flex gap-2">
							<button
								className={`settings-btn ${isDark ? '' : 'active'}`}
								onClick={() => toggleTheme('light')}
							>
								<SunIcon strokeWidth={1.5} /> Light
							</button>
							<button
								className={`settings-btn ${isDark ? 'active' : ''}`}
								onClick={() => toggleTheme('dark')}
							>
								<MoonIcon strokeWidth={1.5} />
								Dark
							</button>
						</div>
					</div>
				</Dialog>
			)}
		</div>
	)
}
