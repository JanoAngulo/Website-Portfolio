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

			<div className="grid col-auto md:grid-cols-3">
				<div className="pb-10 md:col-span-2">
					<div className="grid grid-cols-3">
						<div className="border-b-4 w-full  mb-4 border-red-700 visible md:invisible flex md:hidden" />
						<div className="text-3xl pl-0 md:pl-2 w-full md:w-[90vw] font-Gilroy text-center md:text-left">
							Education
						</div>
						<div className="border-b-4 w-full  mb-4 border-red-700 visible md:invisible flex md:hidden" />
					</div>

					<div className=" pr-0 md:pr-10">
						<div className="flex place-items-center justify-items-center py-5">
							<div className="hidden md:flex">
								<div className="w-5 h-5 rounded-full bg-[#dadde4] flex place-content-center place-items-center justify-items-center ">
									<div className="w-3 h-3 rounded-full bg-[white]"></div>
								</div>
							</div>
							<div className="border-2 w-[2vh] border-[#dadde4] hidden md:flex"></div>

							<div className="w-full h-full rounded-lg bg-[#f5f7fa] hover:bg-[#ff3656] hover:text-white drop-shadow-xl flex place-content-center place-items-center justify-items-center ">
								<div className="px-6 py-4">
									<p className="font-Gilroy text-2xl pb-3">
										{" "}
										Bachelor of Science in Information and Techology
									</p>
									<p className="font-ProductSans text-lg">
										Major in Web and Mobile Development
									</p>
									<p className="font-ProductSans">College | 2018-Present</p>
									<div className="h-[5vh]">
										<div className="border-b-4 pb-5 border-[#e6e7ec]" />
									</div>
									<p className="font-ProductSans">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
										urna est, dignissim vitae orci et, pharetra tristique elit.
										Quisque porttitor ante nec sapien maximus euismod. In sed
										ligula a nisl mattis consectetur nec vitae sapien.{" "}
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="pr-0 md:pr-10">
						<div className="flex place-items-center justify-items-center py-5">
							<div className="hidden md:flex">
								<div className="w-5 h-5 rounded-full bg-[#dadde4] flex place-content-center place-items-center justify-items-center ">
									<div className="w-3 h-3 rounded-full bg-[white]"></div>
								</div>
							</div>
							<div className="border-2 w-[2vh] border-[#dadde4] hidden md:flex"></div>

							<div className="w-full h-full rounded-lg bg-[#f5f7fa] hover:bg-[#ff3656] hover:text-white drop-shadow-xl flex place-content-center place-items-center justify-items-center ">
								<div className="px-6 py-4">
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
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
										urna est, dignissim vitae orci et, pharetra tristique elit.
										Quisque porttitor ante nec sapien maximus euismod. In sed
										ligula a nisl mattis consectetur nec vitae sapien.{" "}
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

					<div className=" pr-0 md:pr-10">
						<div className="flex place-items-center justify-items-center pt-5">
							<div className="hidden md:flex">
								<div className="w-5 h-5 rounded-full bg-[#dadde4] flex place-content-center place-items-center justify-items-center ">
									<div className="w-3 h-3 rounded-full bg-[white]"></div>
								</div>
							</div>
							<div className="border-2 w-[2vh] border-[#dadde4] hidden md:flex"></div>
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
						<div className="text-3xl col-span-6 font-Gilroy md:flex text-center place-items-center justify-center">
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
									<motion.img  whileHover={{scale: 1.02}} src={JRLA} alt="Resume" className="h-full rounded-xl"></motion.img>
									</a>

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
