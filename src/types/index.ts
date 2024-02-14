import { icons } from 'lucide-react'

export type Project = {
	id: number
	title: string
	description: string
	icon: keyof typeof icons
}
