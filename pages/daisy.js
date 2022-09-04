import React from 'react';
import Box from '../components/Box';
import Avatar from '../components/Avatar';
import Card from '../components/Card';
const daisy = () => {
  return (
    <>
      <h1 className='text-center text-4xl text-blue-700 text-lime-600'>
        Daisy UI Components
      </h1>
      <section className='mx-auto flex flex-col justify-center items-center'>
        <div className='hero mt-10 min-h-screen bg-base-200 '>
          <div className='hero-content text-center'>
            <div className='max-w-md'>
              <h1 className='text-5xl font-bold'>Hello there</h1>
              <p className='py-6'>
                Welcome to this first small test project I'm building with Daisy
                UI!
              </p>
              <button className='btn btn-primary'>Get Started</button>
            </div>
          </div>
        </div>
        <Avatar />
      </section>
      <section className='mx-auto flex gap-3 flex-wrap justify-center'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
};

export default daisy;
