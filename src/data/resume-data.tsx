import type { ResumeData } from '../types';

export const RESUME_DATA = {
  firstName: 'Abdullah',
  lastName: 'Almofleh',
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  },
  avatarUrl: '/avatar.jpg',
} as const satisfies ResumeData;
