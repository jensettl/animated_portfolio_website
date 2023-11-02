import React from 'react';

const Resume = () => {
	return (
		<div id='resume' className=' container m-auto   mt-16'>
			{/* heading */}
			<div data-aos='fade-up' className='relative mb-5'>
				<h3 className=' text-3xl font-black text-gray-400 sm:text-2xl'>
					Resume
				</h3>
				<span className='h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block'></span>
			</div>
			<div data-aos='fade-up' className='left flex-1 w-full'>
				<p className=' text-gray-700 font-medium w-[100%]'>
					Here are my experiences and qualifications.
				</p>
			</div>
			{/* card*/}
			<div className='card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto '>
				<div className='left flex-1 flex items-center justify-center'>
					<fieldset
						data-aos='zoom-in'
						className=' w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2'
					>
						<legend className=' w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500'>
							Experience
						</legend>
						<div className=' relative'>
							{/* design */}
							<div className='design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] '>
								<div className='c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500'></div>
								<div className='line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]'></div>
								<div className='c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500'></div>
							</div>
							{/* design */}
							<div className=' flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg'>
								<h1 className='text-[1.4rem] font-semibold sm:text-xl'>
									Product Manager Intern & Working Student
								</h1>
								<span className=' text-[.9rem] font-semibold text-gray-500 sm:text-base'>
									CAS Software AG
								</span>
								<span className=' text-[.9rem] font-semibold text-yellow-500 sm:text-base'>
									October 2021 - March 2023
								</span>
								<p className=' text-[.9rem] text-justify break-words text-gray-500'>
									I began as an intern in October during my bachelor's program
									and continued as a working student afterwards. During this
									time, I worked on various concepts, contributed to
									decision-making, and helped develop MVPs.{' '}
								</p>
								<p className=' text-[.9rem] text-justify break-words text-gray-500'>
									One project that stands out involved the elaboration of a
									concept for{' '}
									<span className='text-yellow-500'>process optimization</span>{' '}
									in the context of 'job references'. This encompassed an
									in-depth analysis of both the current state and the desired
									outcome, followed by the design of process models and
									implementation strategies.
								</p>
							</div>
							<br className='w-[2px] bg-white' />

							<div className=' flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg'>
								<h1 className='text-[1.4rem] font-semibold sm:text-xl'>
									Executive of the Computer Science Student Council
								</h1>
								<span className=' text-[.9rem] font-semibold text-gray-500 sm:text-base'>
									University of Applied Science Karlsruhe
								</span>
								<span className=' text-[.9rem] font-semibold text-yellow-500 sm:text-base'>
									March 2020 - March 2022
								</span>
								<p className=' text-[.9rem] text-justify break-words text-gray-500'>
									As an Executive of the Computer Science Student Council, I
									served as a vital link between students, professors, and
									deans, representing student interests. I actively contributed
									to university-wide decisions and initiatives. Additionally, I
									played a key role in orienting new students and took charge of
									organizing networking events with companies to promote
									meaningful connections between students and business
									professionals.
								</p>
							</div>
						</div>
					</fieldset>
				</div>
				<div className='right flex-1 flex items-center justify-center'>
					<fieldset
						data-aos='zoom-in'
						className=' w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2'
					>
						<legend className=' w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500'>
							Education
						</legend>
						<div className=' relative'>
							{/* design */}
							<div className='design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] '>
								<div className='c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500'></div>
								<div className='line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]'></div>
								<div className='c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500'></div>
							</div>
							{/* design */}
							<div className=' flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg'>
								<h1 className='text-[1.4rem] font-semibold sm:text-xl'>
									B.Sc in IT Business Economics
								</h1>
								<span className=' text-[.9rem] font-semibold text-gray-500 sm:text-base'>
									University of Applied Science, Karlsruhe
								</span>
								<span className=' text-[.9rem] font-semibold text-yellow-500 sm:text-base'>
									Year 2019 - Year 2023
								</span>
								<p className=' text-[.9rem] text-justify text-gray-500'>
									I completed my Bachelor's degree in IT-Business Economics with
									a focus on the following courses:
								</p>
								<ul className='list-disc ml-5 pt-1 pb-1 text-[.9rem] text-justify text-gray-500'>
									<li>Business Process Automation</li>
									<li>Database Systems</li>
									<li>Statistics and Business Intelligence</li>
									<li>Operation Research</li>
									<li>Software Engineering</li>
									<li>Integrated Operational Systems</li>
									<li>Production Organization</li>
								</ul>
								<p className=' text-[.9rem] text-justify text-gray-500'>
									Additionally, I pursued specializations in Data Science
									through elective courses, further enhancing my proficiency in
									this field.
								</p>
							</div>
						</div>
					</fieldset>
				</div>
			</div>
		</div>
	);
};

export default Resume;
