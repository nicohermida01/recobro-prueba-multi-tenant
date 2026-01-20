import Link from 'next/link'
import { RightArrowIcon } from './icons/RightArrow.icon'

interface Props {
	href: string
	title: string
	children?: React.ReactNode
	containerProps?: string
}

export function LinkItem({ href, title, children, containerProps }: Props) {
	return (
		<Link
			href={href}
			className={`block border-2 border-slate-500 rounded-lg p-3 hover:scale-105 transition-transform ${containerProps}`}
		>
			<p className='font-bold flex w-full justify-between items-center'>
				{title} <RightArrowIcon />
			</p>

			{children}
		</Link>
	)
}
