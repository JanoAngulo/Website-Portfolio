import BJMP from "../assets/Thumbnail/BJMP-front.png";
import netflix from "../assets/Thumbnail/netflix.png";

import Soda from "../assets/Thumbnail/RiteNLite.png";
import Teaser from "../assets/Thumbnail/Bulsu-Cict-Trailer.png";
import Service from "../assets/Thumbnail/Service-Management.png";

import Underwater from "../assets/Thumbnail/Underwater.png";
import Lucifer from "../assets/Thumbnail/Lucifer.png";
import Landscape from "../assets/Thumbnail/LandscapePink.png";

// import Mother from "../assets/ImgData/Mothers-Day.png"

let Images = [
	{src: BJMP},
	{src: netflix},
	// {src: BJMP},
	{src: Soda},
	{src: Teaser},
	{src: Service},
	{src: Underwater},
	{src: Lucifer},
	{src: Landscape}
	// {src: Mother},
	// {src: Mother},
	// {src: Mother}
];

let P1 = ` In this project the design was made using Adobe Illustrator, the coloration of blue is referenced to its symbolic meaning which is security, authority, protection, and responsibility which is shown by the Police inside the Bureau. 

     This project is used by our college to offer help or assistance with regard to the AGAPAY-TUGON project in cooperation with the Bulacan Chamber of Commerce and Industry (BCCI). `;

let P2 = `Since the pandemic that had happened, socializing is quite limited, yes granted that we have different social media for us to communicate with each other we do still get bored, that is why Netflix is one of the things that I used to reduce boredom when I'm just alone. 

This project is done using ReactJS and TailwindCss for the Front End and Axios, Firebase, and TheMovieDB for the Back End.`;

// let P3 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// Curabitur ac nisl urna. Donec vel nulla at orci euismod
// accumsan sit amet ac eros. Etiam lacus ante, sollicitudin
// vel massa quis, scelerisque ullamcorper metus.`;

let P3 = `The soda commercial is done using Adobe Premiere Pro, all the videos of the can rolling, ice hitting the glass, and glass filling up with soda is all done and videograph by myself. The commercial is a project of mine in my previous subject in my college and in the subject of Mandarin. `;

let P4 = `The culmination of dreams especially the students that are awaiting for their graduation is hyped by this teaser video which is made in Adobe After Effects and was done by me. This was given to me by our College Publication for the Graduation of the students in Academic Year 2020-2021.`;

let P5 = `When a new students enrolls for a specialization, it is quite hard for them to choose and grasp what is the difference between each specialization. Having the video that tackles what Service Management Program does for a student and what can the students expect when they take this track or specialization in college. The project is done using Adobe After Effects and the images where done using Adobe Illustrator.`;

let P6 = `I have always been fascinated with the deep waters, some find it eerie or full of nightmares, but for me I always find it calming and quite relaxing especially when seeing sea creatures. This Artwork is created and done with Adobe Illustrator.`;

let P7 = `Lucifers depiction in this artwork is where a story which there is a War in Heaven and it is the instance that Lucifer was expelled or banished from the heavenly realm and arrived in the terrestrial. Lucifer's emotion boasts how prideful of a character he is and the ambition caused him be lustful of power exceeding of God. This Artwork is created and done with Adobe Illustrator.`;

let P8 = `Mountains and hills are some of the top places I have always wanted to go to, creating this art made me really excited on the possibility that maybe sooner or later I will be able to climb and traverse such beauty. This Artwork is created and done with Adobe Illustrator.`;

// let P10 = `This art is dedicated and given to my Mom in May 14 which is Mothers Day. As a thanks I created this work of art using Adobe Illustrator.`

// let P11 = `This art that I made was for a birthday celebrant which is also my friend. This art is made and done using Adobe Illustrator.`

// let P12 = `This art that I made was for a birthday celebrant which is also my friend. This art is made and done using Adobe Illustrator.`

let CardURL = [
	"https://bjmpbaliwagmj.xyz/",
	"https://netflix-react-clone-b9706.web.app/",
	// "https://www.behance.net/JRLA",
	"https://youtu.be/4UYqmoFG7n8",
	"https://youtu.be/FNDjo-7m0IU",
	"https://youtu.be/Vs1Uf9NXyBQ",
	Underwater,
	Lucifer,
	Landscape
	// Mother,
	// Mother,
	// Mother
];


let CardData = [
	["Featured - Website", "BJMP Baliwag Website", P1],
	["Featured - Website Cloning", "Netflix Clone", P2],
	// ["Card Feature3", "Card Title 3", P3],
	["Featured - Commercial", "Rite n' Lite Soda Commercial", P3],
	["Featured - Teaser Trailer", "BulSu CICT Graduation", P4],
	["Featured - Explanation Video", "Service Management Track", P5],
	["Featured - Vector Art", "Underwater", P6],
	["Featured - Vector Art", "Lucifer Fallen Angel", P7],
	["Featured - Vector Art", "Landscape", P8]
	// ["Featured - Vector Art", "Mothers Day", P10],
	// ["Featured - Vector Art", "Mothers Day", P11],
	// ["Featured - Vector Art", "Mothers Day", P12]
];

export {Images, CardData, CardURL};
