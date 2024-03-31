import Image from 'next/image';
import React from 'react';
import landingImg from '@/images/landing.png';

const HeroSection = () => {
	return (
		<div className='flex flex-row justify-around items-center'>
			<div className='flex-[0.75]'>
				<h1 className='text-2xl uppercase font-[600] text-secondary'>
					Software
				</h1>
				<h1 className='text-4xl uppercase font-extrabold text-primary'>
					Engineering
				</h1>
				<h1 className='text-2xl uppercase font-[600] text-secondary'>Club</h1>
			</div>
			<Image
				className='object-contain'
				src={landingImg}
				alt='greeting image'
				width={400}
				height={400}
			/>
		</div>
	);
};

export default HeroSection;
