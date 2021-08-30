import React from 'react';

export default function SearchField() {
  return (
    <div className='flex items-center justify-center p-8'>
      <div className='flex border-b-2 border-gray-200'>
        <input type='text' className='px-4 py-2 w-80' placeholder='Username' />
        <button className='px-4 text-white bg-pink-500 border-l uppercase'>
          Search
        </button>
      </div>
    </div>
  );
}
