import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Box from '../components/Box';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className='text-center text-4xl'>Vanilla Tailwind</h1>
      <section className='flex gap-3 justify-around align-center'>
        <Box color={'yellow'} text={'Yellow'} />
        <Box color={'blue'} text={'Blue'} />
        <Box color={'red'} text={'Red'} />
      </section>

      <Link href='/'>
        <button>Daisy UI</button>
      </Link>
    </>
  );
}
