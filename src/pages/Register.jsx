import { useState } from "react";
import newRequest from "../utils/newRequest.js";
import { useNavigate } from "react-router-dom";

function Register() {
	const [user, setUser] = useState({
		username: "",
		email: "",
		password: "",
		img: "",
		country: "",
		isSeller: false,
		desc: "",
	});

	const navigate = useNavigate();

	const handleSubmit = () => {
		"";
	};

	const handleChange = () => {
		"";
	};

	const handleSeller = () => {
		"";
	};
	return (
		<main className='padding font-lato'>
			<section className='my-4 md:my-10'>
				<h1 className='text-center text-base md:text-lg font-bold mb-2'>
					Create a new account
				</h1>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col md:mx-10 text-sm md:text-base'>
					<div className='flex flex-col md:flex-row gap-4'>
						{/* LEFT */}
						<div className='md:w-[50%] flex flex-col gap-[2px]'>
							{/* USERNAME */}

							<label htmlFor=''>Username</label>
							<input
								name='username'
								type='text'
								placeholder='johndoe'
								className='form-focus p-2'
								onChange={handleChange}
							/>
							{/* EMAIL */}
							<label htmlFor=''>Email</label>
							<input
								name='email'
								type='email'
								placeholder='email'
								className='form-focus p-2'
								onChange={handleChange}
							/>
							{/* PASSWORD */}
							<label htmlFor=''>Password</label>
							<input
								name='password'
								type='password'
								placeholder='password'
								onChange={handleChange}
								className='form-focus p-2'
							/>
							{/* PROFILE PICTURE */}
							<label htmlFor=''>Profile Picture</label>
							<input type='file' className='form-focus p-2' />
							{/* COUNTRY */}
							<label htmlFor=''>Country</label>
							<input
								name='country'
								type='text'
								placeholder='e.g. Australia'
								className='form-focus p-2'
								onChange={handleChange}
							/>
						</div>

						{/* RIGHT */}
						<div className='md:w-[50%] flex flex-col gap-[2px]'>
							<h1 className='text-center text-primary1'>
								Want to become a seller?
							</h1>
							<div className='flex items-center gap-2'>
								<label htmlFor=''>Activate the seller account </label>
								<label className='switch'>
									<input type='checkbox' onChange={handleSeller} />
									<span className='slider round'></span>
								</label>
							</div>

							{/* PHONE NUMBER */}

							<label htmlFor=''>Phone Number</label>
							<input
								name='phone'
								type='text'
								placeholder='+1 234 567 89'
								className='p-2 form-focus'
								onChange={handleChange}
							/>

							{/* DESCRIPTION */}

							<label htmlFor=''>Description</label>
							<textarea
								placeholder='A short description of yourself'
								name='desc'
								id=''
								rows='5'
								className='form-focus p-2'
								onChange={handleChange}></textarea>
						</div>
					</div>
					{/* BUTTON */}
					<span className='mx-auto mt-4'>
						<button type='button' className='button animate py-1 px-3'>
							Register
						</button>
					</span>
				</form>
			</section>
		</main>
	);
}

export default Register;
