import React, { useState } from 'react';

export default function SearchField() {
  const [username, SetUsername] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const profile = await fetch(
      `https://api.github.com/users/${username}`
    ).then((res) => res.json());

    console.log(profile, 'proprofile');
  };
  return (
    <div className='flex items-center justify-center p-8'>
      <div className='flex border-b-2 border-gray-200'>
        <input
          type='text'
          className='px-4 py-2 w-80'
          value={username}
          onChange={(e) => SetUsername(e.target.value)}
          placeholder='Username'
        />
        <button
          type='submit'
          onClick={handleSubmit}
          className='px-4 text-white bg-pink-500 border-l uppercase'
        >
          Search
        </button>
      </div>
    </div>
  );
}
