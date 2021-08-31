import React, { useState, useEffect } from 'react';
import RepositoriesList from './RepositoriesList';

export default function SearchField() {
  const [username, SetUsername] = useState('');
  const [data, setData] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const repositories = localStorage.getItem('repos');
    const profile = localStorage.getItem('profile');

    if (repositories && profile) {
      setRepos(JSON.parse(repositories));
      setData(JSON.parse(profile));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('repos', JSON.stringify(repos));
    localStorage.setItem('profile', JSON.stringify(data));
  });

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
      <div className='flex h-screen items-center justify-center pt-7 pb-5'>
        <div className=' max-w-md mx-auto flex items-center '>
          <div className='w-full'>
            <input
              type='search'
              className='px-4 py-2  w-full focus:outline-none flex border-b-2 border-gray-200'
              value={username}
              onChange={(e) => SetUsername(e.target.value)}
              placeholder='Username'
            />
          </div>
          <div>
            <button
              type='submit'
              onClick={handleSubmit}
              className='px-4 py-2 ml-2 text-white bg-pink-500 border-l uppercase flex justify-center items-center'
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {data.login && (
        <div className='flex justify-center items-center dark:bg-gray-500'>
          <div className='bg-gray-300 w-56 rounded'>
            <div className='relative border-b-4 border-transparent py-1'>
              <div className='flex justify-center items-center space-x-3 cursor-pointer'>
                <div className='w-9 h-9 rounded-full overflow-hidden border-2 dark:border-white border-gray-900'>
                  <img
                    src={data.avatar_url}
                    alt=''
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='font-semibold dark:text-white text-gray-900 text-lg'>
                  <div>{data.login}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {data.login && <RepositoriesList repositories={repos} />}
    </>
  );
}
