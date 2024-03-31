'use client';

import React from 'react';

import HeroSection from '@/components/HeroSection';
import UpcomingEventCard from '@/components/UpcomingEventCard';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

import instagram from '@/images/icons/instagram.svg';
import github from '@/images/icons/github.svg';
import linkedin from '@/images/icons/linkedin.svg';
import Link from 'next/link';

const HomePage = () => {
	return (
		<div>
			<HeroSection />

			<div className='px-10'>
				<h1
					data-styled
					className='py-5 text-center'
				>
					Upcoming Events
				</h1>

				<div className='flex justify-center'>
					<Carousel
						emulateTouch
						autoPlay
						axis='horizontal'
						showArrows={false}
						showStatus={false}
						showIndicators={false}
						showThumbs={false}
						swipeable
						transitionTime={500}
						useKeyboardArrows
						infiniteLoop
						interval={2500}
						centerMode
						centerSlidePercentage={70}
						className='w-[100%] md:w-[75vw]'
					>
						<UpcomingEventCard eventName='Event 1' />
						<UpcomingEventCard eventName='Event 2' />
						<UpcomingEventCard eventName='Event 3' />
						<UpcomingEventCard eventName='Event 4' />
					</Carousel>
				</div>
			</div>

			<div className='px-10 pb-10'>
				<h1
					data-styled
					className='py-5 text-center'
				>
					Club Leads
				</h1>
				<div className='gap-5 club-leads grid grid-cols-2 relative md:w-[50vw] mx-auto'>
					<div className='p-5 border-none rounded-xl transition-transform duration-100 hover:scale-110 hover:shadow-2xl shadow-primary bg-primary'>
						<h4
							data-styled
							className='text-center'
						>
							President
						</h4>
						<Image
							src='https://placehold.co/1000/AAAAAA/333333/PNG?text=President'
							width={600}
							height={600}
							alt='President'
							className='rounded-md'
						/>

						<h3
							data-styled
							className='text-center pt-5'
						>
							Jason Derulo
						</h3>

						<div className='flex justify-around items-center py-5'>
							<Link href='/'>
								<Image
									src={instagram}
									height={30}
									width={30}
									alt='instagram'
								/>
							</Link>
							<Link href='/'>
								<Image
									src={github}
									height={30}
									width={30}
									alt='github'
								/>
							</Link>
							<Link href='/'>
								<Image
									src={linkedin}
									height={30}
									width={30}
									alt='linkedin'
								/>
							</Link>
						</div>
					</div>
					<div className='p-5 border-none rounded-xl transition-transform duration-100 hover:scale-110 hover:shadow-2xl shadow-primary bg-primary'>
						<h4
							data-styled
							className='text-center'
						>
							President
						</h4>
						<Image
							src='https://placehold.co/1000/AAAAAA/333333/PNG?text=President'
							width={600}
							height={600}
							alt='President'
							className='rounded-md'
						/>

						<h3
							data-styled
							className='text-center pt-5'
						>
							Jason Derulo
						</h3>

						<div className='flex justify-around items-center py-5'>
							<Link href='/'>
								<Image
									src={instagram}
									height={30}
									width={30}
									alt='instagram'
								/>
							</Link>
							<Link href='/'>
								<Image
									src={github}
									height={30}
									width={30}
									alt='github'
								/>
							</Link>
							<Link href='/'>
								<Image
									src={linkedin}
									height={30}
									width={30}
									alt='linkedin'
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
