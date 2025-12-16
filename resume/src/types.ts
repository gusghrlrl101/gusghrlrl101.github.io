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
  team?: LocalizedText;
  role: LocalizedText;
  period: {
    start: string;
    end?: string;
  };
  location?: LocalizedText;
  summary?: LocalizedText;
  bullets?: LocalizedText[];
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
};

export type Language = 'kr' | 'en';