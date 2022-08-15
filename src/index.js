import React, { useEffect} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const loader = window.document.querySelector(".loader-wrapper");
const transitionTime = 2000
const showLoader = () => {
	setTimeout(() => {
		loader.classList.remove("loader--hide")
		window.document.querySelector(".ReactApp").classList.add("loader--hide")
	}, transitionTime);
	
};

const hideLoader = () => {
	setTimeout(() => {
		loader.classList.add("loader--hide")
		window.document.querySelector(".ReactApp").classList.remove("loader--hide");
	}, transitionTime);
	
};

function RenderApp({ hideLoader }) {
  useEffect(() => {
    hideLoader();
  });

  return (
		<App/>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RenderApp hideLoader={hideLoader} showLoader={showLoader} />
	</React.StrictMode>
);