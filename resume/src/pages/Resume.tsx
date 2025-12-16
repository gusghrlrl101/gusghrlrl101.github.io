import "../styles/global.css";
import { type Profile, type Language, type LocalizedText } from "../types";
import { formatPeriod } from "../utils/dateUtils";
import { Link } from "react-router-dom";

interface ResumeProps {
  data: Profile;
  lang: Language;
  labels: {
    workStyle: string;
    skills: string;
    experience: string;
    projects: string;
    mainDomains: string;
    techStack: string;
    recentInterests: string;
    background: string;
    process: string;
    result: string;
    link: string;
  };
}

function Resume({ data, lang, labels }: ResumeProps) {
  const getText = (text: LocalizedText | string): string => {
    if (typeof text === 'string') return text;
    return text[lang];
  };

  return (
    <main className={`page lang-${lang}`}>
      {/* Header */}
      <header className="page-header">
        <h1 className="title">{getText(data.name)}</h1>
        <div className="subtitle">{getText(data.title)}</div>
        <div className="contact">
          <span>{getText(data.location)}</span>
          <span className="separator"> | </span>
          <span>{data.email}</span>
          <span className="separator"> | </span>
          <a href={data.github} target="_blank" rel="noreferrer"><span>GitHub</span></a>
          <span className="separator"> | </span>
          <a href={data.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span></a>
          <span className="separator"> | </span>
          {lang === 'kr' ? (
            <Link to="/resume/en"><span>@ In English</span></Link>
          ) : (
            <Link to="/resume/kr"><span>@ In Korean</span></Link>
          )}
        </div>
      </header>

      {/* Work Style */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">{labels.workStyle}</h2>
        </div>
        <p className="section-intro">{getText(data.workStyleIntro)}</p>
        <div className="workstyle-grid">
          {data.workStylePoints.map((point) => (
            <div key={getText(point.title)} className="workstyle-item">
              <div className="workstyle-title">{getText(point.title)}</div>
              <div className="workstyle-body">{getText(point.body)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">{labels.skills}</h2>
        </div>
        <p className="section-intro">{getText(data.skillsIntro)}</p>
        <div className="skills-grid">
          <div className="skill-label">{labels.mainDomains}</div>
          <div className="skill-value">{data.domains.join(", ")}</div>
          
          <div className="skill-label">{labels.techStack}</div>
          <div className="skill-value">{data.stack.join(", ")}</div>
          
          <div className="skill-label">{labels.recentInterests}</div>
          <div className="skill-value">{data.interests.join(", ")}</div>
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">{labels.experience}</h2>
        </div>
        <p className="section-intro">{getText(data.experiencesIntro)}</p>
        {data.experiences.map((exp) => (
          <div key={getText(exp.company)} className="item-card">
            <div className="item-header">
              <div className="item-title-row">
                <div className="item-title">
                  {exp.companyUrl ? (
                    <a href={exp.companyUrl} target="_blank" rel="noreferrer">
                      {getText(exp.company)}
                    </a>
                  ) : (
                    getText(exp.company)
                  )}
                  {exp.team && ` · ${getText(exp.team)}`}
                </div>
                <div className="item-period">
                  {formatPeriod(exp.period.start, exp.period.end, lang)}
                </div>
              </div>
              <div className="item-subtitle-row">
                <div className="item-subtitle">{getText(exp.role)}</div>
                {exp.location && (
                  <div className="item-location">{getText(exp.location)}</div>
                )}
              </div>
            </div>
            {exp.summary && <p className="item-summary">{getText(exp.summary)}</p>}
            {exp.bullets && (
              <ul className="list">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx}>{getText(bullet)}</li>
                ))}
              </ul>
            )}
            {exp.reflection && (
              <p className="item-reflection">{getText(exp.reflection)}</p>
            )}
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">{labels.projects}</h2>
        </div>
        <p className="section-intro">{getText(data.projectsIntro)}</p>
        {data.projects.map((project) => (
          <div key={getText(project.title)} className="item-card">
            <div className="item-header">
              <div className="item-title-row">
                <div className="item-title">{getText(project.title)}</div>
                <div className="item-period">
                  {project.period.start}
                  {project.period.end && ` - ${project.period.end}`}
                </div>
              </div>
              <div className="item-subtitle-row">
                <div className="item-subtitle">{getText(project.org)}</div>
              </div>
            </div>
            <p className="item-summary">{getText(project.summary)}</p>
            <div className="project-details">
              <div className="detail-row">
                <span className="detail-label">{labels.background} </span>
                <span className="detail-text">{getText(project.background)}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">{labels.process} </span>
                <span className="detail-text">{getText(project.process)}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">{labels.result} </span>
                <span className="detail-text">{getText(project.result)}</span>
              </div>
              {project.links && project.links.length > 0 && (
                <div className="project-link">
                  <span className="link-label">{labels.link}: </span>
                  {project.links.map((link, idx) => (
                    <span key={link}>
                      {idx > 0 && <span className="link-separator"> | </span>}
                      <a href={link} target="_blank" rel="noreferrer">
                        {link}
                      </a>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Resume;
