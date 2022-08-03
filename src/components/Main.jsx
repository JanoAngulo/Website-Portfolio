import React from "react";
import {motion} from "framer-motion";
import TypeWriterEffect from "react-typewriter-effect";
import Jano from "../assets/Angulo,JohnRussel(1).jpg";

let Variants, ImgVariant = {};
const isMobile = window.innerWidth < 1024; //Add the width you want to check for here (now 768px)
if (!isMobile) {
	Variants = {
		initial: {y: 100, opacity: 1},
		whileInView: {y: 0},
		viewport: {once: false},
	};

	ImgVariant = {
		initialImg: {x: -40, opacity: 1},
		whileInViewImg: {x: 0},
		viewportImg: {once: false},
	};
}

const Main = () => {
	return (
		<div>
			<div
				id="Main"
				className="grid place-items-center pb-[10%] justify-center w-full
			grid-cols-1
			md:grid-cols-1
			lg:grid-cols-2
			xl:grid-cols-2
			"
			>
				<div>
					<div className="w-full px-14 pt-[15%]">
						<motion.div
							variants={Variants}
							initial= "initial"
							whileInView= "whileInView"
							viewport= "viewport"
							transition={{duration: 0.6}}
							className="font-ProductSans uppercase tracking-[0.2rem] py-3 
						text-center
						text-base
						md:text-center 
						lg:text-left
						md:text-lg
						lg:text-xs
						xl:text-lg"
						>
							Welcome to my Website Portfolio
						</motion.div>

						<motion.p
							variants={Variants}
							initial= "initial"
							whileInView= "whileInView"
							viewport= "viewport"
							transition={{duration: 0.7}}
							className="text-black font-semibold text-center 
						md:py-3 
						lg:py-0
						xl:py-3
						md:text-center
						lg:text-left
						text-3xl 
						md:text-6xl
						lg:text-4xl
						xl:text-6xl"
						>
							Hi, I'm <span className="text-[#ff3656]">John Russel </span>
						</motion.p>

						<motion.p
							variants={Variants}
							initial= "initial"
							whileInView= "whileInView"
							viewport= "viewport"
							transition={{duration: 0.8}}
							className="py-3 
						text-center
						md:text-center
						lg:text-left
						xl:text-left"
						>
							<div
								className="grid 
						place-items-center
						md:place-items-center
						lg:place-items-start
						xl:place-items-start"
							>
								<div
									className="text-[#ff3656] font-semibold flex gap-2
							text-2xl
							md:text-5xl
							lg:text-3xl
							xl:text-5xl"
								>
									{" "}
									a
									<div
										className="text-black font-semibold
								text-2xl 
								md:text-5xl 
								lg:text-3xl
								xl:text-5xl"
									>
										<TypeWriterEffect
											loop={10}
											startDelay={2000}
											cursorColor="black"
											multiTextLoop={true}
											multiText={[
												"Front End Developer.",
												"Video Editor.",
												"Vector Artist."
											]}
											multiTextDelay={4000}
											typeSpeed={70}
										/>
									</div>
								</div>
							</div>
						</motion.p>

						<motion.div
							variants={Variants}
							initial= "initial"
							whileInView= "whileInView"
							viewport= "viewport"
							transition={{duration: 0.9}}
							className="font-ProductSans text-zinc-600 
						pb-3
						pt-3
						text-center
						md:text-center
						md:px-20
						lg:px-0
						xl:px-0
						text-base
						xl:text-lg
						lg:text-left
						xl:text-left
						lg:mb-6
						2xl:mb-40"
						>
							<p>
								I’m a Front End Developer, Video Editor, and Vector Artist
								living in the Philippines.
							</p>
							<p>
								Starting with creating basic websites when I was in college,
								taking video editing and videography as a hobby, and making
								different vector art really helped me boost my creative side.
							</p>
						</motion.div>

						<div
							className="
						w-full
						hidden
						md:hidden
						lg:grid
						xl:grid"
						>
							<motion.div
							variants={Variants}
							initial= "initial"
							whileInView= "whileInView"
							viewport= "viewport"
								transition={{duration: 1}}
								className="pb-8 text-zinc-700 uppercase font-Gilroy
							md:text-left 
							lg:text-base
							"
							>
								Here are my social links
							</motion.div>
						</div>

						<div
							className="
						w-full
						hidden
						md:hidden
						lg:grid
						xl:grid"
						>
							<motion.div
							variants={Variants}
							initial= "initial"
							whileInView= "whileInView"
							viewport= "viewport"
								transition={{duration: 1.1}}
								className="flex col-span-3 text-center place-items-center gap-10 justify-center md:justify-start text-white md:text-black"
							>
								<a
									href="https://www.facebook.com/janoangulo1219"
									target="_blank"
								>
									<motion.div
										whileHover={{y: -10}}
										whileTap={{scale: 0.9}}
										className="w-16 h-16 grid place-items-center justify-center rounded-lg hover:text-white hover:bg-[#ff3656] text-2xl bg-[#ff3656] md:bg-[#f5f7fa] drop-shadow-xl"
									>
										<i class=" fa-brands fa-facebook-f"></i>
									</motion.div>
								</a>

								<a href="https://www.behance.net/JRLA" target="_blank">
									<motion.div
										whileHover={{y: -10}}
										whileTap={{scale: 0.9}}
										className="w-16 h-16 grid place-items-center justify-center rounded-lg hover:text-white hover:bg-[#ff3656] text-2xl bg-[#ff3656] md:bg-[#f5f7fa] drop-shadow-xl"
									>
										<i class="fa-brands fa-behance"></i>
									</motion.div>
								</a>

								<a
									href="https://www.instagram.com/jaknows19/?hl=en"
									target="_blank"
								>
									<motion.div
										whileHover={{y: -10}}
										whileTap={{scale: 0.9}}
										className="w-16 h-16 grid place-items-center justify-center rounded-lg hover:text-white hover:bg-[#ff3656] text-3xl bg-[#ff3656] md:bg-[#f5f7fa] drop-shadow-xl"
									>
										<i class="fa-brands fa-instagram"></i>
									</motion.div>
								</a>
							</motion.div>
						</div>
					</div>
				</div>

				<div className="w-full h-full grid place-items-center">
					<motion.div
						variants={ImgVariant}
						initial="initialImg"
						whileInView="whileInViewImg"
						viewport="viewportImg"
						transition={{duration: 0.9}}
						className="p-4

				h-auto
				md:mt-[3rem]
				w-[20rem]
				md:w-[30rem]
				lg:w-[25rem]
				xl:w-[30rem]
				2xl:w-[40rem]
				"
					>
						<motion.div
							whileHover={{scale: 1.04}}
							className="bg-[#f5f7fa] drop-shadow-2xl rounded-3xl"
						>
							<div className="p-5">
								<img className="rounded-3xl" src={Jano} />
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>

			<div className=" font-Gilroy mb-16 grid place-items-center">
				<motion.div
					variants={Variants}
					initial= "initial"
					whileInView= "whileInView"
					viewport= "viewport"
					transition={{duration: 1}}
					className="pb-5 text-zinc-700 text-center uppercase font-Gilroy
					w-full
					md:grid
					lg:hidden
					xl:hidden"
				>
					Here are my social links
				</motion.div>

				<motion.div
					variants={Variants}
					initial= "initial"
					whileInView= "whileInView"
					viewport= "viewport"
					transition={{duration: 1.1}}
					className="flex text-center place-items-center gap-10 justify-center md:justify-center text-white md:text-black
					w-full
					md:flex
					lg:hidden
					xl:hidden"
				>
					<a href="https://www.facebook.com/janoangulo1219" target="_blank">
						<motion.div
							whileHover={{y: -10}}
							whileTap={{scale: 0.9}}
							className="w-16 h-16 grid place-items-center justify-center rounded-lg hover:text-white hover:bg-[#ff3656] 
							text-2xl drop-shadow-xl
							text-white
							bg-[#ff3656] 
							md:bg-[#ff3656]
							lg:bg-[#f5f7fa]"
						>
							<i class=" fa-brands fa-facebook-f"></i>
						</motion.div>
					</a>

					<a href="https://www.behance.net/JRLA" target="_blank">
						<motion.div
							whileHover={{y: -10}}
							whileTap={{scale: 0.9}}
							className="w-16 h-16 grid place-items-center justify-center rounded-lg hover:text-white hover:bg-[#ff3656] 
							text-2xl drop-shadow-xl
							text-white
							bg-[#ff3656] 
							md:bg-[#ff3656]
							lg:bg-[#f5f7fa]"
						>
							<i class="fa-brands fa-behance"></i>
						</motion.div>
					</a>

					<a href="https://www.instagram.com/jaknows19/?hl=en" target="_blank">
						<motion.div
							whileHover={{y: -10}}
							whileTap={{scale: 0.9}}
							className="w-16 h-16 grid place-items-center justify-center rounded-lg hover:text-white hover:bg-[#ff3656] 
							text-3xl drop-shadow-xl
							text-white
							bg-[#ff3656] 
							md:bg-[#ff3656]
							lg:bg-[#f5f7fa]"
						>
							<i class="fa-brands fa-instagram"></i>
						</motion.div>
					</a>
				</motion.div>
			</div>
		</div>
	);
};

export default Main;
