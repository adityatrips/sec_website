import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import rightarrow from '@/images/icons/rightarrow.svg';

const UpcomingEventCard = ({ eventName }: { eventName: string }) => {
	let url = `https://placehold.co/1920x1080/AAAAAA/333333/PNG?text=${eventName.replace(
		' ',
		'+'
	)}`;
	let eventLink = '/';

	return (
		<div className='border-none rounded-lg overflow-hidden'>
			<Image
				src={url}
				alt={eventName}
				width={1920}
				height={1080}
				className='pb-5 object-cover w-full '
			/>
			<Link
				href={eventLink}
				className='pb-5 transition-all duration-200 float-end flex flex-row gap-2 items-center pr-5 hover:gap-10 hover:text-primary'
			>
				<p>More details</p>
				<Image
					src={rightarrow}
					alt='rightarrow'
					width={30}
					height={30}
				/>
			</Link>
		</div>
	);
};

export default UpcomingEventCard;
