import { Project, ProjectStatus } from '@/types/project.type'

export const PROJECTS_TABLE: Project[] = [
	{
		id: '1',
		name: 'Sitio Web Corporativo',
		status: ProjectStatus.ACTIVE,
		tenantId: '1',
		content:
			'Irure amet eu dolore magna adipisicing consectetur id dolore exercitation velit esse dolore elit Lorem. Ullamco ipsum dolor sint culpa. Cupidatat sint occaecat velit adipisicing elit elit labore consequat aliqua cillum amet.',
	},
	{
		id: '2',
		name: 'Aplicación Móvil',
		status: ProjectStatus.ARCHIVED,
		tenantId: '1',
		content:
			'Irure amet eu dolore magna adipisicing consectetur id dolore exercitation velit esse dolore elit Lorem. Ullamco ipsum dolor sint culpa. Cupidatat sint occaecat velit adipisicing elit elit labore consequat aliqua cillum amet.',
	},
	{
		id: '3',
		name: 'Plataforma de E-commerce',
		status: ProjectStatus.ACTIVE,
		tenantId: '2',
		content:
			'Irure amet eu dolore magna adipisicing consectetur id dolore exercitation velit esse dolore elit Lorem. Ullamco ipsum dolor sint culpa. Cupidatat sint occaecat velit adipisicing elit elit labore consequat aliqua cillum amet.',
	},
]
