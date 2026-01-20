export enum ProjectStatusEnum {
	ACTIVE = 'active',
	ARCHIVED = 'archived',
}

export type Project = {
	id: string
	name: string
	status: ProjectStatusEnum
	tenantId: string
	content: string
}

export const ProjectStatusMap: Record<ProjectStatusEnum, string> = {
	[ProjectStatusEnum.ACTIVE]: 'Activo',
	[ProjectStatusEnum.ARCHIVED]: 'Archivado',
}
