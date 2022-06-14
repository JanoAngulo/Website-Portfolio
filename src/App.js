import React from 'react'
import './index.css';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';


function App() {
	return (
		<div className='w-full h-full bg-[#eceff4] '>
			<div className='sticky top-0 z-[999]'>
			<Navbar />
			</div>
			<Main />
			{/* <Features/>
			<Portfolio/>
			<Resume/> */}
		</div>
	);
}

export default App