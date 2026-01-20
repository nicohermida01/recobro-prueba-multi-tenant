import { LinkItem } from '@/components/LinkItem'
import { getCountProjectsByTenant } from '@/services/projects.service'
import { getOneTenantBySlug } from '@/services/tenants.service'

export default async function TenantDashboardPage({
	params,
}: {
	params: Promise<{ tenant: string }>
}) {
	const { tenant } = await params
	const tenantData = await getOneTenantBySlug(tenant)

	if (!tenantData) {
		return (
			<div
				className={`w-full min-h-[calc(100vh-62px)] flex flex-col gap-4 justify-center items-center`}
			>
				<h3 className='text-3xl font-bold'>404 - Tenant no encontrado</h3>
			</div>
		)
	}

	const tenantProjectsCount = await getCountProjectsByTenant(tenantData.id)

	return (
		<div
			className={`w-full min-h-[calc(100vh-62px)] flex flex-col gap-4 justify-center items-center`}
		>
			<h1 className='text-4xl font-bold mb-4'>{tenantData.name} Dashboard</h1>

			<LinkItem
				href={`/${tenantData.slug}/projects`}
				title='Ver proyectos'
				containerProps='w-[300px]'
			/>

			<p>Número de proyectos: {tenantProjectsCount}</p>
		</div>
	)
}
