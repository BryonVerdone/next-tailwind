import React from 'react';
import Box from '../components/Box';
const daisy = () => {
  return (
    <>
      <h1 className='text-center text-4xl text-blue-700 text-lime-600'>
        Daisy UI Components
      </h1>
      <section className='mx-auto flex justify-center items-center'>
        <div className='hero mt-10 min-h-screen bg-base-200 '>
          <div className='hero-content text-center'>
            <div className='max-w-md'>
              <h1 className='text-5xl font-bold'>Hello there</h1>
              <p className='py-6'>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className='btn btn-primary'>Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default daisy;
