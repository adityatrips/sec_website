/* eslint-disable @next/next/no-page-custom-font */
'use client';

import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import React from 'react';
import Image from 'next/image';
import contrast from '@/images/icons/contrast.svg';

const rubik = Rubik({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const bodyRef = React.useRef<HTMLBodyElement>(null);

	const toggleTheme = () => {
		bodyRef.current!.classList.toggle('dark');
	};

	return (
		<html lang='en'>
			<head>
				<link
					href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional'
					rel='stylesheet'
				/>
			</head>
			<body
				ref={bodyRef}
				className={`bg-background transition-colors duration-100 text-text ${rubik.className}`}
			>
				<Navbar />
				{children}
				<button
					className='w-[50px] h-[50px] rounded-full fixed bottom-2 right-2 bg-secondary text-text shadow-secondary dark:bg-secondary dark:text-primary dark:shadow-primary transition-colors duration-100 flex justify-center items-center'
					onClick={toggleTheme}
				>
					<Image
						src={contrast}
						height={40}
						width={40}
						alt='Contrast'
					/>
				</button>
			</body>
		</html>
	);
}
