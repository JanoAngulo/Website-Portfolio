import React from 'react'
import './index.css';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';


function App() {
	return (
		<div className='w-full h-full bg-[#eceff4] '>
			<div className='sticky top-0 z-[999]'>
			<Navbar />
			</div>
			<Main />
			<Features/>
			<Portfolio/>
			<Resume/>
			<Contact/>
		</div>
	);
}

export default App