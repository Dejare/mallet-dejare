import "./assets/styles/main.css";
import HeroCards from "./components/HeroCards";
import sneak from "./assets/images/sneakerhead.svg";
import rect38 from "./assets/images/Rectangle 38-1.svg";
import AuctionCard from "./components/AuctionCard";
import "./assets/styles/variables.scss";

// hero images
import heroOne from "./assets/images/heroOne.svg";
import heroTwo from "./assets/images/heroTwo.svg";
import heroThree from "./assets/images/heroThree.svg";

// aution images
import aImageOne from "./assets/images/Rectangle 38-6.svg";
import aImageTwo from "./assets/images/Rectangle 38-7.svg";
import aImageThree from "./assets/images/Rectangle 38-8.svg";
import aImageFour from "./assets/images/Rectangle 38-9.svg";

// logo
import webflow from "./assets/images/logo/Mask groupwebflow.svg";
import instagram from "./assets/images/logo/Mask group.svg";
import medium from "./assets/images/logo/Mask groupmedium.svg";
import metamask from "./assets/images/logo/Group 67metamask.svg";
import coinbase from "./assets/images/logo/Mask groupcoinbase.svg";
// icons
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import Categories from "./components/Categories";
import { FiCreditCard } from "react-icons/fi";
import { FiCodepen, FiPenTool, FiGift } from "react-icons/fi";
// socail icons
import {
	RiFacebookLine,
	RiRedditLine,
	RiDiscordLine,
	RiTwitterLine,
} from "react-icons/ri";
import { RiArrowRightUpLine } from "react-icons/ri";

// categories image
import artImage from "./assets/images/categories1.svg";
import virtualImage from "./assets/images/categories3.svg";
import abstractImage from "./assets/images/categories4.svg";
import musicImage from "./assets/images/categories2.svg";
import Howtocard from "./components/Howtocard";

