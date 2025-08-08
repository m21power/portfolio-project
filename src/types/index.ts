export interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  icon: React.ReactNode;
  details: string[];
  tech: string[];
  url: string | null;
  thumbnail: string | null;
}

export interface ProjectItem {
  id: number;
  title: string;
  desc: string;
  details: string[];
  tech: string[];
  url: string;
  website?: string;
  thumbnail: string | null;
}

export interface EduBgItem {
  title: string;
  desc: string;
  iconName: string;
  details: {
    iconName: string;
    text: string;
  }[];
}

export interface SocialItem {
  id: number;
  title: string;
  url: string;
  iconName: string;
}
