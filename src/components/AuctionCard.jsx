import React from "react";
import rect39 from "../assets/images/Rectangle 38-6.svg";
function AuctionCard({ nftName, username, price, highestBid, img }) {
	return (
		<div className="md:w-1/5 border border-[#afafaf] rounded-[8px] mx-4 my-5 md:my-0 m-4 snap-start min-w-fit flex flex-col items-start gap-2">
			<div className="">
				<div>
					<img src={img} alt="" />
				</div>
				<div className="p-6">
					<div className="mb-5">
						<p>{nftName}</p>
						<p className="text-[#afafaf]">
							{username}
						</p>
					</div>
					<div className="flex flex-row justify-between">
						<div>
							<p className="text-[#afafaf]">
								Price
							</p>
							<p>{price}ETH</p>
						</div>
						<div>
							<p className="text-[#afafaf]">
								Highest bid
							</p>
							<p>{highestBid}ETH</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AuctionCard;
