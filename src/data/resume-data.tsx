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
      icon: '/socials/github.svg',
      name: 'Github',
      link: 'https://github.com/AbdullahAlmofleh',
      userName: '@Abdullah-Almofleh',
    },
    {
      icon: '/socials/linkedin.svg',
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/abdullahalmofleh/',
      userName: '@Abdullah_Almofleh',
    },
    {
      icon: '/socials/x.svg',
      name: 'X',
      link: 'https://x.com/AbdullahAlmofleh',
      userName: '@Abdullah.Almofleh',
    },
  ],
} as const satisfies ResumeData;
