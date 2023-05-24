import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import { HiOutlineX } from "react-icons/hi";
import { RxAvatar } from "react-icons/rx";
import { AuthContext } from '../../contexts/AuthProvider';
import Swal from 'sweetalert2'


const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
   
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure to logout?',
      text: "You have to log in again to continue",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Logout!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Logged out!',
          'You are Logged out from wolf meal',
        )
        logOut()
      } 
    })
   
  }
  return (
    <div className="bg-black  px-3 lg:px-20 md:px-20  text-white">
      <div className="container mx-auto flex h-20  justify-between items-center">
        <div className='lg:hidden md:hidden' onClick={() => setOpen(!open)}>
          {
            open ? <HiOutlineX className='w-8 h-8' /> : <BiMenu className='w-8 h-8' />
          }
        </div>
        <div className="lg:m-0 md:m-0 mx-auto">
          <h1 className='lg:text-2xl font-third font-bold'>Wolf Meal</h1>
        </div>

        <div>
          <ul className={`flex md:flex-row font-secondary lg:flex-row flex-col z-20 h-screen snap-none md:h-full bg-black w-full text-center overscroll-none lg:static md:static absolute lg:flex ${open ? 'top-14  left-0' : 'top-[-900px]'} justify-center gap-10 text-xl font-semibold items-center`}>
            <li><Link onClick={() => setOpen(!open)} to='/'>Home</Link></li>
            <li><Link onClick={() => setOpen(!open)} to='/meals'>Meals</Link></li>
            <li><Link onClick={() => setOpen(!open)} to="/about">About</Link></li>
            <li><Link onClick={() => setOpen(!open)} to='/orders'>Orders</Link></li>
            {
              !user &&
              <>
                <li><Link onClick={() => setOpen(!open)} to='/signup'>Signup</Link></li>
                <li><Link onClick={() => setOpen(!open)} to='/signin'>Signin</Link></li>
              </>
            }
          </ul>
        </div>



        {
          user &&
          <div  className=" dropdown dropdown-bottom dropdown-end" >
            <label tabIndex={0} className="m-1">

              <div className='cursor-pointer  tooltip tooltip-left' data-tip={user?.displayName}>
                {
                  user?.photoURL ?
                    <div className="avatar">
                      <div className="w-8 rounded-full ring  ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} alt="profile" />
                      </div>
                    </div>
                    :

                    <div className="avatar">
                      <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <RxAvatar className='w-full h-full' />
                      </div>
                    </div>

                }
              </div>
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-blue-700 rounded-box w-52">
              <li className='hover:bg-white hover:text-black text-white'>
                <Link to="/profile">
                  Profile
                </Link>
              </li>
              <li className='hover:bg-white hover:text-black text-white' onClick={handleLogout}>
                <Link>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        }



      </div>
    </div>

  );
};

export default Header;