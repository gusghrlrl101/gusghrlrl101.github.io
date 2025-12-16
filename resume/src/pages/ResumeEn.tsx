import { useEffect } from 'react';
import Resume from './Resume';
import { profile } from '../data/profile';

function ResumeEn() {
  useEffect(() => {
    // Set document title
    document.title = 'Hyunho Lim - AI/ML Engineer';
    
    // Set or update Open Graph meta tags
    const metaTags = [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Hyunho Lim' },
      { property: 'og:description', content: 'MLOps platform developer connecting AI/ML technology to real services.' },
      { property: 'og:image', content: 'https://hyunho.kr/assets/profile.jpg' },
      { property: 'og:url', content: 'https://hyunho.kr/resume/en' },
      { property: 'og:site_name', content: 'Hyunho Lim Resume' }
    ];

    metaTags.forEach(({ property, content }) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });
  }, []);

  const labels = {
    workStyle: 'How I Work',
    skills: 'Technical Skills',
    experience: 'Experience',
    projects: 'Key Projects',
    activities: 'Activities',
    openSource: 'Open Source Contributions',
    awards: 'Awards',
    education: 'Education',
    certifications: 'Certifications',
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
