import { BackButton } from './BackButton'

interface Props {
	tenant: string
}

export function TenantHeader({ tenant }: Props) {
	return (
		<header className='border-b-2 border-slate-500 py-4 px-10 flex justify-between items-center'>
			<BackButton />

			<h2 className='font-bold text-lg'>{tenant}</h2>
		</header>
	)
}
