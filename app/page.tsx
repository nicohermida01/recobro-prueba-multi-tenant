import { LinkItem } from '@/components/LinkItem'
import { getAllTenants } from '@/services/tenants.service'

export default async function Home() {
	const tenants = await getAllTenants()

	return (
		<div className='w-full min-h-screen flex flex-col justify-center items-center'>
			<h1 className='text-3xl font-bold'>Recobro Multi-Tenant App</h1>

			{tenants && tenants.length > 0 && (
				<ul className='flex gap-3 mt-10'>
					{tenants.map(tenant => (
						<li key={tenant.id}>
							<LinkItem
								href={`${tenant.slug}/dashboard`}
								title={tenant.name}
								containerProps='w-52 h-20'
							/>
						</li>
					))}
				</ul>
			)}

			{!tenants ||
				(tenants.length === 0 && (
					<p className='mt-10'>No se encontraron tenants.</p>
				))}
		</div>
	)
}
