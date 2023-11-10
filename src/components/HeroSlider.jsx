import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import { slideImages } from "../data";
import Featured from "./Featured";
import { BiSearch } from "react-icons/bi";

const HeroSlider = () => {
	return (
		<main>
			<section className='hidden md:block relative z-10'>
				{/* MD BREAKPOINT */}
				<div>
					<Swiper
						modules={[EffectFade, Autoplay]}
						effect={"fade"}
						loop={true}
						autoplay={{
							delay: 3500,
							disableOnInteraction: false,
						}}
						className=''>
						{slideImages.map((slide) => {
							return (
								<SwiperSlide className='' key={slide.id}>
									<div className=''>
										<img src={slide.src} alt='hero slider' />
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>

				<div className='md:max-w-[30rem] lg:max-w-[40rem] absolute top-0 left-8 right-0 bottom-0 flex items-center justify-center z-10'>
					<Featured />
				</div>
			</section>

			{/* SM BREAKPOINT */}
			<section className='bg-[#0A4226] md:hidden pt-24 px-4 font-lato'>
				<h1 className='text-zinc-50 text-4xl font-bold'>
					Find the right <span className='italic'>freelance</span> service,
					right away
				</h1>
				<div className='flex flex-col w-full py-12 '>
					<input
						type='search'
						className='w-full px-4 py-3 text-base font-abel text-gray-700 border border-solid border-gray-300 animate focus:text-gray-700 focus:bg-zinc-100 focus:border-blue-600 focus:outline-none mb-3 rounded'
						placeholder='Search for any service...'
						aria-label='Search'
					/>

					<button
						className='px-4 py-3  text-zinc-50 bg-primary1 border animate rounded hover:bg-[#128f54]'
						type='button'>
						<BiSearch className='w-5 h-5' />
					</button>
				</div>
			</section>
		</main>
	);
};

export default HeroSlider;
