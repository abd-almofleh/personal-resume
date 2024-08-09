import React from 'react';

import type { ResumeData } from '../../types';

export default function AboutMe({ data }: any) {
  return (
    <div className='flex flex-col p-2'>
      <h2 className='uppercase text-xl font-semibold spacing tracking-widest pb-1 mb-3 border-b border-black w-fit'>about me</h2>
      <p>{data}</p>
    </div>
  );
}
