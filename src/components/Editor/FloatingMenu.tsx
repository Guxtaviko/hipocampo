import {
	ChainedCommands,
	Editor,
	FloatingMenu as TiptapFloatingMenu,
} from '@tiptap/react'
import { FloatingButton, FloatingContent } from './components'
import { EditorState } from '@tiptap/pm/state'

type FloatingButtonType =
	| 'setParagraph'
	| 'setHeading'
	| 'toggleBulletList'
	| 'toggleOrderedList'
	| 'setHorizontalRule'
	| 'setBlockquote'

interface FloatingMenuProps {
	editor: Editor | null
}

export const FloatingMenu = ({ editor }: FloatingMenuProps) => {
	const handleFloatingMenu = ({ state }: { state: EditorState }): boolean => {
		const { $from } = state.selection

		const currentLineText = $from.nodeBefore?.textContent

		return currentLineText === '/'
	}

	const handleInsert = <T extends FloatingButtonType>(
		type: T,
		...params: Parameters<ChainedCommands[T]>
	) => {
		if (!editor) return

		const focus = editor.chain().focus()

		// @ts-expect-error - This is a valid call
		focus[type](...params).run()

		// clear the "/"
		editor.commands.deleteRange({
			from: editor.state.selection.$from.pos - 1,
			to: editor.state.selection.$from.pos,
		})
	}

	return (
		editor && (
			<TiptapFloatingMenu
				tippyOptions={{
					placement: 'bottom-start',
				}}
				className="flex flex-col divide-y divide-slate-300 overflow-hidden rounded-lg border border-slate-300 bg-slate-200 dark:divide-slate-600 dark:border-slate-600 dark:bg-slate-700"
				editor={editor}
				shouldShow={handleFloatingMenu}
			>
				<FloatingButton onClick={() => handleInsert('setParagraph')}>
					<FloatingContent
						title="Text"
						description="Create a new text section"
						icon="Type"
					/>
				</FloatingButton>
				<FloatingButton
					onClick={() => handleInsert('setHeading', { level: 1 })}
				>
					<FloatingContent
						title="Heading 1"
						description="Big section heading"
						icon="Heading1"
					/>
				</FloatingButton>
				<FloatingButton
					onClick={() => handleInsert('setHeading', { level: 2 })}
				>
					<FloatingContent
						title="Heading 2"
						description="Medium section heading"
						icon="Heading2"
					/>
				</FloatingButton>
				<FloatingButton
					onClick={() => handleInsert('setHeading', { level: 3 })}
				>
					<FloatingContent
						title="Heading 3"
						description="Small section heading"
						icon="Heading3"
					/>
				</FloatingButton>
				<FloatingButton onClick={() => handleInsert('toggleBulletList')}>
					<FloatingContent
						title="Bullet List"
						description="Create a simple bullet list"
						icon="List"
					/>
				</FloatingButton>
				<FloatingButton onClick={() => handleInsert('toggleOrderedList')}>
					<FloatingContent
						title="Ordered List"
						description="Create a numbered list"
						icon="ListOrdered"
					/>
				</FloatingButton>
				<FloatingButton onClick={() => handleInsert('setHorizontalRule')}>
					<FloatingContent
						title="Horizontal Rule"
						description="Create a horizontal rule"
						icon="Minus"
					/>
				</FloatingButton>
				<FloatingButton onClick={() => handleInsert('setBlockquote')}>
					<FloatingContent
						title="Blockquote"
						description="Create a blockquote section"
						icon="Quote"
					/>
				</FloatingButton>
			</TiptapFloatingMenu>
		)
	)
}
