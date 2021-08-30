import React from 'react';
import { useLocation } from 'react-router';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Repository() {
  const location = useLocation();

  return (
    <div className=' flex flex-col pt-4'>
      <div className='m-auto'>
        <div className='flex flex-col max-w-sm shadow-md py-8 px-10 md:px-8 rounded-md'>
          <div className='flex flex-col md:flex-row gap-6 md:gap-8'>
            <img
              className='rounded-full border-4 border-gray-300 h-24 w-24 mx-auto'
              src={location.state.avatarUrl}
              alt='avatar'
            />
            <div className='flex flex-col text-center md:text-left'>
              <div className='font-medium text-lg text-gray-800'>
                {location.state.login}
              </div>
              <div className='font-medium text-lg text-gray-800 pt-7'>
                {location.state.name}
              </div>
              <div className='text-gray-500 mb-3 '>
                {location.state.description}
              </div>
            </div>
          </div>
          <div className='font-medium text-lg  text-center text-gray-800 pt-7'>
            {location.state.language}
          </div>
          <div className='text-center mb-3 text-blue-900'>
            <a href={location.state.url} rel='noreferrer' target='_blank'>
              {location.state.url}
            </a>
          </div>
          <div className='text-gray-500  text-center mb-3'>
            {location.state.star === 0
              ? `${location.state.star} Star`
              : `${location.state.star} Star(s)`}
          </div>
        </div>
        <div className='flex items-center justify-center pt-7 text-blue-400'>
          <Link to='/'>
            <IoArrowBackOutline size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
}
