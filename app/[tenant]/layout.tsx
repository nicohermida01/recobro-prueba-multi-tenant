import { TenantHeader } from '@/components/TenantHeader'

export default function TenantLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div>
			<TenantHeader />

			<section>{children}</section>
		</div>
	)
}
