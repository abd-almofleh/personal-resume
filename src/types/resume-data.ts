export type ResumeData = {
  firstName: string;
  lastName: string;
  get fullName(): string;
  avatarUrl: string;
  socialNetworks: {
    SocialNetworkIcon: string;
    SocialNetworkName: string;
    SocialNetworkLink: string;
    UserName: string;
  }[];
};
