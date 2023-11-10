const add = () => {
	return (
		<main className='padding my-4 font-lato text-accent flex flex-col justify-center'>
			<h1 className='text-2xl md:text-4xl font-bold text-center mb-2'>
				Add New Gig
			</h1>
			<section className='w-full md:w-[50%] mx-auto border p-6 rounded-lg'>
				{/* BASIC DETAILS */}
				<div className='flex flex-col'>
					{/* TITLE */}
					<label htmlFor='' className='label'>
						Title
					</label>
					<input
						type='text'
						placeholder="e.g. I will do something I'm really good at"
						className='input'
					/>
					{/* CATEGORIES */}
					<div className='flex justify-between border p-2 rounded-lg mt-2'>
						<label htmlFor='' className='md:text-xl'>
							Category
						</label>
						<select name='cats' id='cats' className='form-focus rounded-lg'>
							<option value='design'>Design</option>
							<option value='web'>Web Development</option>
							<option value='animation'>Animation</option>
							<option value='music'>Music</option>
						</select>
					</div>

					{/* COVER IMAGES*/}
					<label htmlFor='' className='label'>
						Cover Image
					</label>
					<input type='file' className='input' />
					{/* UPLOAD IMAGES*/}
					<label htmlFor='' className='label'>
						Upload Images
					</label>
					<input type='file' multiple className='input' />
					{/* DESCRIPTION*/}
					<label htmlFor='' className='label'>
						Description
					</label>
					<textarea
						name=''
						id=''
						cols='20'
						rows='5'
						placeholder='Brief descriptions to introduce your service to customers'
						className='input'></textarea>
				</div>

				{/* ADDITIONAL DETAILS */}
				<div className='flex flex-col'>
					{/* SERVICE TITLE */}
					<label htmlFor='' className='label'>
						Service Title
					</label>
					<input
						type='text'
						placeholder='e.g. One-page web design'
						className='input'
					/>

					{/* SHORT DESCRIPTION */}
					<label htmlFor='' className='label'>
						Short Description
					</label>
					<textarea
						name=''
						id=''
						cols='30'
						rows='5'
						placeholder='Short description of your service'
						className='input'></textarea>

					{/* DELIVERY TIME */}
					<label htmlFor='' className='label'>
						Delivery Time{" "}
						<span className='italic text-base'>(e.g. 3 days)</span>
					</label>
					<input type='number' className='input' />

					{/*REVISION NUMBER */}
					<input type='number' />

					{/* ADD FEATURES */}
					<label htmlFor='' className='label'>
						Add Features
					</label>
					<input type='text' placeholder='e.g. page design' className='input' />
					<input
						type='text'
						placeholder='e.g. file uploading'
						className='input'
					/>
					<input
						type='text'
						placeholder='e.g.setting up a domain'
						className='input'
					/>
					<input type='text' placeholder='e.g. hosting' className='input' />

					{/* PRICE */}
					<label htmlFor='' className='label'>
						Price
					</label>
					<input type='number' className='input' placeholder='$' />
				</div>
			</section>

			{/* BUTTON */}
			<div className='text-center w-full md:w-[50%] mx-auto my-6'>
				<button className='md:text-xl px-4 py-2  text-zinc-50 bg-primary1 border animate rounded-lg hover:bg-[#128f54]'>
					Create
				</button>
			</div>
		</main>
	);
};

export default add;
