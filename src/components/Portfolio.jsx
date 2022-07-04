import React from "react";
import {motion} from "framer-motion";
import {Images, CardData, CardURL} from "./Data";

const Portfolio = () => {

	// const [index] = useState([]);

	function openModal(CardID, CardURL) {
		const Modal = document.getElementById("Modal");
		console.log(CardID);
		let Title = document.getElementById(CardID + "-Title");
		let Paragraph = document.getElementById(CardID + "-Paragraph");
		let Feature = document.getElementById(CardID + "-Feature");
		let CardIMG = document.getElementById(CardID + "-img");
		document.getElementById("ModalTitle").innerHTML = Title.innerHTML;
		document.getElementById("ModalParagraph").innerHTML = Paragraph.innerHTML;
		document.getElementById("ModalFeature").innerHTML = Feature.innerHTML;
		document.getElementById("ModalImg").src = CardIMG.src;
		let ModalBtn = document.getElementById("ModalBtn");
		ModalBtn.onclick = () => {
			window.open(CardURL);
		};

		Modal.style.display = "block";
	}

	function closeModal() {
		const Modal = document.getElementById("Modal");
		Modal.style.display = "none";
	}

	let Variants,
		VariantsPortfolio = {};
	const isMobile = window.innerWidth < 1024; //Add the width you want to check for here (now 768px)
	if (!isMobile) {
		Variants = {
			initial: {y: 40},
			whileInView: {y: 0},
			viewport: {once: false}
		};

		VariantsPortfolio = {
			initialText: {y: 40},
			whileInViewText: {y: 0},
			viewportText: {once: false}
		};
	}

	// const truncateString = (str, num) => {
	// 	if (str?.length > num) {
	// 		return str.slice(0, num) + "...";
	// 	} else {
	// 		return str;
	// 	}
	// };

	let Cards = [];

	for (let index = 1; index <= 8; index++) {
		Cards.push(
			<motion.div
				id={"Card" + index}
				variants={Variants}
				initial="initial"
				whileInView="whileInView"
				viewport="viewport"
				transition={{duration: 0.7}}
			>
				<motion.div
					whileHover={{y: -10}}
					className="grid w-full place-items-center justify-center text-black bg-[#f5f7fa] drop-shadow-xl rounded-2xl"
				>
					<div className="p-[5%] h-auto ">
						<motion.img
							whileHover={{scale: 1.02}}
							src={Images[index - 1].src}
							id={"Card" + index + "-img"}
							onClick={() => {
								openModal("Card" + index, CardURL[index - 1]);
							}}
							className="Img-data rounded-xl mb-4 w-auto "
						></motion.img>

						<p className="hidden" id={"Card" + index + "-Feature"}>
							{CardData[index - 1][0]}
						</p>

						<p
							className="text-2xl font-Gilroy w-full text-center md:text-left"
							id={"Card" + index + "-Title"}
						>
							{CardData[index - 1][1]}
						</p>

						<p className=" w-full h-24 text-justify md:text-left font-ProductSans overflow-hidden text-ellipsis text-gray-700"
							id={"Card" + index  +  "-Paragraph"}>
								{CardData[index - 1][2]}
						</p>
					</div>
				</motion.div>
			</motion.div>
		);
	}

	return (
		<div
			className="w-full 2xl:px-14 xl:px-14 lg:px-5 md:px-5 px-5"
			id="Portfolio"
		>
			<motion.div
				variants={VariantsPortfolio}
				initial="initialText"
				whileInView="whileInViewText"
				viewport="viewportText"
				transition={{duration: 0.8}}
				className="font-Gilroy text-lg text-[#ff3656] text-center uppercase"
			>
				You can check my works here
			</motion.div>

			<motion.div
				variants={VariantsPortfolio}
				initial="initialText"
				whileInView="whileInViewText"
				viewport="viewportText"
				transition={{duration: 1}}
				className="font-Gilroy text-black font-semibold py-3 text-5xl md:text-7xl mb-4 md:mb-12 text-center"
				id="test-target"
			>
				My Portfolio
			</motion.div>

			{/* //==================================================MODAL======================================================= */}
			<div id="Modal" className="relative z-10 hidden">
				<div className="fixed inset-0 bg-black bg-opacity-25" />
				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<div
							className="w-full h-full mt-24 transform overflow-hidden rounded-2xl bg-[#f5f7fa] p-6 text-left
								align-middle shadow-xl transition-all
								2xl:max-w-6xl
								xl:max-w-6xl
								lg:max-w-3xl
								md:max-w-xl
								"
						>
							<div className="grid grid-cols-1 lg:grid-cols-2  gap-4 place-items-center ">
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

								<img
									id="ModalImg"
									className="rounded-xl w-full mt-10 md:mt-0 grid "
									alt=""
								></img>

								<div className="md:w-[90%] w-full">
									<p
										className=" font-ProductSans leading-6 text-gray-900 py-2 text-center lg:text-left
										text-lg
										"
										id="ModalFeature"
									>
										{" "}
										Featured - Design{" "}
									</p>

									<p
										className="ModalTitle1 font-Gilroy text-gray-900 text-center lg:text-left
										text-xl 
										2xl:text-4xl
										xl:text-4xl
										lg:text-2xl"
										id="ModalTitle"
									>
										Featured Title
									</p>

									<div className="py-2 w-full">
										<p
											className="ModalParagraph1 whitespace-pre-wrap indent-5 text-gray-700 font-ProductSans text-justify md:text-left
											2xl:text-base
											xl:text-base
											lg:text-sm
											text:base"
											id="ModalParagraph"
										>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Curabitur ac nisl urna. Donec vel nulla at orci euismod
											accumsan sit amet ac eros. Etiam lacus ante, sollicitudin
											vel massa quis, scelerisque ullamcorper metus.
										</p>
									</div>

									<div className="bottom-0 z-11 absolue">
										<button
											id="ModalBtn"
											className="font-ProductSans text-base items-end bg-[#ff3656] hover:bg-[#ffca26] rounded-lg h-10 w-full shadow-lg text-white hover:text-black"
										>
											View Project
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* //========================================================================================================= */}

			<div
				className="grid gap-10 pb-32 place-items-center justify-center
			md:px-14
			lg:px-0
			xl:px-0
			grid-cols-1
			md:grid-cols-1 
			lg:grid-cols-2
			xl:grid-cols-3"
			>
				{Cards}
			</div>
		</div>
	);
};

export default Portfolio;
