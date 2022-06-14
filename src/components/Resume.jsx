import React from "react";
import {motion} from "framer-motion";

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

			<div className="pb-10">
				<div className="grid grid-cols-3">
					<div className="border-b-4 w-full  mb-4 border-red-700 visible md:invisible flex md:hidden" />
					<div className="text-3xl pl-0 md:pl-2 w-full md:w-[90vw] font-Gilroy text-center md:text-left">
						Education
					</div>
					<div className="border-b-4 w-full  mb-4 border-red-700 visible md:invisible flex md:hidden" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2">
					<div className=" pr-0 md:pr-10">
						<div className="flex place-items-center justify-items-center py-5">
							<div className="hidden md:flex">
								<div className="w-5 h-5 rounded-full bg-[#dadde4] flex place-content-center place-items-center justify-items-center ">
									<div className="w-3 h-3 rounded-full bg-[white]"></div>
								</div>
							</div>
							<div className="border-2 w-[2vh] border-[#dadde4] hidden md:flex"></div>

							<div className="w-full h-full md:h-[32vh] rounded-lg bg-[#f5f7fa] hover:bg-[#ff3656] hover:text-white drop-shadow-xl flex place-content-center place-items-center justify-items-center ">
								<div className="p-6 ">
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

							<div className="w-full h-full md:h-[32vh] rounded-lg bg-[#f5f7fa] hover:bg-[#ff3656] hover:text-white drop-shadow-xl flex place-content-center place-items-center justify-items-center ">
								<div className="p-6 ">
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
				</div>
			</div>

			<div className="pb-10">
				<div className="grid grid-cols-5">
					<div className="border-b-4 w-full  mb-4 border-red-700 visible md:invisible flex md:hidden" />
					<div className="text-3xl col-span-3 pl-0 md:pl-2 w-full md:w-[90vw] font-Gilroy text-center md:text-left md:flex">
						Work Experience
					</div>
					<div className="border-b-4 w-full  mb-4 border-red-700 visible md:invisible flex md:hidden" />
				</div>

				<div className="grid ">
					<div className=" pr-0 md:pr-10">
						<div className="flex place-items-center justify-items-center py-5">
							<div className="hidden md:flex">
								<div className="w-5 h-5 rounded-full bg-[#dadde4] flex place-content-center place-items-center justify-items-center ">
									<div className="w-3 h-3 rounded-full bg-[white]"></div>
								</div>
							</div>
							<div className="border-2 w-[2vh] border-[#dadde4] hidden md:flex"></div>
							<div className="w-full h-full rounded-lg bg-[#f5f7fa] hover:bg-[#ff3656] hover:text-white drop-shadow-xl flex">
								<div className="p-6 w-full">
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
			</div>

			<div className="pb-10">

				<div className="grid grid-cols-4 ">
					<div className="border-b-4 mb-4  border-red-700 visible md:invisible flex md:hidden" />
					<div className="text-3xl col-span-2 pl-0 md:pl-2 md:w-[90vw] font-Gilroy text-center md:text-left md:flex">
						Organizations
					</div>
					<div className="border-b-4 mb-4 border-red-700 visible md:invisible flex md:hidden" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3">
					<div className=" pr-0 md:pr-10">
						<div className="flex place-items-center justify-items-center py-5">
							<div className="hidden md:flex">
								<div className="w-5 h-5 rounded-full bg-[#dadde4] flex place-content-center place-items-center justify-items-center ">
									<div className="w-3 h-3 rounded-full bg-[white]"></div>
								</div>
							</div>
							<div className="border-2 w-[2vh] border-[#dadde4] hidden md:flex"></div>

							<div className="w-full h-full rounded-lg bg-[#f5f7fa] hover:bg-[#ff3656] hover:text-white drop-shadow-xl flex place-content-center place-items-center justify-items-center ">
								<div className="p-6 ">
									<p className="font-Gilroy text-2xl pb-3"> Art Editor</p>
									<p className="font-ProductSans text-lg">
										{" "}
										Cursor Publication
									</p>
									<p className="font-ProductSans">
										September 1, 2021 | Present
									</p>
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

					<div className=" pr-0 md:pr-10">
						<div className="flex place-items-center justify-items-center py-5">
							<div className="hidden md:flex">
								<div className="w-5 h-5 rounded-full bg-[#dadde4] flex place-content-center place-items-center justify-items-center ">
									<div className="w-3 h-3 rounded-full bg-[white]"></div>
								</div>
							</div>
							<div className="border-2 w-[2vh] border-[#dadde4] hidden md:flex"></div>

							<div className="w-full h-full rounded-lg bg-[#f5f7fa] hover:bg-[#ff3656] hover:text-white drop-shadow-xl flex place-content-center place-items-center justify-items-center ">
								<div className="p-6 ">
									<p className="font-Gilroy text-2xl pb-3">
										{" "}
										Head Video Editor
									</p>
									<p className="font-ProductSans text-lg">Cursor Publication</p>
									<p className="font-ProductSans">
										May 31, 2019 - August 31, 2021
									</p>
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

					<div className=" pr-0 md:pr-10">
						<div className="flex place-items-center justify-items-center py-5">
							<div className="hidden md:flex">
								<div className="w-5 h-5 rounded-full bg-[#dadde4] flex place-content-center place-items-center justify-items-center ">
									<div className="w-3 h-3 rounded-full bg-[white]"></div>
								</div>
							</div>
							<div className="border-2 w-[2vh] border-[#dadde4] hidden md:flex"></div>
							<div className="w-full h-full rounded-lg bg-[#f5f7fa] hover:bg-[#ff3656] hover:text-white drop-shadow-xl flex place-content-center place-items-center justify-items-center ">
								<div className="p-6 ">
									<p className="font-Gilroy text-2xl pb-3">Video Editor</p>
									<p className="font-ProductSans text-lg">Cursor Publication</p>
									<p className="font-ProductSans">February 2019 - Present</p>
									<div className="h-[5vh]">
										<div className="border-b-4 pb-5 border-[#e6e7ec]" />
									</div>
									<p className="font-ProductSans">
										Editing 2D motion graphics, Commercials, Timeline Video, and
										Interview/Testimonial videos.{" "}
									</p>
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
