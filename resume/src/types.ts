export type LocalizedText = {
  kr: string;
  en: string;
};

export type WorkStylePoint = {
  title: LocalizedText;
  body: LocalizedText;
};

export type Experience = {
  company: LocalizedText;
  companyUrl?: string;
  team?: LocalizedText;
  role: LocalizedText;
  period: {
    start: string;
    end?: string;
  };
  location?: LocalizedText;
  summary?: LocalizedText;
  bullets?: LocalizedText[];
  reflection?: LocalizedText;
};

export type Project = {
  title: LocalizedText;
  org: LocalizedText;
  period: {
    start: string;
    end?: string;
  };
  summary: LocalizedText;
  background: LocalizedText;
  process: LocalizedText;
  result: LocalizedText;
  links?: string[];
};

export type Activity = {
  year: string;
  title: LocalizedText;
  url: string;
};

export type OpenSourceContribution = {
  project: string;
  description: LocalizedText;
  contributions: {
    title: LocalizedText;
    url: string;
  }[];
};

export type Award = {
  title: LocalizedText;
  organization: LocalizedText;
  year: string;
  description?: LocalizedText;
  url?: string;
};

export type Education = {
  school: LocalizedText;
  period: string;
  degree?: LocalizedText;
  major?: LocalizedText;
};

export type Certification = {
  name: LocalizedText;
  category: LocalizedText;
};

export type Profile = {
  name: LocalizedText;
  title: LocalizedText;
  location: LocalizedText;
  email: string;
  github: string;
  linkedin: string;
  workStyleIntro: LocalizedText;
  workStylePoints: WorkStylePoint[];
  skillsIntro: LocalizedText;
  domains: string[];
  stack: string[];
  interests: string[];
  experiencesIntro: LocalizedText;
  experiences: Experience[];
  projectsIntro: LocalizedText;
  projects: Project[];
  activitiesIntro: LocalizedText;
  activities: Activity[];
  openSourceIntro: LocalizedText;
  openSourceContributions: OpenSourceContribution[];
  awardsIntro: LocalizedText;
  awards: Award[];
  educationIntro: LocalizedText;
  education: Education[];
  certificationsIntro: LocalizedText;
  certifications: Certification[];
};

export type Language = 'kr' | 'en';