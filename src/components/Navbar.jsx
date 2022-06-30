import React, { useState } from 'react'
import {Link} from "react-scroll";
import {motion} from "framer-motion";

const Navbar = () => {

  let [open, setOpen] = useState(false);
  return (
    <>
      <div className="shadow-md bg-[#f5f8ff] w-full top-0 left-0 ">
        <div className='md:flex items-center justify-between py-5 px-14'>
          <div className='font-Gilroy cursor-pointer 2xl:flex xl:flex lg:flex md:flex sm:flex 
					hover:fill-[#ff3c3c] hover:text-[#ff3c3c]'>

						<Link 						
							to="Main"
							spy={true}
							smooth={true}
							offset={-100}
							duration={500} className='md:px-3 flex'>
					<svg className='h-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 745.03 831.62">
						<g>
							<polygon points="347.69 0 347.69 831.62 322.85 817.28 298.02 802.93 273.18 788.6 248.35 774.25 223.52 759.91 198.68 745.57 173.84 731.25 149.02 716.9 124.17 702.59 99.34 688.23 74.5 673.89 49.67 659.55 24.86 645.23 0 630.88 0 401.47 24.84 415.81 49.67 430.15 49.67 602.2 74.53 616.55 99.34 630.88 124.17 645.23 149.02 659.55 173.84 673.91 223.52 702.59 248.35 716.92 273.18 731.25 298.02 745.59 298.02 28.68 322.85 14.34 347.69 0"/>
							<polygon points="745.03 401.47 745.03 630.88 720.2 645.23 695.37 659.55 670.53 673.9 620.86 702.58 596.03 716.92 571.19 731.26 546.36 745.59 521.53 759.93 496.69 774.27 447.02 802.94 422.19 817.28 397.35 831.62 397.35 0 422.19 14.34 447.02 28.69 447.02 745.59 471.86 731.26 496.69 716.92 521.53 702.58 546.36 688.23 571.19 673.9 596.03 659.55 620.86 645.23 645.7 630.88 670.53 616.55 695.37 602.2 695.37 430.15 720.2 415.81 745.03 401.47"/>
							<path d="M391,195.88l-24.84,14.34-24.83,14.33-24.84,14.34-24.83,14.34-24.84,14.34V697.73l24.84,14.34,24.83,14.34V525.66l24.82-14.34L366.16,497V755.08L391,769.42l24.83,14.34V497L391,482.65l24.83-14.34V181.54ZM366.16,439.64,341.31,454l-24.82,14.34v-172l24.84-14.35,24.83-14.33Z" transform="translate(-167.48 -124.19)"/>
							<path d="M788.35,253.23l-24.84-14.32-24.83-14.36-24.84-14.32L689,195.9l-24.84-14.34V783.74L689,769.42l24.85-14.35V497l24.85,14.35,24.82,14.34V726.39l49.67-28.68V267.58ZM763.51,468.31,738.69,454l-24.85-14.33V267.57l24.84,14.34,24.83,14.35Z" transform="translate(-167.48 -124.19)"/>
						</g>
					</svg>
						</Link>

							<Link
							to="Main"
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
							className='text-2xl md:flex place-items-center hidden'> 
							JRLA 
							</Link>
          	</div>

          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer 
          2xl:hidden
          xl:hidden
          lg:hidden
          md:flex
          sm:flex'>
             <i class={open ? 'fa-solid fa-xmark text-4xl' : 'fa-solid fa-bars'} ></i>
          </div>

          <ul className={`justify-between font-ProductSans text-base uppercase font-semibold absolute  bg-[#f5f8ff]  z-[-1] w-full left-0 pl-14 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-300px]'} 

					lg:pl-0
					lg:w-auto
					lg:opacity-100 
					lg:z-auto
					lg:static	
					lg:gap-10
					lg:items-center
					lg:flex`}>

					<motion.li whileTap={{scale: 0.9}} className="hover:text-[#ff3c3c] cursor-pointer lg:my-0 my-6">
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

					<motion.li whileTap={{scale: 0.9}} className="hover:text-[#ff3c3c] cursor-pointer lg:my-0 my-4">
						<Link
							to="Features"
							spy={true}
							smooth={true}
							offset={-130}
							duration={500}
						>
							Features
						</Link>
					</motion.li>

					<motion.li whileTap={{scale: 0.9}} className="hover:text-[#ff3c3c] cursor-pointer lg:my-0 my-4">
						<Link
							to="Portfolio"
							spy={true}
							smooth={true}
							offset={-120}
							duration={500}
						>
							Portfolio
						</Link>
					</motion.li>

					<motion.li whileTap={{scale: 0.9}} className="hover:text-[#ff3c3c] cursor-pointer lg:my-0 my-4">
						<Link
							to="Resume"
							spy={true}
							smooth={true}
							offset={-120}
							duration={500}
						>
							Resume
						</Link>
					</motion.li>

					<motion.li whileTap={{scale: 0.9}} className="hover:text-[#ff3c3c] cursor-pointer lg:my-0 my-4">
						<Link
							to="Contact"
							spy={true}
							smooth={true}
							offset={-80}
							duration={500}
						>
							Contact
						</Link>
					</motion.li>
					
				</ul>

        </div>
      </div>
    </>
  )
}

export default Navbar