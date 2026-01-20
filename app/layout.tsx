import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Recobro | Tenants',
	description: 'Prueba técnica para Recobro',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className='bg-[#030303] text-white'>{children}</body>
		</html>
	)
}
