

import {useState} from "react";
import {Link} from "react-router-dom";
import logo from '../../../assets/icons8-leaves-96.png';

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="dark:bg-slate-700 hover:dark:bg-slate-800 flex items-center justify-between p-2 relative">
            <Link to='/' className=' text-3xl flex items-center text-white hover:dark:bg-slate-700 p-2 rounded'><img className="w-12 h-12 mr-0.5" src={logo}/>Green Shop</Link>
            <button
                className="  block text-2xl text-white bg-none border-none cursor-pointer sm:hidden"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
            >
                ☰
            </button>
            <ul className={open ? ' flex-col absolute top-full left-0 right-0 bg-gray-800  ' : ' list-none sm:flex m-0 p-0 hidden '}>
                {[{ text: 'Home', path: '/' },
                    { text: 'About', path: '/about' },
                    { text: 'Contact', path: '/contact' },
                    {text: 'Shopping Cart', path: '/shopping-cart'}].map(({text,path}) => (
                    <li key={text}>
                        <Link className='text-white text-xl decoration-0 p-2 hover:bg-slate-500 rounded' to={path} onClick={()=> setOpen(false)}>{text}</Link>
                    </li>
                ))}
            </ul>
            <button className='sign-in-btn bg-green-600 text-white border border-white p-2 rounded cursor-pointer transition duration-200 ease-in-out hover:bg-green-700  m-2'>
                <Link className='decoration-0' to='/login'>Sign In</Link>
            </button>
        </nav>
    );
}

