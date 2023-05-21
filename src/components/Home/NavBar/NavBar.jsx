import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    Bars3BottomLeftIcon,
    Bars3BottomRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid'
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='bg-teal-300 font-bold   rounded px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className=''>
                <div className='relative flex  items-center justify-between'>
                    {/* Logo Section */}
                    <Link to='/' className='inline-flex items-center'>
                        <img className='w-10 mr-2' src="https://i.ibb.co/R4gSJY5/toy.png" alt="" />
                        <span className='ml-2 text-lime-600 text-3xl font-bold tracking-wide '>
                            Toy Cars Emporium
                        </span>
                    </Link>

                    {/* Nav Items Section */}
                    <ul className='items-center hidden space-x-8 lg:flex'>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => (isActive ? 'p-5 text-blue-500 rounded' : 'default')}
                            >
                                Home
                            </NavLink>
                        </li>



                        <li>
                            <NavLink
                                to='/alltoys'
                                className={({ isActive }) => (isActive ? 'p-5 text-blue-500 rounded' : 'default')}
                            >
                                All Toys
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/myToys'
                                className={({ isActive }) => (isActive ? 'p-5 text-blue-500 rounded' : 'default')}
                            >
                                My Toys
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/addToys'
                                className={({ isActive }) => (isActive ? 'p-5 text-blue-500 rounded' : 'default')}
                            >
                                Add a Toys
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/blog'
                                className={({ isActive }) => (isActive ? 'p-5 text-blue-500 rounded' : 'default')}
                            >
                                Blog
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink
                                to='/login'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Login
                            </NavLink>
                        </li> */}
                        {/* <li>
                            <NavLink
                                to='/signup'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Register
                            </NavLink>
                        </li> */}
                        <li>
                            {user ?
                                <button onClick={handleLogOut} className='btn btn-danger'>Logout</button>
                                :
                                <NavLink
                                    to='/login'
                                    className={({ isActive }) => (isActive ? 'p-5 text-blue-500 rounded' : 'default')}
                                >
                                    Login
                                </NavLink>

                            }
                        </li>
                        <li>
                            {user ?
                                <img title={user?.displayName} className='w-10 rounded' src={user?.photoURL} alt="" /> : ''

                            }
                        </li>
                    </ul>
                    {/* Mobile Navbar Section */}
                    <div className='lg:hidden'>
                        {/* Dropdown Open Button */}
                        <button
                            aria-label='Open Menu'
                            title='Open Menu'
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Bars3BottomRightIcon className='w-5 text-gray-600' />
                        </button>
                        {isMenuOpen && (
                            <div className='absolute top-0 left-0 w-full z-10'>
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                    {/* Logo & Button section */}
                                    <div className='flex items-center justify-between mb-4'>
                                        <div>
                                            <Link to='/' className='inline-flex items-center'>
                                                <Bars3BottomLeftIcon className='h-6 w-6 text-blue-500' />
                                                <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                                    Chef House
                                                </span>
                                            </Link>
                                        </div>
                                        {/* Dropdown menu close button */}
                                        <div>
                                            <button
                                                aria-label='Close Menu'
                                                title='Close Menu'
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <XMarkIcon className='w-5 text-gray-600' />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Mobile Nav Items Section */}
                                    <nav>
                                        <ul className='space-y-4'>

                                            <li>
                                                <Link
                                                    to='/'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                                >
                                                    Home
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    to='/login'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                                >
                                                    Login
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    to='/blog'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                                >
                                                    Blog
                                                </Link>
                                            </li>
                                            <li>
                                                {user ?
                                                    <button onClick={handleLogOut} className='btn btn-primary'>Logout</button>
                                                    :
                                                    <NavLink
                                                        to='/login'
                                                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                                                    >
                                                        Login
                                                    </NavLink>

                                                }
                                            </li>
                                            <li className=''>
                                                {user ?
                                                    <img title={user?.displayName} className='w-10 rounded' src={user?.photoURL} alt="" /> : ''

                                                }
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NavBar;