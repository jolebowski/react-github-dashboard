import React from 'react';
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
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
}
