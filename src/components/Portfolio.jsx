import React, {useState, Fragment} from "react";
import {motion} from "framer-motion";

const Portfolio = () => {

	// function loadData() {
	// 	let Title =	document.getElementById("Title1")
	// 	let Paragraph = document.getElementById("Paragraph1")
	// 	setIsOpen(true)
	// 	ModalTitle.innerHTML = Title.innerHTML
	// 	ModalParagraph.innerHTML = Paragraph.innerHTML
	// }

	function openModal (CardID) {
		const Modal = document.getElementById("Modal")
		console.log (CardID)
		let Title = document.getElementById(CardID + "-Title")
		let Paragraph = document.getElementById(CardID + "-Paragraph")
		let Feature = document.getElementById(CardID + "-Feature")
		document.getElementById("ModalTitle").innerHTML = Title.innerHTML
		document.getElementById("ModalParagraph").innerHTML = Paragraph.innerHTML
		document.getElementById("ModalFeature").innerHTML = Feature.innerHTML
		/* document.getElementById("ModalImg").src = Image.src */
		Modal.style.display = "block"
	}

	function closeModal () {
		const Modal = document.getElementById("Modal")
		Modal.style.display = "none"
	}

	return (
		
		<div className="w-full 2xl:px-14 xl:px-14 lg:px-5 md:px-5 px-5" id="Portfolio">
			<motion.div
				initial={{y: 40}}
				whileInView={{y: 0}}
				viewport={{once: false}}
				transition={{duration: 0.8}}
				className="font-Gilroy text-lg text-[#ff3656] text-center uppercase"
			>
				You can check my works here
			</motion.div>

			<motion.div
				initial={{y: 40}}
				whileInView={{y: 0}}
				viewport={{once: false}}
				transition={{duration: 1}}
				className="font-Gilroy text-black font-semibold py-3 text-5xl md:text-7xl mb-4 md:mb-12 text-center"
				id="test-target"
			>
				My Portfolio
			</motion.div>


			{/* //==================================================MODAL======================================================= */}
        <div
				id="Modal" className="relative z-10 hidden">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">

                <div className="w-full h-full max-w-5xl transform overflow-hidden rounded-2xl bg-[#f5f7fa] p-6 text-left
								align-middle shadow-xl transition-all">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										
									<div className="grid right-7 top-3 z-10 absolute">
                    <motion.button
											whileHover={{y: -3}}
                      type="button"
                      className="w-5 h-5 rounded-full p-5 text-xl shadow-xl text-[#ff3656] hover:text-white bg-white hover:bg-[#ff3656] justify-center place-content-center grid"
                      onClick={closeModal}
                    >
                      <i class="fa-solid fa-xmark pt-1"></i>
                    </motion.button>
                  </div>

									<div className="rounded-xl bg-slate-200 w-full mt-10 md:mt-0
									2xl:h-[30rem]
									xl:h-[30rem]
									lg:h-[20rem]
									md:h-full
									h-[10rem]"></div>
									
									<div className="w-[90%]">
                  <p className="text-xl font-ProductSans leading-6 text-gray-900 py-4" id="ModalFeature"> Featured - Design </p>
									<p className="ModalTitle1 text-5xl font-Gilroy leading-6 text-gray-900 py-4" id="ModalTitle">Featured Title 1</p>

                  <div className="py-4 w-full">
                    <p className="ModalParagraph1 text-base text-gray-700 font-ProductSans" id="ModalParagraph">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nisl urna. Donec vel nulla at orci euismod accumsan sit amet ac eros. Etiam lacus ante, sollicitudin vel massa quis, scelerisque ullamcorper metus. <br /> <br />
										 Vestibulum sodales tortor eget ipsum molestie pellentesque. Sed eget leo id enim pellentesque congue ut at eros.
                    </p>
                  </div>
									</div>
									</div>

                </div>
            </div>
          </div>
        </div>

			{/* //========================================================================================================= */}

			<div className="grid gap-10 pb-32 place-items-center justify-center
			md:px-14
			lg:px-0
			xl:px-0
			grid-cols-1
			md:grid-cols-1 
			lg:grid-cols-2
			xl:grid-cols-3">

				<motion.div
					id="Card1"
					initial={{y: 50}}
					whileInView={{y: 0}}
					viewport={{once: false}}
					transition={{duration: 0.7}}
				>
					<motion.div
						whileHover={{y: -10}}
						className="grid w-full place-items-center justify-center text-black bg-[#f5f7fa] drop-shadow-xl rounded-2xl
						md:w-full
						lg:w-full
						xl:w-full
						h-[90%]"
					>
						<div className="p-[5%] h-full ">
							<motion.img
							
							 id="Image1" onClick={()=>{openModal("Card1")}} className="rounded-xl bg-slate-200 mb-4
							w-full
							h-[10rem]
							md:h-[20rem]
							lg:h-[15rem]
							xl:h-[15rem]
							2xl:h-[20rem]
							
							">
							</motion.img>
							<p className="hidden" id="Card1-Feature">Feature Feature</p>
							<p className="text-2xl font-Gilroy w-full text-center md:text-left" id="Card1-Title">Title 1</p>
							<p className="w-full text-center md:text-left font-ProductSans text-gray-700" id="Card1-Paragraph">
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
					transition={{duration: 0.7}}
				>
					<motion.div
						whileHover={{y: -10}}
						className="grid w-full place-items-center justify-center text-black bg-[#f5f7fa] drop-shadow-xl rounded-2xl
						md:w-full
						lg:w-full
						xl:w-full
						h-[90%]"
					>
						<div className="p-[5%] h-full ">
							<img onClick={()=>{openModal("Card2")}} className="rounded-xl bg-slate-200 mb-4
							w-full
							h-[10rem]
							md:h-[20rem]
							lg:h-[15rem]
							xl:h-[15rem]
							2xl:h-[20rem]
							
							">
							</img>
							<p className="text-2xl font-Gilroy w-full text-center md:text-left" id="Card2-Title">Title 2</p>
							<p className="w-full text-center md:text-left font-ProductSans text-gray-700" id="Card2-Paragraph">
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
					transition={{duration: 0.7}}
				>
					<motion.div
						whileHover={{y: -10}}
						className="grid w-full place-items-center justify-center text-black bg-[#f5f7fa] drop-shadow-xl rounded-2xl
						md:w-full
						lg:w-full
						xl:w-full
						h-[90%]"
					>
						<div className="p-[5%] h-full ">
							<div className="rounded-xl bg-slate-200 mb-4
							w-full
							h-[10rem]
							md:h-[20rem]
							lg:h-[15rem]
							xl:h-[15rem]
							2xl:h-[20rem]
							
							">
							</div>
							<p className="text-2xl font-Gilroy w-full text-center md:text-left ">Title 3</p>
							<p className="w-full text-center md:text-left font-ProductSans text-gray-700">
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
					transition={{duration: 0.7}}
				>
					<motion.div
						whileHover={{y: -10}}
						className="grid w-full place-items-center justify-center text-black bg-[#f5f7fa] drop-shadow-xl rounded-2xl
						md:w-full
						lg:w-full
						xl:w-full
						h-[90%]"
					>
						<div className="p-[5%] h-full ">
							<div className="rounded-xl bg-slate-200 mb-4
							w-full
							h-[10rem]
							md:h-[20rem]
							lg:h-[15rem]
							xl:h-[15rem]
							2xl:h-[20rem]
							
							">
							</div>
							<p className="text-2xl font-Gilroy w-full text-center md:text-left ">Title 4</p>
							<p className="w-full text-center md:text-left font-ProductSans text-gray-700">
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
					transition={{duration: 0.7}}
				>
					<motion.div
						whileHover={{y: -10}}
						className="grid w-full place-items-center justify-center text-black bg-[#f5f7fa] drop-shadow-xl rounded-2xl
						md:w-full
						lg:w-full
						xl:w-full
						h-[90%]"
					>
						<div className="p-[5%] h-full ">
							<div className="rounded-xl bg-slate-200 mb-4
							w-full
							h-[10rem]
							md:h-[20rem]
							lg:h-[15rem]
							xl:h-[15rem]
							2xl:h-[20rem]
							
							">
							</div>
							<p className="text-2xl font-Gilroy w-full text-center md:text-left ">Title 5</p>
							<p className="w-full text-center md:text-left font-ProductSans text-gray-700">
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
					transition={{duration: 0.7}}
				>
					<motion.div
						whileHover={{y: -10}}
						className="grid w-full place-items-center justify-center text-black bg-[#f5f7fa] drop-shadow-xl rounded-2xl
						md:w-full
						lg:w-full
						xl:w-full
						h-[90%]"
					>
						<div className="p-[5%] h-full ">
							<div className="rounded-xl bg-slate-200 mb-4
							w-full
							h-[10rem]
							md:h-[20rem]
							lg:h-[15rem]
							xl:h-[15rem]
							2xl:h-[20rem]
							
							">
							</div>
							<p className="text-2xl font-Gilroy w-full text-center md:text-left ">Title 6</p>
							<p className="w-full text-center md:text-left font-ProductSans text-gray-700">
								I found myself particulary interested in designing, prototyping,
								and making mockup designs that helped me pursue and become a
								good Website Developer.	
							</p>
						</div>
					</motion.div>
				</motion.div>

			
			
			</div>
		</div>
	);
};

export default Portfolio;
