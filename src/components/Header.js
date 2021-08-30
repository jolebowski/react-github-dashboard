import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='py-5 bg-blue-400 text-white text-center text-3xl'>
      <Link to='/'>Github Dashboard Sample</Link>
    </header>
  );
}
