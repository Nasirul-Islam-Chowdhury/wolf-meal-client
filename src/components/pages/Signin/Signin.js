import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaFacebook , FaGoogle} from "react-icons/fa";

const Signin = () => {
    const [error, setError] = useState("");
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate()
    const {userSignin,  googleSignin} = useContext(AuthContext);
    const handleGoogleSignin = () => {
        googleSignin()
            .then(result => {
                console.log(result.user)
                navigate(from, {replace: true});
            })
            .catch(error => {console.log(error)
                setError(error.message)
            })
    }
    const handleSignin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        userSignin(email, password)
        .then(res=>{
            console.log(res.user)
            form.reset();
            navigate(from, {replace: true});
        }
        )
        .catch(error=>{console.log(error)
          return  setError(error.message)
        })

    }
    return (
        <div className='my-5'>
            <div className="flex flex-col items-center min-h-[100vh] pt-6 sm:justify-center sm:pt-0 bg-gray-50">
              
                   
                      
                  
              
                <div className="w-full px-10 py-20  overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={handleSignin}>
                    <h3 className="text-3xl text-center font-bold text-blue-900">
                            Wolf Meal
                        </h3>
                        <div>
                            <div className='mt-4'>
                                <h1 className='font-semibold p-1'>Email</h1>
                                <input name="email" placeholder='email' className='w-full p-2 border rounded' type="email" required/>
                            </div>
                            <div className='mt-4'>
                                <h1 className='font-semibold p-1'>Password</h1>
                                <input name="password" required placeholder='password' className='w-full p-2 border rounded' type="password" />
                            </div>
                        </div>
<p className='text-red-500 font-semibold'>{error}</p>
                        <div className="flex items-center mt-4">
                            <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-900 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-900">
                                Log in
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center w-full my-4">
                        <hr className="w-full" />
                        <p className="px-3 ">OR</p>
                        <hr className="w-full" />
                    </div>
                    <div className="my-6 space-y-2">
                        <button
                        onClick={handleGoogleSignin}
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
        </div>
    );
};

export default Signin;