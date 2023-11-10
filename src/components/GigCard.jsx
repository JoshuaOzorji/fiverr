import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

/* eslint-disable */
const GigCard = ({ item }) => {
	return (
		<Link
			to='/gig/123'
			className='w-[80%] md:w-[70%] mx-auto gap-20 font-lato group'>
			<img
				src={item.img}
				alt=''
				className='rounded-lg  w-full md:h-[12rem] shadow-md border'
			/>
			<div className='flex flex-col gap-y-2 pt-4 '>
				<div className='flex justify-between font-bold items-center'>
					<div className='flex items-center gap-2'>
						<img src={item.pp} alt='' className='w-8 h-8 rounded-full' />
						<span className=''>{item.username}</span>
					</div>
					<p>Level 2</p>
				</div>

				<p className='group-hover:underline'>{item.desc}</p>

				<div className='font-bold'>
					<div className='flex items-center gap-1 mb-1'>
						<AiFillStar className='text-black w-5 h-5' />
						<span>{item.star.toFixed(1)}</span>
					</div>
					<h2>From ${item.price}</h2>
				</div>
			</div>
		</Link>
	);
};

export default GigCard;
