import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { RxAvatar } from 'react-icons/rx';
const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className='flex justify-center my-5'>
                {
                    user?.photoURL ?
                        <div className="avatar ">
                            <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} alt="profile" />
                            </div>
                        </div>
                        :

                        <div className="avatar">
                            <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <RxAvatar className='w-full h-full' />
                            </div>
                        </div>

                }
            </div>
            {
                user?.displayName &&
                <div>
                    <h1 className='text-center text-2xl font-bold'>{user.displayName}</h1>
                </div>
            }
            <div>
                <h1 className='text-center text-xl font-semibold mt-2'>
                    "Age is just a number, i always grow up my skill"
                </h1>
            </div>
            <div className="container px-5 py-10 mx-auto">

                <form className="lg:w-1/2 md:w-2/3 mx-auto">

                    {
                        user.displayName &&
                        <div className=" flex justify-center items-center gap-5">
                            <label className="leading-7 text-xl text-gray-600">Name: </label>
                            <input defaultValue={user.displayName} required type="text" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    }
                    {
                        user.email &&
                        <div className="mt-5 flex justify-center items-center gap-5">
                            <label className="leading-7 text-xl text-gray-600">Email: </label>
                            <input defaultValue={user.email} required type="text" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    }

                </form>
            </div>
        </div>
    );
};

export default Profile;