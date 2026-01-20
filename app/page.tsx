import { RightArrowIcon } from '@/components/icons/RightArrow.icon'
import { getAllTenants } from '@/services/tenants.service'
import Link from 'next/link'

export default async function Home() {
	const tenants = await getAllTenants()

	return (
		<div className='w-full min-h-screen flex flex-col justify-center items-center'>
			<h1 className='text-3xl font-bold'>Recobro Multi-Tenant App</h1>

			{tenants && tenants.length > 0 && (
				<ul className='flex gap-3 mt-10'>
					{tenants.map(tenant => (
						<li key={tenant.id}>
							<Link
								href={`${tenant.slug}/dashboard`}
								className='block border-2 border-slate-500 rounded-lg w-52 h-20 p-3 hover:scale-105 transition-transform'
							>
								<p className='font-bold flex w-full justify-between items-center'>
									{tenant.name} <RightArrowIcon />
								</p>
							</Link>
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
