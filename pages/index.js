import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Box from '../components/Box';

export default function Home() {
  return (
    <>
      <h1 className='text-center text-4xl text-red-600'>Vanilla Tailwind</h1>
      <section className='flex flex-wrap gap-3 justify-around align-center '>
        <Box bgColor='bg-yellow-300' text={'yellow'} />
        <Box bgColor='bg-sky-400' text={'blue'} />
        <Box bgColor='bg-red-800' text={'red'} />
      </section>
    </>
  );
}
