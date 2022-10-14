import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FiCreditCard } from "react-icons/fi";
export default function Howtocard({
	children,
	title,
	body,
	num,
	backgroundColor,
	textColor,
	iconBg,
}) {
	return (
		<div
			className="bg-[#] w-[45%] h-full rounded-[12px]  m-4"
			style={{
				color: `${textColor}`,
				backgroundColor: `${backgroundColor}`,
			}}
		>
			<div className="flex flex-row items-start justify-center p-4">
				<div>
					<div
						style={{
							backgroundColor: `${iconBg}`,
						}}
						className=" flex items-center justify-center w-12 h-12 rounded-lg my-4 text-3xl"
					>
						{children}
					</div>
					<p className="capitalize text-2xl font-bold my-4">
						{title}
					</p>
					<h5 className="signika font-normal w-4/4">
						{body}
					</h5>
					<p className="mt-5 text-3xl font-bold">
						{num}
					</p>
				</div>
					<div className="text-[#09121F] p-6 text-3xl">
					<RiArrowRightUpLine />
				</div>
			</div>
		</div>
	);
}
