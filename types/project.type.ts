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
