import { EditorContent, useEditor } from '@tiptap/react'
import { FloatingMenu } from './FloatingMenu'
import { BubbleMenu } from './BubbleMenu'
import { extensions } from './config'
import '../../styles/editor.css'

interface EditorProps {
	onContentChange: (content: string) => void
	className?: string
	content?: string
}

export const Editor = ({
	className,
	content,
	onContentChange,
}: EditorProps) => {
	const editor = useEditor({
		extensions,
		onUpdate: ({ editor }) => {
			onContentChange(editor.getHTML())
		},
		editorProps: {
			attributes: {
				class:
					'focus:outline-none prose dark:prose-invert prose-slate prose-teal leading-6',
			},
		},
		content,
	})

	return (
		<>
			<EditorContent editor={editor} className={className ?? ''} />
			<BubbleMenu editor={editor} />
			<FloatingMenu editor={editor} />
		</>
	)
}
