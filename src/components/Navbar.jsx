import React, { useState } from 'react'
import {Link} from "react-scroll";
import {motion} from "framer-motion";


const Navbar = () => {

  let [open, setOpen] = useState(false);
  return (
    <>
      <div className="shadow-md bg-[#f5f8ff] w-full top-0 left-0 ">
        <div className='md:flex items-center justify-between py-7 px-14'>
          <div className='font-Gilroy cursor-pointer 2xl:flex xl:flex lg:flex md:flex sm:flex hover:text-[#ff3c3c]'>
            <Link
							to="Main"
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
              className='text-2xl'
              >
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

          <ul className={`justify-between font-ProductSans text-base uppercase font-semibold absolute  bg-[#f5f8ff]  z-[-1] w-full left-0 pl-14 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-500px]'} 

					lg:pl-0
					lg:w-auto
					lg:opacity-100 
					lg:z-auto
					lg:static	
					lg:gap-10
					lg:items-center
					lg:flex`}>

					<motion.li whileTap={{scale: 0.9}} className="hover:text-[#ff3c3c] cursor-pointer lg:my-0 my-4">
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