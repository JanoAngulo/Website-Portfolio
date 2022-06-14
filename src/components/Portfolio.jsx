import React, {useState, Fragment} from "react";
import { Dialog, Transition } from '@headlessui/react'
import {motion} from "framer-motion";

const Portfolio = () => {

	let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

	return (
		
		<div className="w-full px-14 " id="Portfolio">
			<motion.div
				initial={{y: 40}}
				whileInView={{y: 0}}
				viewport={{once: false}}
				transition={{duration: 0.8}}
				className="font-Gilroy text-lg text-[#ff3656] text-center uppercase"
			>
				You can check my portfolio here
			</motion.div>

			<motion.div
				initial={{y: 40}}
				whileInView={{y: 0}}
				viewport={{once: false}}
				transition={{duration: 1}}
				className="font-Gilroy text-black font-semibold py-3 text-5xl md:text-7xl mb-4 md:mb-12 text-center"
			>
				My Portfolio
			</motion.div>




			{/* //==================================================MODAL======================================================= */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-full max-w-5xl transform overflow-hidden rounded-2xl bg-[#f5f7fa] p-6 text-left
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

									<div className="rounded-xl bg-slate-200 w-full h-[30rem] mt-10 md:mt-0"></div>
									
									<div className="w-[80%]">
                  <p className="text-xl font-ProductSans leading-6 text-gray-900 py-4"> Featured - Design </p>
									<p className="text-5xl font-Gilroy leading-6 text-gray-900 py-4">Featured Title</p>

                  <div className="py-4 w-full">
                    <p className="text-base text-gray-500">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nisl urna. Donec vel nulla at orci euismod accumsan sit amet ac eros. Etiam lacus ante, sollicitudin vel massa quis, scelerisque ullamcorper metus. <br /> <br />
										 Vestibulum sodales tortor eget ipsum molestie pellentesque. Sed eget leo id enim pellentesque congue ut at eros.
                    </p>
                  </div>
									</div>


									
									</div>





                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

			{/* //========================================================================================================= */}

			<div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-32 place-items-center justify-center">
				<motion.div
					initial={{y: 50}}
					whileInView={{y: 0}}
					viewport={{once: false}}
					transition={{duration: 0.7}}
				>
					<motion.div
						whileHover={{y: -10}}
						// whileTap={{scale: 0.9}}
						className="grid w-full md:w-[29vw] h-[90%] place-items-center justify-center text-black bg-[#f5f7fa] drop-shadow-xl rounded-2xl"
					>
						<div className="p-[5%] h-full ">
							<div 
									onClick={openModal}
									className="rounded-xl bg-slate-200 w-full h-[20rem] mb-4">
								<div className="rounded-xl w-full h-[20rem]"></div>
							</div>
							<p className="text-2xl font-Gilroy w-full text-center md:text-left ">
								{" "}
								Title{" "}
							</p>
							<p className="w-full text-center md:text-left">
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
						// whileTap={{scale: 0.9}}
						className="grid w-full md:w-[29vw] h-[90%] place-items-center justify-center text-black bg-[#f5f7fa] drop-shadow-xl rounded-2xl"
					>
						<div className="p-[5%] h-full ">
							<div className="rounded-xl bg-slate-200 w-full h-[20rem] mb-4">
								<div className="rounded-xl w-full h-[20rem]"></div>
							</div>
							<p className="text-2xl font-Gilroy w-full text-center md:text-left ">
								{" "}
								Title{" "}
							</p>
							<p className="w-full text-center md:text-left">
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
						// whileTap={{scale: 0.9}}
						className="grid w-full md:w-[29vw] h-[90%] place-items-center justify-center text-black bg-[#f5f7fa] drop-shadow-xl rounded-2xl"
					>
						<div className="p-[5%] h-full ">
							<div className="rounded-xl bg-slate-200 w-full h-[20rem] mb-4">
								<div className="rounded-xl w-full h-[20rem]"></div>
							</div>
							<p className="text-2xl font-Gilroy w-full text-center md:text-left ">
								{" "}
								Title{" "}
							</p>
							<p className="w-full text-center md:text-left">
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
						// whileTap={{scale: 0.9}}
						className="grid w-full md:w-[29vw] h-[90%] place-items-center justify-center text-black bg-[#f5f7fa] drop-shadow-xl rounded-2xl"
					>
						<div className="p-[5%] h-full ">
							<div className="rounded-xl bg-slate-200 w-full h-[20rem] mb-4">
								<div className="rounded-xl w-full h-[20rem]"></div>
							</div>
							<p className="text-2xl font-Gilroy w-full text-center md:text-left ">
								{" "}
								Title{" "}
							</p>
							<p className="w-full text-center md:text-left">
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
						// whileTap={{scale: 0.9}}
						className="grid w-full md:w-[29vw] h-[90%] place-items-center justify-center text-black bg-[#f5f7fa] drop-shadow-xl rounded-2xl"
					>
						<div className="p-[5%] h-full ">
							<div className="rounded-xl bg-slate-200 w-full h-[20rem] mb-4">
								<div className="rounded-xl w-full h-[20rem]"></div>
							</div>
							<p className="text-2xl font-Gilroy w-full text-center md:text-left ">
								{" "}
								Title{" "}
							</p>
							<p className="w-full text-center md:text-left">
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
						// whileTap={{scale: 0.9}}
						className="grid w-full md:w-[29vw] h-[90%] place-items-center justify-center text-black bg-[#f5f7fa] drop-shadow-xl rounded-2xl"
					>
						<div className="p-[5%] h-full ">
							<div className="rounded-xl bg-slate-200 w-full h-[20rem] mb-4">
								<div className="rounded-xl w-full h-[20rem]"></div>
							</div>
							<p className="text-2xl font-Gilroy w-full text-center md:text-left ">
								{" "}
								Title{" "}
							</p>
							<p className="w-full text-center md:text-left">
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
