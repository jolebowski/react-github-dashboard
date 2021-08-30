import React from 'react';
import { Link } from 'react-router-dom';
import { MdTabletMac } from 'react-icons/md';

export default function RepositoriesList({ repositories }) {
  return (
    <div className='flex items-center justify-center pt-5'>
      <div>
        {repositories.map((item) => (
          <ul key={item.id} className='p-4'>
            <div className='flex sm:pt-0 sm:pl-10'>
              <MdTabletMac size={20} />
              <p className='pl-10'>{item.html_url}</p>
              <Link
                className='pl-4 block mt-1 text-lg leading-tight front-semibold text-blue-600'
                to={{
                  pathname: `repositorie/${item.id}`,
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
                détails +
              </Link>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
}
