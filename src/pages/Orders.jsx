import { HiMail } from "react-icons/hi";

const Orders = () => {
	const currentUser = {
		id: 1,
		username: "Anna",
		isSeller: true,
	};

	return (
		<section className='padding my-4'>
			<h1 className='text-lg md:text-2xl font-bold mb-2'>Orders</h1>

			<table className='w-full'>
				<ul className='grid grid-cols-5 font-bold text-xs md:text-xl grid-row-4 sm:grid-cols-5 text-center'>
					<li>Image</li>
					<li>Title</li>
					<li>Price</li>
					{<th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>}
					<li>Contact</li>
				</ul>

				<ul className='flex flex-col justify-center sm:grid sm:grid-cols-5 text-center border my-2 items-center py-2 gap-1 place-items-center text-[11px] md:text-base leading-4 md:leading-none px-[2px] bg-[#1dbf730f]'>
					<li>
						<img
							className='w-10 h-6 object-cover'
							src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
							alt=''
						/>
					</li>
					<li className='flex flex-wrap leading-4 '>Stunning concept art</li>
					<li>59</li>
					<li>13</li>

					<button>
						<HiMail className='w-4 h-4 md:w-6 md:h-6text-accent' />
					</button>
				</ul>

				<ul className='flex flex-col justify-center sm:grid sm:grid-cols-5 text-center border my-2 items-center py-2 gap-1 place-items-center text-[11px] md:text-base leading-4 md:leading-none px-[2px] bg-[#1dbf730f]'>
					<li>
						<img
							className='w-10 h-6 object-cover'
							src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
							alt=''
						/>
					</li>
					<li className='flex flex-wrap leading-4 '>Stunning concept art</li>
					<li>59</li>
					<li>13</li>

					<button>
						<HiMail className='w-4 h-4 md:w-6 md:h-6text-accent' />
					</button>
				</ul>
			</table>
		</section>
	);
};

export default Orders;
