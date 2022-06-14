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
				className="font-Gilroy text-[#ff3656] text-lg"
			>
				Features
			</motion.div>

			<motion.div
				initial={{x: -40}}
				whileInView={{x: 0}}
				viewport={{once: false}}
				transition={{duration: 1}}
				className="font-Gilroy text-black font-semibold py-3 text-5xl md:text-7xl  md:mb-12"
			>
				What I do
			</motion.div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-32 place-items-center justify-center">
				<motion.div 
					initial={{y: 50}}
					whileInView={{y: 0}}
					viewport={{once: false}}
					transition={{duration: 0.7}}
				>
					<motion.div
						whileHover={{y: -10}}
						// whileTap={{scale: 0.9}}
						className="grid w-full md:w-[29vw] h-full md:h-[18vw] place-items-center justify-center hover:bg-[#ff3656] hover:text-white bg-[#f5f7fa] drop-shadow-xl rounded-2xl"
					>
						<div className="grid md:w-[23vw] p-[5%] md:p-0 md:h-[13vw] ">
							<i className="fa-solid fa-laptop-code text-5xl flex">
								<p className="grid text-2xl px-5 font-Gilroy place-items-center md:hidden">Front End Developer</p>
							</i>
							<p className="text-2xl font-Gilroy invisible md:visible"> Front End Developer</p>
							<p className="w-full ">
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
				>
					<motion.div
						whileHover={{y: -10}}
						// whileTap={{scale: 0.9}}
						className="grid w-full md:w-[29vw] h-full md:h-[18vw] place-items-center justify-center hover:bg-[#ff3656] hover:text-white bg-[#f5f7fa] drop-shadow-xl rounded-2xl"
					>
						<div className="grid md:w-[23vw] p-[5%] md:p-0 md:h-[13vw] ">
							<i class="fa-solid fa-clapperboard text-5xl flex">
								<p className="grid text-2xl px-5 font-Gilroy place-items-center md:hidden">Video Editing</p>
							</i>
							<p className="text-2xl font-Gilroy invisible md:visible">Video Editing</p>
							<p className="w-full">
								My love for capturing moments and events became much more
								relevant. Jumping right into Adobe Premiere Pro and After
								Effects gave me the creativity in every space that I verge into.
							</p>
						</div>
					</motion.div>
				</motion.div>

				<motion.div
					initial={{y: 50}}
					whileInView={{y: 0}}
					viewport={{once: false}}
					transition={{duration: 0.9}}
				>
					<motion.div
						whileHover={{y: -10}}
						// whileTap={{scale: 0.9}}
						className="grid w-full md:w-[29vw] h-full md:h-[18vw] place-items-center justify-center hover:bg-[#ff3656] hover:text-white bg-[#f5f7fa] drop-shadow-xl rounded-2xl"
					>
						<div className="grid md:w-[23vw] p-[5%] md:p-0 md:h-[13vw]  ">
							<i class="fa-solid fa-vector-square text-5xl flex">
								<p className="grid text-2xl px-5 font-Gilroy place-items-center md:hidden">Vector Art</p>
							</i>
							<p className="text-2xl font-Gilroy invisible md:visible">Vector Art</p>
							<p className="w-full">
								I also tried doing digital painting using Adobe Photoshop. With
								this love for creating Vector Art I too now also make motion
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
