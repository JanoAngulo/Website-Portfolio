import React from "react";
import {motion} from "framer-motion";

const Features = () => {
	return (
		<div className="w-full px-14 " id="Features">
			<motion.div
				initial={{x: -40}}
				whileInView={{x: 0}}
				viewport={{once: false}}
				transition={{duration: 0.8}}
				className="font-Gilroy text-[#ff3656] text-lg
				text-center
				lg:text-left
				xl:text-left">
				Features
			</motion.div>

			<motion.div
				initial={{x: -40}}
				whileInView={{x: 0}}
				viewport={{once: false}}
				transition={{duration: 1}}
				className="font-Gilroy text-black font-semibold py-3 
				text-center
				lg:text-left
				xl:text-left
				text-5xl 
				md:text-7xl 
				md:mb-12">
				What I do
			</motion.div>

			<div className="grid pb-32 place-items-center justify-center
				gap-8
				md:gap-8
				lg:gap-4
				xl:gap-4
				2xl:gap-10
				md:grid-cols-1
				lg:grid-cols-3
				xl:grid-cols-3
				md:px-14
				lg:px-0
				2xl:px-0">

				<motion.div 
					initial={{y: 50}}
					whileInView={{y: 0}}
					viewport={{once: false}}
					transition={{duration: 0.7}}
					className="h-full">

					<motion.div
						whileHover={{y: -10}}
						// whileTap={{scale: 0.9}}
						className="grid w-full place-items-center justify-center hover:bg-[#ff3656] hover:text-white bg-[#f5f7fa] drop-shadow-xl rounded-2xl">
						<div className="grid p-5">
							<i className="fa-solid fa-laptop-code text-5xl
							lg:grid 
							hidden
							md:flex 
							md:justify-center
							lg:justify-center
							xl:justify-start">
							</i>
							<p className=" font-Gilroy
							text-[25px]
							md:text-[40px]
							lg:text-[25px]
							xl:text-2xl
							text-center
							md:text-center
							xl:text-left
							md:grid
							lg:grid
							xl:grid 
							"> Front End Developer</p>
							<p className="w-full h-full
							text-center
							xl:text-left">
								I found myself particulary interested in designing, prototyping,
								and making mockup designs that helped me pursue and become a
								good Website Developer.
							</p>
						</div>
					</motion.div>
				</motion.div>

				<motion.div 
					initial={{y: 50}}
					whileInView={{y: 0}}
					viewport={{once: false}}
					transition={{duration: 0.8}}
					className="h-full">

					<motion.div
						whileHover={{y: -10}}
						// whileTap={{scale: 0.9}}
						className="grid w-full place-items-center justify-center hover:bg-[#ff3656] hover:text-white bg-[#f5f7fa] drop-shadow-xl rounded-2xl">
						<div className="grid p-5">
							<i className="fa-solid fa-clapperboard text-5xl
							lg:grid 
							hidden
							md:flex 
							md:justify-center
							lg:justify-center
							xl:justify-start">
							</i>
							<p className=" font-Gilroy
							text-[25px]
							md:text-[40px]
							lg:text-[25px]
							xl:text-2xl
							text-center
							md:text-center
							xl:text-left
							md:grid
							lg:grid
							xl:grid 
							">Video Editor</p>
							<p className="w-full h-full
							text-center
							xl:text-left">
								Capturing moments and events became much more
								relevant. Jumping right into Adobe Premiere Pro and After
								Effects gave me the creativity in every space that I verge.
							</p>
						</div>
					</motion.div>
				</motion.div>

				<motion.div 
					initial={{y: 50}}
					whileInView={{y: 0}}
					viewport={{once: false}}
					transition={{duration: 0.9}}
					className="h-full">

					<motion.div
						whileHover={{y: -10}}
						// whileTap={{scale: 0.9}}
						className="grid w-full place-items-center justify-center hover:bg-[#ff3656] hover:text-white bg-[#f5f7fa] drop-shadow-xl rounded-2xl">
						<div className="grid p-5">
							<i className="fa-solid fa-vector-square text-5xl
							lg:grid 
							hidden
							md:flex 
							md:justify-center
							lg:justify-center
							xl:justify-start">
							</i>
							<p className=" font-Gilroy
							text-[25px]
							md:text-[40px]
							lg:text-[25px]
							xl:text-2xl
							text-center
							md:text-center
							xl:text-left
							md:grid
							lg:grid
							xl:grid 
							"> Vector Art</p>
							<p className="w-full h-full
							text-center
							xl:text-left">
								Doing digital painting using Adobe Photoshop and Adobe Illustrator,
								using this tools, I too now also make motion
								graphics or animated objects using Adobe After Effects.
							</p>
						</div>
					</motion.div>
				</motion.div>

			
			</div>
		</div>
	);
};

export default Features;
