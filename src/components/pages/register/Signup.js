import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaFacebook, FaGoogle } from "react-icons/fa";
const Signup = () => {
    const { createUser, googleSignin, facebookSignin } = useContext(AuthContext)
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/';


    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;
        if (password !== confirmPassword) {
            setError("Password didn't match")
        };
        if (!/[*@!#%&()^~{}]+/.test(password)) {
          return  setError("Please input atleast one special character");
        };
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                form.reset()
                setError("User Created Successfully");
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })

    }
    const handleGooglesignin = () => {
        googleSignin()
            .then(res => {
                navigate(from, { replace: true });
            })
            .catch(error => setError(error.message))
    }
    return (
        <div className="flex  flex-col items-center min-h-screen my-4 pt-6 sm:justify-center sm:pt-0 bg-gray-50">
            <div>
                <Link>
                    <h3 className="text-3xl font-bold text-blue-900">
                        Wolf Meal
                    </h3>
                </Link>
            </div>
            <div className="w-full px-6 py-4 mt-2 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                <form onSubmit={handleRegister}>
                    <div>
                        <div className='mt-4'>
                            <h1 className='font-semibold p-1'>Name</h1>
                            <input name='name' className='w-full p-2 border rounded' placeholder='name' type="text" />
                        </div>
                        <div className='mt-4'>
                            <h1 className='font-semibold p-1'>Email</h1>
                            <input required name="email" placeholder='email' className='w-full p-2 border rounded' type="email" />
                        </div>
                        <div className='mt-4'>
                            <h1 className='font-semibold p-1'>Password</h1>
                            <input required name="password" type="password" className='w-full p-2 border rounded' placeholder='password' />
                        </div>
                        <div className='mt-4'>
                            <h1 className='font-semibold p-1'>Confirm Passwprd</h1>
                            <input required type="password" name='confirm' placeholder='confirm password' className='w-full p-2 border rounded' />
                        </div>
                    </div>
                    <p className='text-red-600 font-semibold'>{error}</p>
                    <div className="flex items-center mt-4">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-900 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-900">
                            Register
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-grey-600">
                    Already have an account?
                    <span>
                        <Link to="/signin" className="  hover:underline">
                            log in
                        </Link>
                    </span>
                </div>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full" />
                    <p className="px-3 ">OR</p>
                    <hr className="w-full" />
                </div>
                <div className="my-6 space-y-2">
                    <button
                        onClick={handleGooglesignin}
                        aria-label="Login with Google"
                        type="button"
                        className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
                    >
                     <FaGoogle className='w-6 h-6'/>
                        <p>Login with Google</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;