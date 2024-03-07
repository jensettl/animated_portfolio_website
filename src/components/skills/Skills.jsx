import React from 'react';
import ProgressBar from '../../chip/ProgressBar';
import SkillBox from '../../chip/SkillBox';

import { IoLogoPython } from 'react-icons/io';
import { AiFillCalculator } from 'react-icons/ai';
import { BsFillDatabaseFill, BsFillPeopleFill } from 'react-icons/bs';
import {
	SiJavascript,
	SiAnaconda,
	SiJupyter,
	SiTensorflow,
} from 'react-icons/si';

import { MdSyncProblem } from 'react-icons/md';
import { RiFileExcel2Fill } from 'react-icons/ri';
SiTensorflow;
const Skills = () => {
	return (
		<div id='skills'>
			<div className=' container m-auto  mt-16'>
				{/* heading */}
				<div data-aos='fade-up' className='relative mb-5'>
					<h3 className=' text-3xl font-black text-gray-400 sm:text-2xl'>
						My Skills
					</h3>
					<span className='h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block'></span>
				</div>
				{/* content*/}
				<div className='flex md:flex-col '>
					<div className='left flex-1 w-full'>
						<p
							data-aos='fade-up'
							className=' text-gray-700 font-medium w-[100%]'
						>
							Here are my skills.
						</p>
						{/* left box */}
						<div
							data-aos='zoom-in'
							className='progress flex items-center h-[100%] justify-end md:justify-center'
						>
							<div className=' flex flex-col gap-6  w-3/4  my-5 md:w-[90%]'>
								<ProgressBar
									logo={<IoLogoPython />}
									name={'Python'}
									value={95}
								/>
								<ProgressBar
									logo={<AiFillCalculator />}
									name={'Maths & Statistics'}
									value={85}
								/>
								<ProgressBar
									logo={<BsFillDatabaseFill />}
									name={'SQL'}
									value={75}
								/>
								<ProgressBar
									logo={<SiJavascript />}
									name={'Javascript (React)'}
									value={70}
								/>
								<ProgressBar
									logo={<MdSyncProblem />}
									name={'Problem Solving'}
									value={85}
								/>
								<ProgressBar
									logo={<BsFillPeopleFill />}
									name={'Teamwork & Communication'}
									value={85}
								/>
							</div>
						</div>
					</div>
					{/* right box */}
					<div className='right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full'>
						<div className='first2 flex flex-col gap-10'>
							<SkillBox
								logo={<RiFileExcel2Fill />}
								black={'white'}
								white={'black'}
								skill={'Excel'}
							/>
							<SkillBox
								logo={<SiTensorflow />}
								black={'white'}
								white={'black'}
								skill={'Tensorflow'}
							/>
						</div>
						<div className='last2 flex flex-col gap-10'>
							<SkillBox
								logo={<SiAnaconda />}
								black={'black'}
								white={'white'}
								skill={'Anaconda'}
							/>
							<SkillBox
								className=''
								logo={<SiJupyter />}
								black={'black'}
								white={'white'}
								skill={'Jupyter Notebooks'}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
