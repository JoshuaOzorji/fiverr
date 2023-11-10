import { Link } from "react-router-dom";

const Messages = () => {
	const currentUser = {
		id: 1,
		username: "Anna",
		isSeller: true,
	};

	const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`;

	return (
		<section className='padding my-4'>
			<div className='text-lg md:text-2xl font-bold'>
				<h1>Messages</h1>
			</div>

			<div className='w-full my-4'>
				{/* HEAD */}
				<ul className='grid grid-cols-4 font-bold text-xs md:text-xl grid-row-4 sm:grid-cols-4 text-center  '>
					<li>{currentUser.isSeller ? "Buyer" : "Seller"}</li>
					<li>Last Message</li>
					<li>Date</li>
					<li>Action</li>
				</ul>

				{/* BODY */}

				<ul className='flex flex-col justify-center sm:grid sm:grid-cols-4 text-center border my-2 items-center py-2 gap-1 place-items-center text-[11px] md:text-base leading-4 md:leading-none px-[2px]'>
					<li>Charley Sharp</li>
					<li>
						<Link to='/message/123' className='link'>
							{message.substring(0, 20)}...
						</Link>
					</li>
					<li>1 hour ago</li>
					<li>
						<button className='button p-[2px] md:p-2'>Mark as read</button>
					</li>
				</ul>

				<ul className='flex flex-col justify-center sm:grid sm:grid-cols-4 text-center border my-2 items-center py-2 gap-1 place-items-center text-[11px] md:text-base leading-4 md:leading-none px-[2px] bg-[#1dbf730f]'>
					<li>Charley Sharp</li>
					<li>
						<Link to='/message/123' className='link'>
							{message.substring(0, 20)}...
						</Link>
					</li>
					<li>1 hour ago</li>
					<li>
						<button className='button p-[2px] md:p-2'>Mark as read</button>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Messages;
