'use client'

import { useRouter } from 'next/navigation'
import { LeftArrowIcon } from './icons/LeftArrow.icon'

export function BackButton() {
	const router = useRouter()

	const handleClick = () => {
		router.back()
	}

	return (
		<button
			className='flex items-center gap-2 cursor-pointer hover:underline'
			onClick={handleClick}
		>
			<LeftArrowIcon /> Volver atrás
		</button>
	)
}
