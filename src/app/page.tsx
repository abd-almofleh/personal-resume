import Image from 'next/image';

import SocialNetworks from '../app/components/SocialNetworks';
import { RESUME_DATA } from '../data/resume-data';

export default function Home() {
  return (
    <main className="container relative mx-auto flex min-h-screen overflow-auto">
      <section className="mx-auto flex w-full max-w-3xl border-black p-10 shadow">
        <div className="relative w-1/3">
          <Image
            src={RESUME_DATA.avatarUrl}
            alt={RESUME_DATA.fullName}
            width={500}
            height={500}
            className=""
          />
          <SocialNetworks SocialNetworksData={RESUME_DATA.socialNetworks} />
        </div>
        <div className="mx-5 border-l border-black" />
        <div className="w-2/3 bg-blue-50"></div>
      </section>
    </main>
  );
}
