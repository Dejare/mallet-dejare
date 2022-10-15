import gsap, { Power1, Power4, Power2, Power3 } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
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
			".char",
			{ y: 300, skewY: 10 },
			{
				y: 0,
				stagger: 0.02,
				duration: 0.4,
				ease: Power3,
				skewY: -0,
			}
		)
		.fromTo(
			"#homeParagraph",
			{
				y: 30,
				opacity: 0,
			},
			{
				y: 0,
				ease: Power3,
				opacity: 1,
			}
		)
		.fromTo(
			"#homeBtn",
			{
				y: 30,
				opacity: 0,
			},
			{
				y: 0,
				ease: Power3,
				opacity: 1,
			}
		)
		.fromTo(
			"#homeImage",
			{
				y: 30,
				opacity: 0,
				translateZ: 0,
				css: {
					transform: "translate3d(-100%, 0, 0)",
				},
			},
			{
				y: 0,
				ease: Power3,
				opacity: 1,
				css: {
					transform: "translate3d(0%, 0, 0)",
				},
			}
		);
};
