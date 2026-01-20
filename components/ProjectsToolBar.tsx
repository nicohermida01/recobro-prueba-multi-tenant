import { FilterIcon } from './icons/Filter.icon'
import { PlusIcon } from './icons/Plus.icon'
import { ProjectsSearchInput } from './ProjectsSearchInput'

export function ProjectsToolBar() {
	return (
		<div className='flex items-center gap-6 w-[80%]'>
			<ProjectsSearchInput />

			<button className='cursor-pointer'>
				<FilterIcon />
			</button>

			<button className='flex items-center justify-center w-55 gap-3 bg-gray-300 text-black px-4 py-2 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors'>
				Nuevo Proyecto <PlusIcon />
			</button>
		</div>
	)
}
