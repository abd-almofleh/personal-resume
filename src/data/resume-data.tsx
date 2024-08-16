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
      icon: '/icons/socials/github.svg',
      name: 'Github',
      link: 'https://github.com/AbdullahAlmofleh',
      userName: '@Abdullah-Almofleh',
    },
    {
      icon: '/icons/socials/linkedin.svg',
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/abdullahalmofleh/',
      userName: '@Abdullah_Almofleh',
    },
    {
      icon: '/icons/socials/x.svg',
      name: 'X',
      link: 'https://x.com/AbdullahAlmofleh',
      userName: '@Abdullah.Almofleh',
    },
  ],

  infoItems: [
    {
      name: 'residence',
      icon: '/icons/home.svg',
      info: 'Jlt, Dubai, United Arab Emirates',
    },
    {
      name: 'email',
      icon: '/icons/mail.svg',
      info: 'almofleh.abdullah@gmail.com',
    },
    {
      name: 'phoneNumber',
      icon: '/icons/phone.svg',
      info: '+971 50 510 8253',
    },
    {
      name: 'dateOfBirth',
      icon: '/icons/calendar.svg',
      info: 'Date of birth 01/18/1999',
    },
  ],

  occupation: 'information engineer',
  hookPhrase: "i can't learn everything, but i know how to learn what i need.",

  aboutMe: `I am a Software Engineer with experience in building high scale RESTful APIs and web applications. I specialize in Laravel (+5 years) and ReactJS (+4 years), in addition to moderate experience in Node.js (+2.5 years) and Vue.js (+2 years). Also, I am starting to learn new frameworks Like NestJs. In addition, I was a team leader for a small team (4 developers) for 1.5 year. I have experience working in a Scrum environment for 2 year.`,
} as const satisfies ResumeData;
