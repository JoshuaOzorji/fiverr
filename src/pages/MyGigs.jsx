import { Link } from "react-router-dom";
import { TiDelete } from "react-icons/ti";

const MyGigs = () => {
	const currentUser = {
		id: 1,
		username: "Anna",
		isSeller: true,
	};

	return (
		<main>
			<section className='padding'>
				<div className='flex items-center justify-between my-6'>
					<h1 className='text-lg md:text-3xl font-bold'>
						{currentUser.isSeller ? "Gigs" : "Orders"}
					</h1>

					{currentUser.isSeller && (
						<Link to='/add'>
							<button className='button text-xs md:text-base px-2 py-1 animate'>
								Add New Gig
							</button>
						</Link>
					)}
				</div>

				<table className='w-full'>
					<ul className='grid grid-cols-5 font-bold text-xs md:text-xl grid-row-5 sm:grid-cols-5 text-center'>
						<li>Image</li>
						<li>Title</li>
						<li>Price</li>
						<li>Sales</li>
						<li>Action</li>
					</ul>

					<ul className='flex flex-col justify-center sm:grid sm:grid-cols-5 text-center border my-2 items-center py-2 gap-1 place-items-center text-[11px] md:text-base leading-4 md:leading-none px-[2px] bg-[#1dbf730f]'>
						<li>
							<img
								className='w-12 h-6 object-cover'
								src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
								alt=''
							/>
						</li>
						<li className='flex flex-wrap leading-4 '>Stunning concept art</li>
						<li>59</li>
						<li>13</li>

						<button>
							<TiDelete className='w-6 h-6 text-red-700' />
						</button>
					</ul>
				</table>
			</section>
		</main>
	);
};

export default MyGigs;