function App() {
	return (
		<div className="App">
			<div className=" bg-black min-h-screen hero">
				{/* header */}
				<div className="z-[10000]">
					<header className="p-8 text-white flex flex-row items-center justify-between">
						<h3 className="heading-font gradient">
							Mall<span>eth</span>
						</h3>
						<nav className="hidden md:flex">
							<ul className="flex flex-row">
								<li className="mx-4 body-font">
									<a href="#">
										Home
									</a>
								</li>
								<li className="mx-4 body-font">
									<a href="#">
										Explore
									</a>
								</li>
								<li className="mx-4 body-font">
									<a href="#">
										Art
									</a>
								</li>
								<li className="mx-4 body-font">
									<a href="#">
										Magazine
									</a>
								</li>
								<li className="mx-4 body-font">
									<a href="#">
										Community
									</a>
								</li>
							</ul>
						</nav>
						<button className="btn">
							{" "}
							Join Now{" "}
						</button>
					</header>
					<div className=" text-white my-16 px-6 md:px-0 md:w-3/4 m-auto">
						<h1 className="md:text-7xl text-4xl text-center px-6 ">
							Unlock the power of{" "}
							<span className="gradient">
								{" "}
								your brand’s
								community
							</span>
						</h1>
						<p className="md:text-xl text-center">
							Some people express and
							feel love through
							gift-giving. NFT is one
							way people demonstrate
							that they are thinking{" "}
							<br /> about you.
						</p>
						<div className="flex flex-row m-auto items-center justify-center my-5">
							<button className="btn mr-8 flex flex-row items-center">
								Join Now{" "}
								<RiArrowRightUpLine className="ml-4" />
							</button>
							<button className="btn_two flex flex-row items-center">
								Explore{" "}
								<RiArrowRightUpLine className="ml-4" />
							</button>
						</div>

						{/* cards */}
					</div>
					<div className="md:flex hidden flex-row mt-24 ml-8">
						<HeroCards
							backgroundColor="#FDD2FA"
							image={heroOne}
						/>
						<HeroCards image={heroTwo} />
						<HeroCards
							backgroundColor="#E8C2BF"
							image={heroThree}
						/>
					</div>
				</div>
			</div>

			<div className="flex md:flex-row flex-col w-4/4 m-auto text-white py-24 min-h-screen items-center justify-around bg-[#151515]">
				<div className="order-2 md:order-1">
					<p className="text-5xl">
						Sneaker Heads
					</p>
					<div className="flex flex-row items-center mt-5">
						<img src={sneak} />
						<p className="ml-3">@Sptdey</p>
					</div>
					<p className="mt-4">pottersnutmeg</p>

					<div className="flex flex-row ">
						<div className="mt-5">
							<h1 className="text-[16px] text-[#AFAFAF]">
								Current Bid
							</h1>
							<p className="text-2xl mt-4">
								3.05ETH
							</p>
							<p className="text-[#AFAFAF]">
								$3,975.25
							</p>
						</div>
						<div className="w-[1px] mx-5 h-24 mt-6 bg-[#afafaf]"></div>
						<div className="mt-5">
							<h1 className="text-[#AFAFAF]">
								Auction Ends
							</h1>
							<div className="flex flex-row items-center">
								<div className="mx-3 mt-4">
									<p className="text-2xl">
										23
									</p>
									<p className="text-[#AFAFAF]">
										Hours
									</p>
								</div>
								:
								<div className="mx-3 mt-4">
									<p className="text-2xl">
										23
									</p>
									<p className="text-[#AFAFAF]">
										Minutes
									</p>
								</div>
								:
								<div className="mx-3 mt-4">
									<p className="text-2xl">
										45
									</p>
									<p className="text-[#AFAFAF]">
										Seconds
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-row mt-8">
						<button className="btn mr-8">
							Place a Bid
						</button>
						<button className="btn_two">
							View Sale
						</button>
					</div>
				</div>
				<div className="order-1 md:order-2 mb-6 ">
					<img src={rect38} alt="" />
				</div>
			</div>
			<section
				id="trending"
				className="p-8 text-white min-h-screen"
			>
				<div className="title flex md:flex-row flex-col justify-between">
					<h1 className="text-4xl">
						Trending Auctions
					</h1>
					<div>
						<a
							href=""
							className="underline gradient heading-font text-2xl"
						>
							See all
						</a>
					</div>
				</div>
				<div className="flex flex-col h-full items-center justify-center">
					<div className="flex flex-row gap-4 justify-start items-center snap-x snap-mandatory w-full overflow-x-auto scrollbar-hide">
						<button className="w-10 h-10 border border-white md:flex hidden items-center justify-center rounded-full">
							<FaLessThan />
						</button>
						<AuctionCard
							nftName="Codehow"
							username="@adejare"
							price="3.5"
							highestBid="1.35"
							img={aImageOne}
						/>
						<AuctionCard
							nftName="Green-Plus"
							username="@janc"
							price="1.90"
							highestBid="1.25"
							img={aImageTwo}
						/>
						<AuctionCard
							nftName="Plusstrip"
							username="@trishaa"
							price="1.05"
							highestBid="0.05"
							img={aImageThree}
						/>
						<AuctionCard
							nftName="Singletechno"
							username="@thereweb"
							price="3.75"
							highestBid="1.05"
							img={aImageFour}
						/>
						<button className="w-10 h-10 border border-white md:flex hidden items-center justify-center rounded-full">
							<FaGreaterThan />
						</button>
					</div>
					<div className="logos flex flex-row flex-wrap items-center justify-center mt-16">
						<img
							src={webflow}
							alt="webflow logo"
							className="mx-5"
						/>
						<img
							src={instagram}
							alt="instagram logo"
							className="mx-5"
						/>
						<img
							src={medium}
							alt="medium logo"
							className="mx-5"
						/>
						<img
							src={metamask}
							alt="metamask logo"
							className="mx-5"
						/>
						<img
							src={coinbase}
							alt=" coinbase logo"
							className="mx-5"
						/>
					</div>
				</div>
			</section>

			<section className="text-white">
				{/* catergories */}
				<div className="w-full bg-[#151515] h-full p-8 ">
					<div>
						<h2 className="text-center text-4xl mt-12	">
							Catergories
						</h2>
					</div>
					<div className="flex flex-row gap-4 justify-start items-center snap-x snap-mandatory w-full overflow-x-auto scrollbar-hide my-12">
						<Categories
							text="Art"
							image={artImage}
						/>
						<Categories
							text="Virtual"
							image={virtualImage}
						/>
						<Categories
							text="Abstract"
							image={abstractImage}
						/>
						<Categories
							text="Music"
							image={musicImage}
						/>
					</div>
				</div>
				{/* Hwo to become a creator */}
				<div>
					<div>
						<h2 className="text-center text-4xl mt-12 p-6 md:p-0">
							How to become a creator
						</h2>
					</div>
					<div className="flex mt-8 flex-row flex-wrap items-center justify-center">
						<Howtocard
							backgroundColor="#DBFDDA"
							title="Set Up Wallet"
							body="Set up wallet seamlessly with our quick onboarding process. Simple as A B C!"
							num="1"
							textColor="#056603"
							children={
								<FiCreditCard />
							}
							iconBg="##D0F8CF"
						/>
						<Howtocard
							backgroundColor="#E3D3BE"
							title="Create Collections"
							body="Create collections for your NFTs based on mood, vibes and history. Know where your items are at every given time."
							num="2"
							textColor="#8E5405"
							children={<FiCodepen />}
							iconBg="#D9C09F"
						/>
						<Howtocard
							backgroundColor="#B1B5D6"
							title="Add NFTS"
							body="Add your unique creations. We believe in the uniqueness of individuals. Be you!"
							num="3"
							textColor="#1E2661"
							children={<FiPenTool />}
							iconBg="#A4A8CC"
						/>
						<Howtocard
							backgroundColor="#AFDBF3"
							title="List For Sale"
							body="Get access to over 20,000+ individulas. List your NFTs for sale and get instant offers."
							num="4"
							textColor="#056294"
							children={<FiGift />}
							iconBg="#83C6EA"
						/>
					</div>
				</div>
			</section>
			<section>
				{/* newsletter */}
				<div className="newsletter flex md:flex-row flex-col items-center justify-between px-8">
					<div className="py-4 md:py-0">
						<p className="text-4xl font-bold ">
							Stay updated With Our{" "}
							<br /> Newsletters
						</p>
						<div className="mt-4 flex flex-row">
							<input
								type="text"
								placeholder="Enter your email address"
								className="bg-transparent py-4 px-4 pr-12 rounded-[20px] border border-black placeholder:text-black placeholder:body-font"
							/>
							<button className="py-[17px] px-9 bg-[#18191F] text-white rounded-[20px] -ml-8">
								Submit
							</button>
						</div>
					</div>
					<div className="">
						<div>
							<img
								src={musicImage}
								alt=""
							/>
							{/* <img src={musicImage} alt="" />
							<img src={musicImage} alt="" /> */}
						</div>
					</div>
				</div>
				<div className="footer bg-[#1B1B1B] w-full h-full text-[#fafafa] flex md:flex-row flex-col  p-8">
					<div className="md:w-[20%] order-last md:order-1">
						<h3 className="heading-font gradient">
							Mall<span>eth</span>
						</h3>
						<p className="">
							The world’s first and
							largest digital
							marketplace for crypto
							collections and
							non-fungible tokens
							(NFTs). Buy, sell, and
							discover exclusive
							digital items.
						</p>

						<div className="flex flex-row items-center mt-7">
							<div className="socialIcons">
								<RiFacebookLine />
							</div>
							<div className="socialIcons">
								<RiTwitterLine />
							</div>
							<div className="socialIcons">
								<RiDiscordLine />
							</div>
							<div className="socialIcons">
								<RiRedditLine />
							</div>
						</div>
					</div>
					<div className="flex md:flex-row flex-col items-start justify-evenly md:w-[80%] footerLinks md:order-2">
						<div className="my-4 md:my-0">
							<p className="font-bold footerLinkHead">
								Marketplace
							</p>
							<p>Solana NFTs</p>
							<p>Nitro</p>
							<p>COllectibles</p>
							<p>Virtual World</p>
						</div>
						<div className="my-4 md:my-0">
							<p className="font-bold footerLinkHead">
								Marketplace
							</p>
							<p>Solana NFTs</p>
							<p>Nitro</p>
							<p>COllectibles</p>
							<p>Virtual World</p>
						</div>
						<div className="my-4 md:my-0">
							<p className="font-bold footerLinkHead">
								Marketplace
							</p>
							<p>Solana NFTs</p>
							<p>Nitro</p>
							<p>COllectibles</p>
							<p>Virtual World</p>
						</div>
						<div className="my-4 md:my-0">
							<p className="font-bold footerLinkHead">
								Marketplace
							</p>
							<p>Solana NFTs</p>
							<p>Nitro</p>
							<p>COllectibles</p>
							<p>Virtual World</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
