export type SocialNetworkData = {
  icon: string;
  name: string;
  link: string;
  userName: string;
};

export type InfoItemData = {
  icon: string;
  name: string;
  info: string;
};

export type ResumeData = {
  firstName: string;
  lastName: string;
  get fullName(): string;

  occupation: string;
  hookPhrase: string;

  avatarUrl: string;
  socialNetworks: SocialNetworkData[];
  infoItems: InfoItemData[];
  aboutMe: string;
};
