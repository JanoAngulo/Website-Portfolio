import React from "react";
import {motion} from "framer-motion";
import JRLA from "../assets/JRLA-Resume.png";
import CV from "../assets/John_Russel_L._Angulo_CV.pdf";

const Resume = () => {
	return (
		<div className="w-full px-14 " id="Resume">
			<div className="pb-10 md:pb-0">
				<motion.div
					initial={{y: 40}}
					whileInView={{y: 0}}
					viewport={{once: false}}
					transition={{duration: 0.8}}
					className="font-Gilroy text-lg text-[#ff3656] text-center uppercase"
				>
					Know me more
				</motion.div>

				<motion.div
					initial={{y: 40}}
					whileInView={{y: 0}}
					viewport={{once: false}}
					transition={{duration: 1}}
					className="font-Gilroy text-black font-semibold py-3 text-5xl md:text-7xl mb-4 md:mb-12 text-center"
				>
					My Resume
				</motion.div>
			</div>

			<div className="grid col-auto
			md:px-4 
			md:grid-cols-1
			lg:grid-cols-3">
				<div className="pb-10 
				md:col-span-2">

					<div className="grid grid-cols-3">
						<div className="border-b-4 w-full  mb-4 border-red-700 visible md:invisible flex md:hidden" />
						<div className="text-3xl w-full font-Gilroy grid
						md:w-full
						lg:w-[90vw]
						pl-0
						md:pl-2
						md:text-center
						lg:text-left">
							Education
						</div>
						<div className="border-b-4 w-full  mb-4 border-red-700 visible md:invisible flex md:hidden" />
					</div>

					<div className="pr-0
					lg:pr-10
					xl:pr-10">
						<div className="flex place-items-center justify-items-center pt-5">

							<div className="hidden lg:flex">
								<div className="w-5 h-5 rounded-full bg-[#dadde4] flex place-content-center place-items-center justify-items-center ">
									<div className="w-3 h-3 rounded-full bg-[white]"></div>
								</div>
							</div>
							<div className="border-2 w-[2vh] border-[#dadde4] hidden lg:flex"></div>

							<div className="w-full h-full rounded-lg bg-[#f5f7fa] hover:bg-[#ff3656] hover:text-white drop-shadow-xl flex place-content-center place-items-center justify-items-center ">
								<div className="px-6 py-4 w-full">
									<p className="font-Gilroy text-2xl pb-3">
										{" "}
										Bachelor of Science in Information and Techology
									</p>
									<p className="font-ProductSans text-lg">
										Major in Web and Mobile Development
									</p>
									<p className="font-ProductSans text-lg">
										Bulacan State University 
									</p>

									<p className="font-ProductSans">College | 2018-Present</p>
									<div className="h-[5vh]">
										<div className="border-b-4 pb-5 border-[#e6e7ec]" />
									</div>
									<p className="font-ProductSans">
									I took my degree at Bulacan State University for 4yrs where I have spent learning different IT-related studies and enhancing my skills throughout those years. {" "}
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="pr-0 lg:pr-10">
						<div className="flex place-items-center justify-items-center py-4">
							
							<div className="hidden lg:flex">
								<div className="w-5 h-5 rounded-full bg-[#dadde4] flex place-content-center place-items-center justify-items-center ">
									<div className="w-3 h-3 rounded-full bg-[white]"></div>
								</div>
							</div>
							<div className="border-2 w-[2vh] border-[#dadde4] hidden lg:flex"></div>

							<div className="w-full h-full rounded-lg bg-[#f5f7fa] hover:bg-[#ff3656] hover:text-white drop-shadow-xl flex place-content-center place-items-center justify-items-center ">
								<div className="px-6 py-4 w-full">
									<p className="font-Gilroy text-2xl pb-3">
										Science, Technology, Engineering, and Mathematics
									</p>
									<p className="font-ProductSans text-lg">
										La Consolacion University Philippines
									</p>
									<p className="font-ProductSans">
										SeniorHighschool | 2016-2018
									</p>
									<p className="font-ProductSans">
										JuniorHighschool | 2012-2016
									</p>
									<div className="h-[5vh]">
										<div className="border-b-4 pb-5 border-[#e6e7ec]" />
									</div>
									<p className="font-ProductSans">
									I spent my junior year at LCUP which helped me become a better person since it’s a Catholic school. I took the strand STEM in LCUP exposed to complex mathematical and scientific theories and concepts that served as a foundation for my college.{" "}
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-5">
						<div className="border-b-4 w-full  mb-4 border-red-700 visible md:invisible flex md:hidden" />
						<div className="text-3xl col-span-3 pl-0 md:pl-2 w-full md:w-[90vw] font-Gilroy text-center md:text-left md:flex">
							Work Experience
						</div>
						<div className="border-b-4 w-full  mb-4 border-red-700 visible md:invisible flex md:hidden" />
					</div>

					<div className=" pr-0 lg:pr-10">
						<div className="flex place-items-center justify-items-center pt-5">
							
							<div className="hidden lg:flex">
								<div className="w-5 h-5 rounded-full bg-[#dadde4] flex place-content-center place-items-center justify-items-center ">
									<div className="w-3 h-3 rounded-full bg-[white]"></div>
								</div>
							</div>
							<div className="border-2 w-[2vh] border-[#dadde4] hidden lg:flex"></div>

							<div className="w-full h-full rounded-lg bg-[#f5f7fa] hover:bg-[#ff3656] hover:text-white drop-shadow-xl flex">
								<div className="p-7 w-full">
									<p className="font-Gilroy text-2xl pb-3">
										{" "}
										Freelance Video Editor
									</p>
									<p className="font-ProductSans text-lg">
										Upwork | 2021-Present
									</p>
									<p className="font-ProductSans"></p>
									<div className="h-[5vh]">
										<div className="border-b-4 pb-5 border-[#e6e7ec]" />
									</div>
									<p className="font-ProductSans">
										Editing 2D motion graphics, Commercials, Timeline Video, and
										Interview/Testimonialvideos.{" "}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full">
					<div className="grid grid-cols-8 md:grid-cols-6">
						<div className="border-b-4 mb-9  border-red-700 visible md:invisible flex md:hidden"></div>
						<div className="text-3xl col-span-6 font-Gilroy text-center place-items-center justify-center
						">
							You can download my resume here
						</div>
						<div className="border-b-4 mb-9 border-red-700 visible md:invisible flex md:hidden"></div>
					</div>

					<div className="pr-0">
						<div className="flex place-items-center justify-items-center pt-5">
							<div className="w-full h-full rounded-lg bg-[#f5f7fa] drop-shadow-xl flex place-items-center justify-center">
								<div className="p-6 ">
									<a href={CV} target="_blank">
									<button className="w-full h-10 mb-5 font-Gilroy rounded-xl shadow-xl bg-[#ffca26] hover:bg-[#ff3656] 
									text-black hover:text-white ">Download CV</button>
									</a>
									<motion.img  whileHover={{scale: 1.02}} src={JRLA} alt="Resume" className="h-full rounded-xl"></motion.img>


								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default Resume;
