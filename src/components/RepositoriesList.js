import React from 'react';
import { Link } from 'react-router-dom';
import { MdTabletMac } from 'react-icons/md';

export default function RepositoriesList({ repositories }) {
  return (
    <>
      <div className='container mb-2 flex mx-auto w-full items-center justify-center'>
        <ul className='flex flex-col p-3'>
          {repositories.map((item) => (
            <>
              <li className='flex flex-row'>
                <div className='flex flex-1 items-center p-3 transition duration-500 ease-in-out transform hover:-translate-y-2'>
                  <div className='pl-1 mr-8'>
                    <MdTabletMac size={20} />
                  </div>
                  <div className='flex-1'>
                    <div className='font-medium'>{item.name}</div>
                  </div>
                  <div className='w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-green-500 justify-center items-center p-1'>
                    <Link
                      to={{
                        pathname: `repository/${item.id}`,
                        state: {
                          language: item.language,
                          name: item.name,
                          description: item.description,
                          star: item.stargazers_count,
                          createdAt: item.created_at,
                          updatedAt: item.updated_at,
                          url: item.html_url,
                          avatarUrl: item.owner.avatar_url,
                          login: item.owner.login,
                        },
                      }}
                    >
                      Détails
                    </Link>
                  </div>
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}
