import { TenantHeader } from '@/components/TenantHeader'
import { getOneTenantBySlug } from '@/services/tenants.service'

export default async function TenantLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: Promise<{ tenant: string }>
}) {
	const { tenant } = await params
	const tenantData = await getOneTenantBySlug(tenant)

	return (
		<div>
			<TenantHeader tenant={tenantData?.name || ''} />
			<section>{children}</section>
		</div>
	)
}
