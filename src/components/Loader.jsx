import React from "react";
import LogoGIF from "../assets/Loader/JRLA-Logo-1.gif";

function Loader() {
	return (
		<div className="w-full h-screen grid justify-center place-content-center bg-[#eceff4]">
			<img className="w-auto h-60" src={LogoGIF} alt="Logo Loader" />
		</div>
	);
}

export default Loader;
