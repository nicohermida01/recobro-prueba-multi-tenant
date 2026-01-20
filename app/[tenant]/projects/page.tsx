import { LinkItem } from '@/components/LinkItem'
import { ProjectsToolBar } from '@/components/ProjectsToolBar'
import { getAllProjectsByTenant } from '@/services/projects.service'
import { getOneTenantBySlug } from '@/services/tenants.service'

export default async function TenantProjectsPage({
	params,
}: {
	params: Promise<{ tenant: string }>
}) {
	const { tenant } = await params
	const tenantData = await getOneTenantBySlug(tenant)

	if (!tenantData) return <div>Error - Tenant no encontrado</div>

	const projects = await getAllProjectsByTenant(tenantData.id)

	return (
		<div className='w-full min-h-[calc(100vh-62px)] p-10 flex items-center flex-col gap-10'>
			<ProjectsToolBar />

			{projects && projects.length > 0 && (
				<ul className='flex flex-wrap gap-4 w-[80%]'>
					{projects.map(project => (
						<li key={project.id}>
							<LinkItem
								href={`/${tenant}/projects/${project.id}`}
								title={project.name}
								containerProps='w-[300px] h-[120px]'
							>
								<span>{project.status}</span>
							</LinkItem>
						</li>
					))}
				</ul>
			)}

			{!projects ||
				(projects.length === 0 && (
					<div>Parece que todavia no se han creado proyectos...</div>
				))}
		</div>
	)
}
