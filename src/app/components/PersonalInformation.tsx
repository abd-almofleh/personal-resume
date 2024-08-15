import Image from 'next/image';
import React from 'react';

import { RESUME_DATA } from '../../data/resume-data';

export default function PersonalInformation() {
  const InfoItem = ({ icon, info }: any) => {
    return (
      <div className='flex flex-row'>
        <Image src={icon} alt={info} width={20} height={20} />
        {info}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-items-center gap-1">
      <h1 className="text-center font-libreCaslonText text-2xl">{RESUME_DATA.fullName}</h1>
      <h2 className="text-center font-LinuxLibertine capitalize">{RESUME_DATA.occupation}</h2>
      <p className="text-center font-LinuxLibertine text-sm">{RESUME_DATA.hookPhrase}</p>
    </div>
  );
}
