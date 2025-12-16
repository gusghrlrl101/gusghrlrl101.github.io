import Resume from './Resume';
import { profile } from '../data/profile';

function ResumeKr() {
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
