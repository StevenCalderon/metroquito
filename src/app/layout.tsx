import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
import trainFront from '../../public/images/tram-front.png';
import Head from 'next/head';
export const metadata: Metadata = {
	title: 'Metro de Quito + IA',
	description:
		'Cómo la IA Hará del Metro de Quito un Lugar Más Seguro para Todos',
	icons: {
		icon: '/favicon.ico',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
