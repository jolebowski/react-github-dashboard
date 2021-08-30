import React, { useState } from 'react';
import RepositoriesList from './RepositoriesList';

export default function SearchField() {
  const [username, SetUsername] = useState('');
  const [data, setData] = useState([]);
  const [repos, setRepos] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const profile = await fetch(
      `https://api.github.com/users/${username}`
    ).then((res) => res.json());

    const repositories = await fetch(profile.repos_url).then((res) =>
      res.json()
    );

    if (profile) {
      setData(profile);
      setRepos(repositories);
    }
    SetUsername('');
  };
  return (
    <>
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
      <div className='flex items-center justify-center'>
        <div className='flex mt-5 bg-gray-300 px-2 py-1 rounded'>
          <img
            alt='avatar'
            className='w-7 rounded-full border-2 border-gray-300'
            src={data.avatar_url}
          />
          <p className='ml-3'>{data.login}</p>
        </div>
      </div>
      <RepositoriesList repositories={repos} />
    </>
  );
}
