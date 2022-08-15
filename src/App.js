import React, {useState, useEffect} from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

function App() {
	// const [loading, setLoading] = useState(true);

	//   useEffect(() => {
	//   setTimeout(() => {
	//     setLoading(false);
	//   }, 5400);
	// }, []);

	const [isLoading, setIsLoading] = React.useState(true);

	const handleLoading = () => {
		setIsLoading(false);
	};

	useEffect(() => {
		window.addEventListener("load", handleLoading);
		return () => window.removeEventListener("load", handleLoading);
	}, []);

	return !isLoading ? (
		<div className="w-full h-full bg-[#eceff4]">
			<div className="sticky top-0 m-0 z-[999]">
				<Navbar />
			</div>
			<Main />
			<Features />
			<Portfolio />
			<Resume />
			<Contact />
		</div>
	) : (
		<Loader />
	);

	// return !isLoading ? (
	// 	<>
	// 		{loading === false ? (
	// 			<div className="w-full h-full bg-[#eceff4]">
	// 				<div className="sticky top-0 m-0 z-[999]">
	// 					<Navbar />
	// 				</div>
	// 				<Main />
	// 				<Features />
	// 				<Portfolio />
	// 				<Resume />
	// 				<Contact />
	// 			</div>
	// 		) : (
	// 			<Loader />
	// 		)}
	// 	</>
	// );
}

export default App;
