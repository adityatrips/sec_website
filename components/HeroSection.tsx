import Image from 'next/image';
import React from 'react';
import landingImg from '@/images/landing.png';

const HeroSection = () => {
	return (
		<div className='flex flex-col md:flex-row justify-around items-center shadow-md shadow-secondary'>
			<div className='flex-[0.75] hidden md:block'>
				<h1 className='uppercase font-[600] text-primary'>Software</h1>
				<h1
					data-styled
					className='uppercase font-extrabold text-primary'
				>
					Engineering
				</h1>
				<h1 className='uppercase font-[600] text-primary'>Club</h1>
			</div>
			<Image
				className='object-contain'
				src={landingImg}
				alt='greeting image'
				width={400}
				height={400}
			/>
			<h3
				data-styled
				className='md:hidden text-center'
			>
				Software Engineering Club
			</h3>
		</div>
	);
};

export default HeroSection;
