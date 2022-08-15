import React from "react";
import {motion} from "framer-motion";
import JRLA from "../assets/JRLA-Resume-updated.png";
import CV from "../assets/John_Russel_L._Angulo_CV.pdf";

let Variants = {};
const isMobile = window.innerWidth < 1024; //Add the width you want to check for here (now 768px)
if (!isMobile) {
	Variants = {
		initial: {y: 40},
		whileInView: {y: 0},
		viewport: {once: false},
	};
}

const Resume = () => {
	return (
		<div className="w-full 2xl:px-14 xl:px-14 lg:px-5 md:px-5 px-5" id="Resume">
			<div className="pb-10 md:pb-0">
				<motion.div
					variants = {Variants}
					initial= "initial"
					whileInView= "whileInView"
					viewport= "viewport"
					transition={{duration: 0.8}}
					className="font-Gilroy text-lg text-[#ff3656] text-center uppercase"
				>
					Know me more
				</motion.div>

				<motion.div
					variants = {Variants}
					initial= "initial"
					whileInView= "whileInView"
					viewport= "viewport"
					transition={{duration: 1}}
					className="font-Gilroy text-black font-semibold py-3 text-5xl md:text-7xl mb-4 md:mb-12 text-center"
				>
					My Resume
				</motion.div>
			</div>

			<div className="grid col-auto
			md:px-4 
			md:grid-cols-1
			lg:grid-cols-1
			xl:grid-cols-4
			2xl:grid-cols-3">

				<div className="
				pb-10 
				md:col-span-2">

					<div className="
					grid 
					grid-cols-1
					md:grid-cols-3
					">

						<div className="border-b-4 w-full mb-4 border-[#ff3656]
						hidden
						md:flex
						md:visible  
						lg:hidden
						" />

						<div className=" w-full font-Gilroy grid 
						pl-0
						text-3xl
						text-center
						md:text-center
						lg:text-left
						xl:text-left">
						Education
						</div>

						<div className="border-b-4 w-full  mb-4 border-[#ff3656] flex
						invisible 
						md:visible  
						lg:hidden
						" />
						
					</div>

					<div className="pr-0
					lg:pr-10
					xl:pr-10">
						<div className="flex place-items-center justify-items-center pt-5">

							<div className="hidden lg:flex">
								<div className="w-5 h-5 rounded-full bg-[#ffca26] flex place-content-center place-items-center justify-items-center ">
									<div className="w-3 h-3 rounded-full bg-[white]"></div>
								</div>
							</div>
							<div className="border-2 w-[2vh] border-[#ffca26] hidden lg:flex"></div>

							<div className="w-full h-full rounded-lg ease-linear duration-200 bg-[#f5f7fa] hover:bg-[#ff3656] hover:text-white drop-shadow-xl flex place-content-center place-items-center justify-items-center ">
								<div className="px-6 py-4 w-full">
									<p className="font-Gilroy pb-3
									text-xl
									md:text-2xl
									lg:text-2xl
									xl:text-[20px]
									2xl:text-3xl">
										{" "}
										Bachelor of Science in Information and Techology
									</p>

									<div className="font-ProductSans
									text-[18px]
									2xl:text-[20px]">
									<p>Major in Web and Mobile Development</p>
									<p>Bulacan State University </p>
									<p>College | August 2018 - July 15, 2022</p>
									</div>


									<div className="h-[2vh]">
										<div className="border-b-4 mt-3 border-[#ffca26]" />
									</div>
									
									<p className="font-ProductSans
									xl:text-[16px]
									2xl:text-base">
									I took my degree at Bulacan State University for 4yrs where I have spent learning different IT-related studies and enhancing my skills throughout those years. {" "}
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="pr-0 lg:pr-10">
						<div className="flex place-items-center justify-items-center py-4">
							
							<div className="hidden lg:flex">
								<div className="w-5 h-5 rounded-full bg-[#ffca26] flex place-content-center place-items-center justify-items-center ">
									<div className="w-3 h-3 rounded-full bg-[white]"></div>
								</div>
							</div>
							<div className="border-2 w-[2vh] border-[#ffca26] hidden lg:flex"></div>

							<div className="w-full h-full rounded-lg ease-linear duration-200 bg-[#f5f7fa] hover:bg-[#ff3656] hover:text-white drop-shadow-xl flex place-content-center place-items-center justify-items-center ">
								<div className="px-6 py-4 w-full">
									<p className="font-Gilroy pb-3
									text-xl
									md:text-2xl
									lg:text-2xl
									xl:text-[20px]
									2xl:text-3xl
									">
										Science, Technology, Engineering, and Mathematics
									</p>

									<div className="font-ProductSans
									text-[18px]
									2xl:text-[20px]">
									<p>La Consolacion University Philippines</p>
									<p>Senior Highschool | 2016-2018</p>
									<p>Junior Highschool | 2012-2016</p>
									</div>


									<div className="h-[2vh]">
										<div className="border-b-4 mt-3 border-[#ffca26]" />
									</div>
									<p className="font-ProductSans
									xl:text-[16px]
									2xl:text-base">
									I spent my junior year at LCUP which helped me become a better person since it’s a Catholic school. I took the strand STEM in LCUP exposed to complex mathematical and scientific theories and concepts that served as a foundation for my college.{" "}
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="
						grid 
						grid-cols-1
						md:grid-cols-5">
						<div className="border-b-4 w-full  mb-6 border-[#ff3656]
						hidden
						md:flex
						md:visible  
						lg:hidden
						" />

						<div className="col-span-3 font-Gilroy grid
						pl-0
						py-5
						md:py-3
						xl:py-2
						text-3xl
						text-center
						md:text-center
						lg:text-left
						xl:text-left">
						Work Experience
						</div>

						<div className="border-b-4 w-full  mb-6 border-[#ff3656]
						hidden
						md:flex
						md:visible  
						lg:hidden" />
					</div>

					<div className=" pr-0 lg:pr-10">
						<div className="flex place-items-center justify-items-center pt-5">
							
							<div className="hidden lg:flex">
								<div className="w-5 h-5 rounded-full bg-[#ffca26] flex place-content-center place-items-center justify-items-center ">
									<div className="w-3 h-3 rounded-full bg-white"></div>
								</div>
							</div>
							<div className="border-2 w-[2vh] border-[#ffca26] hidden lg:flex"></div>

							<div className="w-full h-full rounded-lg ease-linear duration-200 bg-[#f5f7fa] hover:bg-[#ff3656] hover:text-white drop-shadow-xl flex">
								<div className="p-7 w-full">
									<p className="font-Gilroy pb-3
										text-xl
										md:text-2xl
										lg:text-2xl
										xl:text-[20px]
										2xl:text-3xl">
										{" "}
										Freelance Video Editor
									</p>
									<div className="font-ProductSans
									text-[18px]
									2xl:text-[20px]">
									<p>Upwork | 2021 - July 2022</p>
									</div>

									<p className="font-ProductSans"></p>
									<div className="h-[2vh]">
										<div className="border-b-4 mt-3 border-[#ffca26] " />
									</div>
									<p className="font-ProductSans
									xl:text-[16px]
									2xl:text-base">
										Editing 2D motion graphics, Commercials, Timeline Video, and
										Interview / Testimonialvideos.{" "}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full 
				xl:col-span-2
				2xl:col-span-1">
					<div className="
					grid 
					grid-cols-1
					">

						<div className="border-b-4 mb-4 border-[#ff3656]
						hidden
						md:flex
						md:visible  
						lg:hidden">
						</div>

						<div className=" col-span-6 font-Gilroy text-center place-items-center justify-center
						text-xl
						md:text-3xl
						lg:text-2xl
						xl:text-3xl">
						You can download my resume here
						</div>

						<div className="border-b-4 mt-4 border-[#ff3656]
						hidden
						md:flex
						md:visible  
						lg:hidden">
						</div>

					</div>

					<div className="grid
					lg:w-full
					xl:w-full
					2xl:w-full">
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
