import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'

export const extensions = [
	StarterKit,
	Underline,
	Placeholder.configure({
		placeholder: ({ node }) => {
			if (node.type.name !== 'paragraph') return ''

			return 'Press "/" to open the menu'
		},
	}),
	Link.extend({
		inclusive: false,
	}),
]
