import React from "react";
import {Link} from "react-scroll";
import {motion} from "framer-motion";

const Navbar = () => {
	return (
		<motion.div className="w-full h-[60px] bg-[#eceff4] drop-shadow-md">
			<div className="flex py-3 px-14 
			justify-between
			md:justify-center
			lg:justify-between">
				<motion.div className="font-ProductSansB text-2xl hover:text-[#ff3c3c] font-semibold 
				md:hidden
				lg:grid
				xl:grid">
					<Link 
					 to="Main" spy={true} smooth={true} offset={-100} duration={500}>
						JRLA
					</Link>
				</motion.div>
				<ul className="md:flex justify-between md:gap-10 font-ProductSansB text-base uppercase font-semibold hidden">
					<motion.li whileTap={{scale: 0.9}} className="hover:text-[#ff3c3c] ">
						<Link
							to="Main"
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
						>
							Home
						</Link>
					</motion.li>

					<motion.li whileTap={{scale: 0.9}} className="hover:text-[#ff3c3c]">
						<Link
							to="Features"
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
						>
							Features
						</Link>
					</motion.li>

					<motion.li whileTap={{scale: 0.9}} className="hover:text-[#ff3c3c]">
						<Link
							to="Portfolio"
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
						>
							Portfolio
						</Link>
					</motion.li>

					<motion.li whileTap={{scale: 0.9}} className="hover:text-[#ff3c3c]">
						<Link
							to="Resume"
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
						>
							Resume
						</Link>
					</motion.li>

					<motion.li whileTap={{scale: 0.9}} className="hover:text-[#ff3c3c] ">
						<Link
							to="Contact"
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
						>
							Contact
						</Link>
					</motion.li>
				</ul>
			</div>
		</motion.div>
	);
};

export default Navbar;
