import React from "react";
import {motion} from "framer-motion";
import HS1 from "../assets/HandShake1.jpg";
import HS2 from "../assets/HandShake2.jpg";

const Contact = () => {
	return (
		<div className="w-full 2xl:px-14 xl:px-14 lg:px-5 md:px-5 px-5 pb-16" id="Contact">
			<div className="py-10 md:pb-0">

				<motion.div
					initial={{y: 40}}
					whileInView={{y: 0}}
					viewport={{once: false}}
					transition={{duration: 0.8}}
					className="font-Gilroy text-lg text-[#ff3656] text-center uppercase"
				>
					Contact
				</motion.div>

				<motion.div
					initial={{y: 40}}
					whileInView={{y: 0}}
					viewport={{once: false}}
					transition={{duration: 1}}
					className="font-Gilroy text-black font-semibold py-3 text-5xl md:text-7xl mb-4 md:mb-12 text-center"
				>
					Contact With Me
				</motion.div>
			</div>

			<div className="grid 
          lg:gap-5
          xl:gap-10
          2xl:gap-10 
          grid-cols-1 
          md:grid-cols-1 
          lg:grid-cols-3 
          xl:grid-cols-3 
          2xl:grid-cols-3">

				<div>
					<motion.div
						initial={{y: 50}}
						whileInView={{y: 0}}
						viewport={{once: false}}
						transition={{duration: 0.7}}
					>
						<motion.div
							whileHover={{y: -10}}
							className="grid w-full place-items-center justify-center bg-[#f5f7fa] drop-shadow-xl rounded-2xl
              my-10
              md:w-full
              lg:w-full
              xl:w-full
              xl:h-[61vh]
              2xl:h-full"
						>
							<div className="h-full w-full
              md:p-[5%]
              xl:p-0
              2xl:p-[5%]">
								<div className="
                p-[5%]">
									<img src={HS2}
										className="rounded-xl mb-4 object-cover"
									></img>

									<p
										className="font-Gilroy w-full 
                    lg:justify-center
                    xl:justify-start
                    2xl:justify-start
                    grid
                    py-2
                    text-xl
                    md:text-4xl
                    lg:text-xl
                    xl:text-3xl
                    2xl:text-4xl
                    text-center
                    md:text-left"
									>
										John Russel Angulo
									</p>

									<p
										className="w-full font-ProductSans
                text-sm pb-3
                
                md:text-left
                lg:text-center
                xl:text-left
                2xl:text-left
                text-center"
									>
										I found myself particulary interested in designing,
										prototyping, and making mockup designs that helped me pursue
										and become a good Website Developer.
									</p>

									<p className="w-full font-ProductSans
                pb-3
                lg:place-content-center
                xl:place-content-start
                2xl:place-content-start
                md:py-0
                lg:py-0
                xl:py-0
                md:flex
                grid-cols-1
                md:grid-cols-1
                text-center
                md:text-left"
									>
										<div className="2xl:flex xl:flex lg:grid md:flex text-center"> <span className="font-bold">Phone:</span> 										
                    <div className="xl:pl-1">+639997675971
                    </div>
                    </div>

									</p>

									<p className="w-full font-ProductSans
                    pb-3
                    md:py-0
                    lg:py-0
                    xl:py-0
                    md:flex
                    grid-cols-1
                    md:grid-cols-2
                    md:text-left">
										<div className="2xl:flex xl:flex lg:grid md:flex text-center"> <span className="font-bold w-full">Email:</span> 
                    <div className="2xl:text-base xl:text-base lg:text-[14.5px] text-sm xl:pl-1 w-full">
											Angulo.johnrussel.l.7814@gmail.com
										</div>
                    </div>

									</p>

									<p
										className="py-4 text-zinc-700 uppercase font-Gilroy
                    text-center
                    md:text-left
                    lg:text-left
                    lg:text-base"
									>
										Here are my social links
									</p>

									<div
										className="
                grid
                justify-center
                md:justify-start
                w-full
                lg:grid
                xl:grid"
									>
										<motion.div
											transition={{duration: 1.1}}
											className="flex col-span-3 text-center place-items-center gap-5 justify-center md:justify-start text-white md:text-black"
										>
											<a
												href="https://www.facebook.com/janoangulo1219"
												target="_blank"
											>
												<motion.div
													whileHover={{y: -5}}
													whileTap={{scale: 0.9}}
													className="w-12 h-12 grid place-items-center justify-center rounded-lg hover:text-white hover:bg-[#ff3656] text-lg bg-[#ff3656] md:bg-[#f5f7fa] drop-shadow-xl"
												>
													<i class=" fa-brands fa-facebook-f"></i>
												</motion.div>
											</a>

											<a href="https://www.behance.net/JRLA" target="_blank">
												<motion.div
													whileHover={{y: -5}}
													whileTap={{scale: 0.9}}
													className="w-12 h-12 grid place-items-center justify-center rounded-lg hover:text-white hover:bg-[#ff3656] text-xl bg-[#ff3656] md:bg-[#f5f7fa] drop-shadow-xl"
												>
													<i class="fa-brands fa-behance"></i>
												</motion.div>
											</a>

											<a
												href="https://www.instagram.com/jaknows19/?hl=en"
												target="_blank"
											>
												<motion.div
													whileHover={{y: -5}}
													whileTap={{scale: 0.9}}
													className="w-12 h-12 grid place-items-center justify-center rounded-lg hover:text-white hover:bg-[#ff3656] text-2xl bg-[#ff3656] md:bg-[#f5f7fa] drop-shadow-xl"
												>
													<i class="fa-brands fa-instagram"></i>
												</motion.div>
											</a>
										</motion.div>
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>

				<div className="col-span-2">
					<motion.div
						initial={{y: 50}}
						whileInView={{y: 0}}
						viewport={{once: false}}
						transition={{duration: 0.7}}
					>
						<motion.div
							className="grid w-full  bg-[#f5f7fa] drop-shadow-xl rounded-2xl my-10
              md:w-full
					  	lg:w-full
						  xl:w-full"
						>
							<div className="p-[5%] h-full ">
								<div className="w-full">

									<form action="#" className="font-ProductSans">
										<div className="grid">

											<div className="grid grid-cols-6 gap-4">
												<div className="col-span-4">
													<label className="text-lg">
														Your Name:
														<input className="w-full h-12 p-3 focus:outline-none focus:ring focus:ring-[#ff3656] shadow-lg my-3 rounded-lg
                            lg:text-base" type="text" name="name" />
													</label>
												</div>

												<div className="col-span-2">
													<label className="text-lg">
														Phone Number:
														<input className="w-full h-12 text-lg p-3 focus:outline-none focus:ring focus:ring-[#ff3656] shadow-lg my-3 rounded-lg
                            lg:text-base"
                             type="phone" name="phone" />
													</label>
												</div>
											</div>

											<div>
												<label className="text-lg">
													Email Address:
													<input className="w-full h-12 text-lg p-3 focus:outline-none focus:ring focus:ring-[#ff3656] shadow-lg my-3 rounded-lg
                          lg:text-base" type="email" name="email" />
												</label>
											</div>

                      <div>
												<label className="text-lg">
													Subject:
													<input className="w-full h-12 text-lg p-3 focus:outline-none focus:ring focus:ring-[#ff3656]
                          shadow-lg my-3 rounded-lg
                          lg:text-base" type="subject" name="subject" />
												</label>
											</div>

                      <div>
												<label className="text-lg">
													Your Message
													<textarea className="w-full overflow-x-hidden overflow-y-auto resize-none text-lg p-3 focus:outline-none focus:ring focus:ring-[#ff3656] shadow-lg my-3 rounded-lg
                          lg:text-base
                          lg:h-[10.5vh]
                          xl:h-[11vh]
                          2xl:h-[14vh]
                          " type="text" name="name" />
												</label>
											</div>

                      <div>
													<motion.button 
                          whileHover={{y: -5}}
                          className="w-full h-12 text-lg text-black hover:text-white bg-[#ffca26] hover:bg-[#ff3656] 
                          p-3 shadow-lg my-3 rounded-lg">
                            <span className="font-ProductSans font-semibold">Send Message</span>
                          </motion.button>
											</div>

										</div>
									</form>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
