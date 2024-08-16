import Image from 'next/image';
import React from 'react';

import { RESUME_DATA } from '../../data/resume-data';

export default function PersonalInformation() {
  const InfoItem = ({ icon, info }: any) => {
    return (
      <div className="my-2 flex flex-row justify-center gap-2">
        <Image src={icon} alt={info} width={15} height={15} />
        <p className="font-LinuxLibertine text-sm">{info}</p>
      </div>
    );
  };

  const personalInfoElement = RESUME_DATA.infoItems.map((data) => (
    <InfoItem key={data.name} icon={data.icon} info={data.info} />
  ));

  return (
    <div className="my-6 flex flex-col items-center justify-items-center gap-1">
      <h1 className="text-center font-libreCaslonText text-2xl font-bold">
        {RESUME_DATA.fullName}
      </h1>
      <h2 className="text-center font-LinuxLibertine text-xl capitalize">
        {RESUME_DATA.occupation}
      </h2>
      <p className="text-center font-LinuxLibertine">{RESUME_DATA.hookPhrase}</p>
      <div>{personalInfoElement}</div>
    </div>
  );
}
