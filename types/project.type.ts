export enum ProjectStatus {
	ACTIVE = 'active',
	ARCHIVED = 'archived',
}

export type Project = {
	id: string
	name: string
	status: ProjectStatus
	tenantId: string
	content: string
}

export const ProjectStatusMap: Record<ProjectStatus, string> = {
	[ProjectStatus.ACTIVE]: 'Activo',
	[ProjectStatus.ARCHIVED]: 'Archivado',
}
