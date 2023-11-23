import React from 'react';
import styled from 'styled-components';
import { data } from '../data/data';
import { RxExternalLink } from 'react-icons/rx';
import { AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const WorkCard = () => {
	const reversedData = [...data].reverse();

	return (
		<>
			{reversedData.map((data) => {
				return (
					<div
						data-aos='zoom-in'
						key={data.id}
						className='flex flex-col justify-center items-center gap-4 py-5'
					>
						<POPUP className='img-content relative'>
							<div className='h-[280px] w-[380px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto '>
								<img
									src={data.img}
									alt={data.title}
									className=' object-fit w-full h-full hover:scale-125 transition duration-500 cursor-pointer'
								/>
							</div>

							<div
								className={` popup w-full  h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] p-4`}
							>
								<p className=' text-gray-900 text-base leading-[1.4] text-justify w-[90%]'>
									{data.desc}
								</p>

								<div className=' flex items-center justify-center gap-4'>
									{data.link && (
										<Link
											to={data.link}
											target='_blank'
											className='  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium bg-zinc-100'
										>
											<RxExternalLink className=' text-black bg-zinc-50 rounded-full border  w-[35px] h-[35px] p-2' />
											<p className=' text-black'>Demo</p>
										</Link>
									)}
									<br className='w-[2px] bg-white' />
									{data.git && (
										<Link
											to={data.git}
											target='_blank'
											className='  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium bg-zinc-100'
										>
											<AiOutlineGithub className='  text-black bg-zinc-50 rounded-full border  w-[35px] h-[35px] p-2' />
											<p className=' text-black'>Code</p>
										</Link>
									)}
								</div>
							</div>
						</POPUP>
						<p className='text-gray-800 text-xl font-medium sm:text-lg'>
							{data.title}
						</p>
						<div className=' flex items-center justify-center gap-1'>
							{data.tags.map((tag) => (
								<div class='ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1  rounded-full bg-white text-gray-700 border'>
									{tag}
								</div>
							))}
						</div>
					</div>
				);
			})}
		</>
	);
};

export default WorkCard;

const POPUP = styled.div`
	position: relative;
	img {
		&:hover {
			transform: scaleX(2);
		}
	}
	.popup {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		opacity: 0;
		margin: auto;
		transition: 0.5s ease;
		background: rgba(255, 255, 255, 0.5);
		backdrop-filter: blur(5px);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.icon {
		color: #fff !important;
	}
	&:hover .popup {
		opacity: 1;
		color: #fff;
		background: rgba(255, 255, 255, 0.8); // Added background value
	}
`;
