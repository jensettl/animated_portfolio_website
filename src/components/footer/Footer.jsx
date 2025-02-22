import React from 'react';
import { AiTwotoneMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
	return (
		<div id='works' className=' mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]'>
			<div className=' bg-emerald-200 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7'>
				<h2 data-aos='zoom-out' className=' font-bold text-5xl sm:text-3xl'>
					Let's stay in touch!
				</h2>
				<div className=' flex items-center justify-center gap-8 sm:gap-5'>
					<a
						data-aos='fade-up'
						data-aos-duration='1000'
						href='mailto:ettljens@gmail.com'
						className='box font-medium text-white   flex items-center justify-center flex-col'
					>
						<AiTwotoneMail className=' text-black text-3xl hover:scale-125 cursor-pointer' />
						<p className='text-black'>E-Mail</p>
					</a>
					<a
						data-aos='fade-up'
						data-aos-duration='1200'
						href='https://www.linkedin.com/in/jens-ettl-807578211/'
						className='box font-medium text-white  flex items-center justify-center flex-col'
					>
						<FaLinkedinIn className=' text-black text-3xl hover:scale-125 cursor-pointer' />
						<p className='text-black'>LinkedIn</p>
					</a>
					<a
						data-aos='fade-up'
						data-aos-duration='1400'
						href='https://www.instagram.com/jens2698/'
						className='box font-medium text-white  flex items-center justify-center flex-col'
					>
						<RiInstagramFill className=' text-black text-3xl hover:scale-125 cursor-pointer' />
						<p className='text-black'>Instagram</p>
					</a>
				</div>
				<div className='sm:text-[12px]'>
					| Copyright &copy; <span>2023 Dev AlphaSpace </span> All rights
					reserved{' '}
					<a href='https://github.com/Devalphaspace/animated_portfolio_website/tree/main'>
						(GitHub)
					</a>{' '}
					|
				</div>
			</div>
		</div>
	);
};

export default Footer;
