import React from "react";
import {motion} from "framer-motion";
import TypeWriterEffect from "react-typewriter-effect";
import Jano from "../assets/Angulo,JohnRussel(1).jpg";
import Jano2 from "../assets/Angulo,JohnRussel(2).jpg";

const Main = () => {
	return (
		<div
			class="grid place-items-center pb-[10%] justify-center grid-cols-1 md:grid-cols-2"
			id="Main"
		>
			<div className="w-full px-14 pt-[15%]">
				<motion.div
					initial={{y: 100, opacity: 1}}
					whileInView={{y: 0}}
					viewport={{once: false}}
					transition={{duration: 0.6}}
					className="font-ProductSans uppercase tracking-[0.2rem] py-3 text-center md:text-left"
				>
					Welcome to my Website Portfolio
				</motion.div>
				<motion.p
					initial={{y: 100, opacity: 1}}
					whileInView={{y: 0}}
					viewport={{once: false}}
					transition={{duration: 0.7}}
					className="text-black font-semibold py-3 text-5xl md:text-7xl text-center md:text-left"
				>
					Hi, I'm <span className="text-[#ff3656]">John Russel </span>
				</motion.p>
				<motion.p
					initial={{y: 100, opacity: 1}}
					whileInView={{y: 0}}
					viewport={{once: false}}
					transition={{duration: 0.8}}
					className="py-3 text-center md:text-left"
				>
					<div className="grid place-items-center md:place-items-start">
						<div className="text-[#ff3656] font-semibold text-4xl md:text-6xl md: flex gap-2">
							{" "}
							a
							<div className="text-black font-semibold text-4xl md:text-6xl">
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
					initial={{y: 100, opacity: 1}}
					whileInView={{y: 0}}
					viewport={{once: false}}
					transition={{duration: 0.9}}
					className="py-3 px-5 md:px-0 font-ProductSans text-zinc-600 text-center md:text-left text-[20px] mb-32"
				>
					<p>
						I’m a Front End Developer, Video Editor, and Vector Artist living in
						the Philippines.
					</p>
					<p>
						Starting with creating basic websites when I was in college, taking
						video editing and videography as a hobby, and making different
						vector art really helped me boost my creative side.
					</p>
				</motion.div>

				<div className="font-Gilroy uppercase text-center md:text-left mb-16">
					<motion.p
						initial={{y: 100, opacity: 1}}
						whileInView={{y: 0}}
						viewport={{once: false}}
						transition={{duration: 1}}
						className="pb-8 text-zinc-700"
					>
						Here are my social links
					</motion.p>

					<motion.div
						initial={{y: 100, opacity: 1}}
						whileInView={{y: 0}}
						viewport={{once: false}}
						transition={{duration: 1.1}}
						className="flex col-span-3 text-center place-items-center gap-10 justify-center md:justify-start text-white md:text-black"
					>
						<a href="https://www.facebook.com/janoangulo1219" target="_blank">
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

						<a href="https://www.instagram.com/jaknows19/?hl=en" target="_blank">
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

			<motion.div
				initial={{x: -40, opacity: 1}}
				whileInView={{x: 0}}
				viewport={{once: false}}
				transition={{duration: 0.9}}
				className="w-[80vh] px-14 pt-[5%]"
			>
				<motion.div
					whileHover={{scale: 1.04}}
					className="h-[80vh] grid place-items-center bg-[#f5f7fa] drop-shadow-2xl rounded-3xl"
				>
					<img className="h-[90%] w-[90%] rounded-3xl" src={Jano} />
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Main;
