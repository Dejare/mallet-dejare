import React from "react";
import imag from "../assets/images/categories1.svg";

function Categories({ image, text }) {
	return (
		<div className="relative md:w-1/5 border border-[#afafaf] rounded-[8px] p-1 mx-4 m-4 snap-start min-w-fit flex flex-col items-center gap-2">
			<div>
				<img src={image} alt="" />
			</div>
			<h3 className="text-center my-3">{text}</h3>
		</div>
	);
}

export default Categories;
