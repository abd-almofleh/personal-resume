import type { ResumeData } from '../types';

export const RESUME_DATA = {
  firstName: 'Abdullah',
  lastName: 'Almofleh',
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  },
  avatarUrl: '/avatar.jpg',
  socialNetworks: [
    {
      SocialNetworkIcon: '/socials/github.svg',
      SocialNetworkName: 'Github',
      SocialNetworkLink: 'https://github.com/AbdullahAlmofleh',
      UserName: '@Abdullah-Almofleh',
    },
    {
      SocialNetworkIcon: '/socials/linkedin.svg',
      SocialNetworkName: 'Linkedin',
      SocialNetworkLink: 'https://www.linkedin.com/in/abdullahalmofleh/',
      UserName: '@Abdullah_Almofleh',
    },
    {
      SocialNetworkIcon: '/socials/x.svg',
      SocialNetworkName: 'X',
      SocialNetworkLink: 'https://x.com/AbdullahAlmofleh',
      UserName: '@Abdullah.Almofleh',
    },
  ],
} as const satisfies ResumeData;
