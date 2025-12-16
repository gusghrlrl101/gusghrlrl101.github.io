import Resume from './Resume';
import { profile } from '../data/profile';

function ResumeEn() {
  const labels = {
    workStyle: 'How I Work',
    skills: 'Technical Skills',
    experience: 'Experience',
    projects: 'Key Projects',
    mainDomains: 'Main Domains:',
    techStack: 'Tech Stack:',
    recentInterests: 'Recent Interests:',
    background: 'Background:',
    process: 'Process:',
    result: 'Result:',
    link: 'Related Link'
  };

  return <Resume data={profile} lang="en" labels={labels} />;
}

export default ResumeEn;
