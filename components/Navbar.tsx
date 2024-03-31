import Image from 'next/image';
import React from 'react';

// import logo from '@/images/logo.png';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='flex justify-between items-center px-5 h-14 shadow-md shadow-accent'>
			<Image
				src={'https://placehold.co/200x100/000000/FFFFFF/PNG?text=SECLOGO'}
				alt='logo'
				width={100}
				height={100}
			/>
			<ul className='flex flex-row items-center gap-5'>
				<Link href='/'>About us</Link>
				<Link href='/'>Events</Link>
				<Link href='/'>Team</Link>
				<Link href='/'>Contact Us</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
