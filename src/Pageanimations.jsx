import gsap, { Power1, Power4, Power2, Power3 } from "gsap";
import SplitType from "split-type";

export const Pageanimations = () => {
	const text = new SplitType("#homeText");
	const textTWo = new SplitType("#homeTextTwo");
	// const paragraph = new SplitType("#homeParagraph");
	gsap.timeline()
		.fromTo(
			"#header",
			{
				y: -100,
			},
			{
				y: 0,
				duration: 1,
			}
		)
		.fromTo(
			".word",
			{ y: 300, skewY: 10 },
			{
				y: 0,
				stagger: 0.2,
				duration: 0.6,
				ease: Power3,
				skewY: -0,
			}
		);
};
