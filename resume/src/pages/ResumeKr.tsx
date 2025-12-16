import { useEffect } from 'react';
import Resume from './Resume';
import { profile } from '../data/profile';

function ResumeKr() {
  useEffect(() => {
    // Set document title
    document.title = '임현호 - AI/ML Engineer';
    
    // Set or update Open Graph meta tags
    const metaTags = [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: '임현호' },
      { property: 'og:description', content: 'AI/ML 기술을 실제 서비스에 연결하는 MLOps 플랫폼 개발자.' },
      { property: 'og:image', content: 'https://hyunho.kr/assets/profile.jpg' },
      { property: 'og:url', content: 'https://hyunho.kr/resume/kr' },
      { property: 'og:site_name', content: '임현호 이력서' }
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
    workStyle: '일하는 방식',
    skills: '기술 역량',
    experience: '경력',
    projects: '주요 프로젝트',
    mainDomains: '주요 도메인:',
    techStack: '기술 스택:',
    recentInterests: '최근 관심사:',
    background: '배경:',
    process: '과정:',
    result: '결과:',
    link: '관련 링크'
  };

  return <Resume data={profile} lang="kr" labels={labels} />;
}

export default ResumeKr;
