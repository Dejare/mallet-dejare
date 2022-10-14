import React from "react";
import { FaEthereum } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";

function HeroCards({ backgroundColor, image }) {
	return (
		<div
			className="w-[40%] rounded-xl h-[177px] bg-[#C8CBE1] m-4 flex flex-row items-center justify-between p-4"
			style={{ backgroundColor: `${backgroundColor}` }}
		>
			<div className="-mt-16">
				<img
					src={image}
					alt="nft"
					className=" p-0 m-0 rounded-[8px]"
				/>
			</div>
			<div className="h-full flex flex-col justify-between">
				<div>
					<p>BN00268896</p>
					<p>@energeticoa</p>
				</div>
				<div>
					<p className="ml-1">Current Price</p>
					<div className="flex flex-row items-center">
						<FaEthereum /> <p>0.90 ETH</p>
					</div>
				</div>
			</div>
			<div className="h-full flex flex-col justify-between px-4">
				<div>
					<button className="px-5 py-1 text-white bg-gray-900 rounded-2xl flex flex-row items-center">
						Bid{" "}
						<RiArrowRightUpLine className="ml-1" />
					</button>
				</div>
				<div>
					<p>Ending Time</p>
					<p>10hr 30min 30sec</p>
				</div>
			</div>
		</div>
	);
}

export default HeroCards;
