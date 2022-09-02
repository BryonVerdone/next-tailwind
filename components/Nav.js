import React from 'react';
import Link from 'next/link';
// Add Daisy UI Navbar
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
