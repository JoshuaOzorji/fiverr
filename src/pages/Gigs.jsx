import { useRef, useState } from "react";
import { gigs } from "../data.jsx";
import GigCard from "../components/GigCard.jsx";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
const Gigs = () => {
	const [sort, setSort] = useState("sales");
	const [open, setOpen] = useState(false);
	const minRef = useRef();
	const maxRef = useRef();

	const reSort = (type) => {
		setSort(type);
		setOpen(false);
	};

	const apply = () => {
		console.log(minRef.current.value);
		console.log(maxRef.current.value);
	};
	return (
		<main className='font-lato padding my-4 md:my-8'>
			<div className='flex flex-col gap-2 md:gap-4'>
				{/* BREADCRUMB */}
				<div className='flex items-center gap-x-2'>
					<Link to='/'>
						<AiFillHome className='w-3 h-3 md:w-4 md:h-4' />
					</Link>{" "}
					{`>`} <p className='text-xs '>Graphics & Design</p>
				</div>

				<p className='font-bold text-2xl md:text-4xl'>{`Graphics & Design`}</p>

				<div className='flex flex-col md:flex-row justify-between'>
					<div className='flex flex-col md:flex-row gap-2 text-sm'>
						<span className='font-light md:font-bold '>Budget </span>
						<input
							ref={minRef}
							type='number'
							placeholder='min'
							className='form-focus rounded-md px-2'
						/>
						<input
							ref={maxRef}
							type='number'
							placeholder='max'
							className='form-focus rounded-md px-2'
						/>
						<button onClick={apply} className='button px-2 animate'>
							Apply
						</button>
					</div>
					<div className='text-sm'>
						<span className='font-light md:font-bold '>Sort by: </span>
						<span className='sortType'>
							{sort === "sales" ? "Best Selling" : "Newest"}
						</span>
						<img src='./img/down.png' alt='' onClick={() => setOpen(!open)} />
						{open && (
							<div className='rightMenu'>
								{sort === "sales" ? (
									<span onClick={() => reSort("createdAt")}>Newest</span>
								) : (
									<span onClick={() => reSort("sales")}>Best Selling</span>
								)}
								<span onClick={() => reSort("sales")}>Popular</span>
							</div>
						)}
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-4'>
					{gigs.map((gig) => (
						<GigCard key={gig.id} item={gig} />
					))}
				</div>
			</div>
		</main>
	);
};

export default Gigs;
