import { PROJECTS_TABLE } from '@/lib/projects'

export async function getAllProjectsByTenant(tenantId: string) {
	return await Promise.resolve(
		PROJECTS_TABLE.filter(project => project.tenantId === tenantId),
	)
}

export async function getOneProjectById(projectId: string, tenantId: string) {
	return await Promise.resolve(
		PROJECTS_TABLE.find(
			project => project.id === projectId && project.tenantId === tenantId,
		) || null,
	)
}

export async function getCountProjectsByTenant(tenantId: string) {
	return await Promise.resolve(
		PROJECTS_TABLE.filter(project => project.tenantId === tenantId).length,
	)
}
