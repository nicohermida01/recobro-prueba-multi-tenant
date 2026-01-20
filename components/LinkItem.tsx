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
			className={`block border-2 border-white/20 rounded-lg p-3 hover:scale-105 hover:border-white/30 transition ${containerProps}`}
		>
			<p className='font-bold flex w-full justify-between items-center mb-1'>
				{title} <RightArrowIcon />
			</p>

			{children}
		</Link>
	)
}
