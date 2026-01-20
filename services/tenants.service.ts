import { TENANTS_TABLE } from '@/lib/tenants'

export async function getOneTenantBySlug(slug: string) {
	// Aca simulamos la obtencion de datos de un tenant por su slug con uso de fetch
	/* Ej: return fetch(`https://api.example.com/tenants/${slug}`) */

	return await Promise.resolve(
		TENANTS_TABLE.find(tenant => tenant.slug === slug) || null,
	)
}

export async function getAllTenants() {
	return await Promise.resolve(TENANTS_TABLE)
}
