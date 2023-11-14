import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from "react-icons/ai";
import { BiDislike, BiLike, BiTime } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { LiaSyncSolid } from "react-icons/lia";

const gig = () => {
	return (
		<main className='padding py-8 flex flex-col md:flex-row gap-20 font-lato text-accent relative'>
			{/* LEFT */}
			<section className='md:w-[60%]'>
				{/* BREADCRUMB */}
				<div className='flex items-center gap-x-2'>
					<Link to='/'>
						<AiFillHome className='w-3 h-3 md:w-4 md:h-4' />
					</Link>{" "}
					{`>`} <p className='text-xs '>Graphics & Design</p>
				</div>
				<h1 className='font-bold text-2xl md:text-3xl mb-4'>
					I will create ai generated art for you
				</h1>
				<div className='flex items-center gap-2'>
					<img
						className='w-14 h-14 rounded-full'
						src='https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600'
						alt=''
					/>
					<div className='flex flex-col'>
						<p className='font-bold'>Anna Bell</p>

						<div className='aside-cont mb-1'>
							<AiFillStar className='text-black w-5 h-5' />
							<span>5.0</span>
						</div>
					</div>
				</div>

				<Swiper
					modules={[Navigation]}
					navigation={{
						nextEl: ".button-next-slide",
						prevEl: ".button-prev-slide",
					}}
					className='mySwiper my-4 max-h-[80vh]'>
					<SwiperSlide>
						<img
							src='https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600'
							alt=''
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src='https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600'
							alt=''
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src='https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600'
							alt=''
						/>
					</SwiperSlide>

					<button className='swiper-button-prev button-prev-slide text-accent bg-zinc-50 rounded-full p-6 font-bold shadow-lg'></button>
					<button className='swiper-button-next button-next-slide text-accent bg-zinc-50 rounded-full p-6 font-bold shadow-lg'></button>
				</Swiper>

				<h2 className='text-xl font-bold'>About This Gig</h2>
				<h3 className='text-base leading-8 my-4'>
					I use an AI program to create images based on text prompts. This means
					I can help you to create a vision you have through a textual
					description of your scene without requiring any reference images.
					<br />
					{`Some things I've found it often excels at are: Character portraits
					(E.g. a picture to go with your DnD character) Landscapes (E.g.
					wallpapers, illustrations to compliment a story) Logos (E.g. Esports
					team, business, profile picture) You can be as vague or as descriptive
					as you want. Being more vague will allow the AI to be more creative
					which can sometimes result in some amazing images. You can also be
					incredibly precise if you have a clear image of what you want in mind.
					All of the images I create are original and will be found nowhere
					else. If you have any questions you're more than welcome to send me a
					message.`}
				</h3>
				<div className=''>
					<div className='flex flex-col gap-3'>
						<h2 className='font-bold text-xl'>About The Seller</h2>
						<div className='flex flex-row gap-2'>
							<img
								src='https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600'
								alt=''
								className='w-12 h-12 rounded-full'
							/>
							<div className='font-bold'>
								<span>Anna Bell</span>
								<div className='stars'>
									<img src='/img/star.png' alt='' />
									<img src='/img/star.png' alt='' />
									<img src='/img/star.png' alt='' />
									<img src='/img/star.png' alt='' />
									<img src='/img/star.png' alt='' />
									<span>5.0</span>
								</div>
							</div>
						</div>
						<span>
							<button className='font-bold border px-2 py-1 rounded-lg border-accent2'>
								Contact Me
							</button>
						</span>
					</div>

					<div className='flex flex-col gap-4 border my-6 p-4'>
						<div className='grid grid-cols-1 md:grid-cols-2 text-base gap-6 '>
							<div className='flex flex-col gap-2'>
								<span className=''>From</span>
								<span className='font-bold'>USA</span>
							</div>
							<div className='flex flex-col gap-2'>
								<span className=''>Member since</span>
								<span className='font-bold'>Aug 2022</span>
							</div>
							<div className='flex flex-col gap-2'>
								<span className=''>Avg. response time</span>
								<span className='font-bold'>4 hours</span>
							</div>
							<div className='flex flex-col gap-2'>
								<span className=''>Last delivery</span>
								<span className='font-bold'>1 day</span>
							</div>
							<div className='flex flex-col gap-2'>
								<span className=''>Languages</span>
								<span className='font-bold'>English</span>
							</div>
						</div>
						<hr />
						<p className='leading-8'>
							My name is Anna, I enjoy creating AI generated art in my spare
							time. I have a lot of experience using the AI program and that
							means I know what to prompt the AI with to get a great and
							incredibly detailed result.
						</p>
					</div>
				</div>

				{/* REVIEWS */}
				<div className='reviews flex flex-col gap-4'>
					<h2 className='font-bold'>Reviews</h2>
					<div className='border-t pt-6'>
						<div className='flex gap-2 items-start'>
							<img
								className='w-14 h-14 rounded-full'
								src='https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600'
								alt=''
							/>
							<div>
								<div className='flex flex-col gap-1'>
									<h2 className='font-bold'>Garner David</h2>
									<div className='flex items-center gap-2'>
										<img
											className='w-4 h-4'
											src='https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png'
											alt=''
										/>
										<span>United States</span>
									</div>

									<div className='aside-cont '>
										<AiFillStar className='text-black w-5 h-5' />
										<AiFillStar className='text-black w-5 h-5' />
										<AiFillStar className='text-black w-5 h-5' />
										<AiFillStar className='text-black w-5 h-5' />
										<AiFillStar className='text-black w-5 h-5' />
										<span>5</span>
									</div>
								</div>

								<p className='my-4'>
									I just want to say that art_with_ai was the first, and after
									this, the only artist Ill be using on Fiverr. Communication
									was amazing, each and every day he sent me images that I was
									free to request changes to. They listened, understood, and
									delivered above and beyond my expectations. I absolutely
									recommend this gig, and know already that Ill be using it
									again very very soon
								</p>

								<div className='flex gap-2 items-center'>
									<p>Helpful?</p>

									<span className='aside-cont'>
										Yes <BiLike />
									</span>

									<span className='aside-cont'>
										No <BiDislike />
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* RIGHT */}
			<section className='md:w-[40%] '>
				<aside className='sticky top-32 border p-8 flex flex-col gap-4'>
					<div className='flex justify-between text-base'>
						<h3 className='font-bold'>1 AI generated image</h3>
						<h2>$59.99</h2>
					</div>
					<p className=''>
						I will create a unique high quality AI generated image based on a
						description that you give me
					</p>
					<div className='flex items-center justify-between'>
						<div className='aside-cont'>
							<BiTime className='' />
							<span>2 Days Delivery</span>
						</div>
						<div className='aside-cont'>
							<LiaSyncSolid className='' />
							<span>3 Revisions</span>
						</div>
					</div>
					<div className='features'>
						<div className='aside-cont'>
							<BsCheck className='aside-icon' />
							<span>Prompt writing</span>
						</div>
						<div className='aside-cont'>
							<BsCheck className='aside-icon' />
							<span>Artwork delivery</span>
						</div>
						<div className='aside-cont'>
							<BsCheck className='aside-icon' />
							<span>Image upscaling</span>
						</div>
						<div className='aside-cont'>
							<BsCheck className='aside-icon' />
							<span>Additional design</span>
						</div>
					</div>
					<button className='border p-2 text-white bg-black hover:bg-accent rounded-lg flex items-center justify-center animate'>
						<p>Continue</p>
					</button>
				</aside>
			</section>
		</main>
	);
};

export default gig;
