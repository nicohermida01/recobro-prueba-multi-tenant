import { TenantHeader } from '@/components/TenantHeader'
import { getOneTenantBySlug } from '@/services/tenants.service'
import Link from 'next/link'

export default async function TenantLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: Promise<{ tenant: string }>
}) {
	const { tenant } = await params
	const tenantData = await getOneTenantBySlug(tenant)

	if (!tenantData) {
		return (
			<div
				className={`w-full min-h-screen flex flex-col gap-4 justify-center items-center`}
			>
				<h3 className='text-3xl font-bold'>404 - Tenant no encontrado</h3>

				<Link href='/' className='text-blue-500 underline'>
					Volver al inicio
				</Link>
			</div>
		)
	}

	return (
		<div>
			<TenantHeader tenant={tenantData.name} />
			<section>{children}</section>
		</div>
	)
}
