export type SocialNetworkData = {
  icon: string;
  name: string;
  link: string;
  userName: string;
};

export type ResumeData = {
  firstName: string;
  lastName: string;
  get fullName(): string;

  avatarUrl: string;
  socialNetworks: SocialNetworkData[];
};
