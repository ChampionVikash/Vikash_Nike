import {useState} from 'react'
import { menu ,close } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const[toggle , setToggle]  = useState(false);

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>


        <div className='hidden max-lg:block color-black'>
          <img src={toggle ? close : menu} alt='menu icon' className='w-[28px] h-[28px]  object-contain ' onClick={ () => setToggle((prev) => !prev)} />
        </div>

        <div className={`${toggle ? "flex" : "hidden"} p-6  bg-red-400 bg-red-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}> 
        <ul className='list-none flex flex-col justify-end items-center flex-1'>
          {navLinks.map((item) => (
            <li key={item.label}
            className={`font-montserrat  font-bold cursor-pointer text-[16px] ${item === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-black  hover:text-secondary`}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray  hover:text-secondary' 
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    

      </nav>
    </header>
  );
};

export default Nav;
