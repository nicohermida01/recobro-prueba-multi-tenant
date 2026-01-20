import { OptionsIcon } from '@/components/icons/Options.icon'
import { ProjectStatus } from '@/components/ProjectStatus'
import { getOneProjectById } from '@/services/projects.service'
import { getOneTenantBySlug } from '@/services/tenants.service'

export default async function TenantProjectPage({
	params,
}: {
	params: Promise<{ tenant: string; id: string }>
}) {
	const { tenant, id } = await params
	const tenantData = await getOneTenantBySlug(tenant)

	if (!tenantData) return <div>Error - Tenant no encontrado</div>

	const project = await getOneProjectById(id, tenantData.id)

	return (
		<div className='w-full min-h-[calc(100vh-62px)] p-10 flex items-center flex-col gap-10'>
			{!project && <div>Error - Proyecto no encontrado</div>}

			{project && (
				<div className='w-[80%]'>
					<header className='flex justify-between'>
						<div>
							<h3 className='font-bold text-3xl'>{project.name}</h3>
							<div className='flex items-center gap-3'>
								<p className='text-white/60'>{tenantData.name}</p>
								<ProjectStatus status={project.status} />
							</div>
						</div>

						<OptionsIcon className='size-8 cursor-pointer' />
					</header>

					<main className='mt-10'>
						<p>{project.content}</p>
					</main>
				</div>
			)}
		</div>
	)
}
