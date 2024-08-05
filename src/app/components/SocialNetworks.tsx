import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type SocialNetworkData = {
  SocialNetworkIcon: string;
  SocialNetworkName: string;
  SocialNetworkLink: string;
  UserName: string;
};
const SocialLink = ({
  SocialNetworkIcon,
  SocialNetworkName,
  UserName,
  SocialNetworkLink,
}: SocialNetworkData) => {
  return (
    <Link className="mx-2 flex flex-row items-center gap-1" href={SocialNetworkLink}>
      <Image src={SocialNetworkIcon} alt={SocialNetworkName} width={20} height={20} />
      {UserName}
    </Link>
  );
};
type SocialNetworksProps = {
  SocialNetworksData: SocialNetworkData[];
};
export default function SocialNetworks({ SocialNetworksData }: SocialNetworksProps) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-bold uppercase">social networks</h3>
      <div className="flex flex-col items-start gap-2">
        {SocialNetworksData.map((data: SocialNetworkData) => (
          <SocialLink
            key={data.SocialNetworkName}
            SocialNetworkIcon={data.SocialNetworkIcon}
            SocialNetworkName={data.SocialNetworkName}
            UserName={data.UserName}
            SocialNetworkLink={data.SocialNetworkLink}
          />
        ))}
      </div>
    </div>
  );
}
