import { RightArrowIcon } from '@/components/icons/RightArrow.icon'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='w-full h-screen flex flex-col items-center justify-center'>
			<h2 className='text-4xl font-bold'>404</h2>
			<p className='text-lg'>Parece que la página que buscas no existe.</p>
			<Link
				href='/'
				className='hover:underline mt-4 flex items-center gap-2 text-blue-400'
			>
				Ir al Inicio <RightArrowIcon />
			</Link>
		</div>
	)
}
