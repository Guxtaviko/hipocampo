import { Editor, BubbleMenu as TiptapBubbleMenu } from '@tiptap/react'
import {
	BoldIcon,
	ItalicIcon,
	UnderlineIcon,
	StrikethroughIcon,
} from 'lucide-react'
import { BubbleButton } from './components'

interface BubbleMenuProps {
	editor: Editor | null
}

export const BubbleMenu = ({ editor }: BubbleMenuProps) => {
	type BubbleButtonType = 'Bold' | 'Italic' | 'Underline' | 'Strike'
	const handleToggle = (type: BubbleButtonType) => {
		if (!editor) return

		const key = ('toggle' + type) as `toggle${BubbleButtonType}`

		editor.chain().focus()[key]().run()
	}

	return (
		editor && (
			<TiptapBubbleMenu
				editor={editor}
				className="flex divide-x divide-slate-300 overflow-hidden rounded-lg border border-slate-300 bg-slate-200 dark:divide-slate-600 dark:border-slate-600 dark:bg-slate-700"
			>
				<BubbleButton
					onClick={() => handleToggle('Bold')}
					data-active={editor.isActive('bold')}
				>
					<BoldIcon size={16} strokeWidth={1.5} />
				</BubbleButton>
				<BubbleButton
					onClick={() => handleToggle('Italic')}
					data-active={editor.isActive('italic')}
				>
					<ItalicIcon size={16} strokeWidth={1.5} />
				</BubbleButton>
				<BubbleButton
					onClick={() => handleToggle('Underline')}
					data-active={editor.isActive('underline')}
				>
					<UnderlineIcon size={16} strokeWidth={1.5} />
				</BubbleButton>
				<BubbleButton
					onClick={() => handleToggle('Strike')}
					data-active={editor.isActive('strike')}
				>
					<StrikethroughIcon size={16} strokeWidth={1.5} />
				</BubbleButton>
			</TiptapBubbleMenu>
		)
	)
}
