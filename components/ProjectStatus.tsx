import { ProjectStatusEnum, ProjectStatusMap } from '@/types/project.type'

interface Props {
	status: ProjectStatusEnum
}

export function ProjectStatus({ status }: Props) {
	return (
		<p className='flex items-center gap-2 text-white/60'>
			<span
				className={`inline-block ${status === ProjectStatusEnum.ACTIVE ? 'bg-green-500' : 'bg-red-500'} rounded-full size-2`}
			></span>
			{ProjectStatusMap[status]}
		</p>
	)
}
