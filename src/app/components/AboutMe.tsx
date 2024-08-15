import React from 'react';

import { RESUME_DATA } from '../../data/resume-data';

export default function AboutMe() {
  return (
    <div className="flex flex-col p-2">
      <h2 className="spacing mb-3 w-fit border-b border-black pb-1 font-libreCaslonText text-xl font-semibold uppercase tracking-widest">
        about me
      </h2>
      <p className="font-LinuxLibertine">{RESUME_DATA.aboutMe}</p>
    </div>
  );
}
