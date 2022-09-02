import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <ul className='flex justify-center gap-10'>
        <li>
          <Link href='/'>
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link href='/daisy'>
            <button>Daisy UI</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
