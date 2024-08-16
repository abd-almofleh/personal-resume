import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import type { SocialNetworkData } from '../../types';

type SocialNetworksProps = {
  SocialNetworksData: SocialNetworkData[];
};

const SocialLink = ({ icon, name, userName, link }: SocialNetworkData) => {
  return (
    <Link className="mx-2 flex flex-row items-center gap-1" href={link}>
      <Image src={icon} alt={name} width={20} height={20} />
      {userName}
    </Link>
  );
};

export default function SocialNetworks({ SocialNetworksData }: SocialNetworksProps) {

  
  const socialNetworksElements = SocialNetworksData.map((data: SocialNetworkData) => (
    <SocialLink
      key={data.name}
      icon={data.icon}
      name={data.name}
      userName={data.userName}
      link={data.link}
    />
  ));
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-bold uppercase">social networks</h3>
      <div className="flex flex-col items-start gap-2">{socialNetworksElements}</div>
    </div>
  );
}
