import { SearchIcon } from './icons/Search.icon'

export function ProjectsSearchInput() {
	return (
		<div className='w-full bg-white/10 py-2 px-4 rounded-xl flex items-center gap-3 hover:bg-white/15 transition-colors'>
			<SearchIcon className='size-5' />

			<input
				type='search'
				placeholder='Buscar proyectos...'
				className='w-full focus:outline-none'
			/>
		</div>
	)
}
