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
    activities: string;
    openSource: string;
    awards: string;
    education: string;
    certifications: string;
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
          <a href={`mailto:${data.email}`}><span>{data.email}</span></a>
          <span className="separator"> | </span>
          <a href={data.github} target="_blank" rel="noreferrer"><span>GitHub</span></a>
          <span className="separator"> | </span>
          <a href={data.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span></a>
          <span className="separator"> | </span>
          {lang === 'kr' ? (
            <Link to="/en"><span>@ In English</span></Link>
          ) : (
            <Link to="/kr"><span>@ In Korean</span></Link>
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

      {/* Activities */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">{labels.activities}</h2>
        </div>
        <p className="section-intro">{getText(data.activitiesIntro)}</p>
        <div className="activities-list">
          {(() => {
            const groupedByYear: Record<string, typeof data.activities> = {};
            data.activities.forEach((activity) => {
              if (!groupedByYear[activity.year]) {
                groupedByYear[activity.year] = [];
              }
              groupedByYear[activity.year].push(activity);
            });
            
            return Object.entries(groupedByYear)
              .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
              .map(([year, activities]) => (
                <div key={year} className="activity-year-group">
                  <div className="activity-year-header">{year}</div>
                  <div className="activity-year-items">
                    {activities.map((activity, idx) => (
                      <div key={idx} className="activity-item">
                        <span className="activity-bullet">•</span>
                        <a href={activity.url} target="_blank" rel="noreferrer" className="activity-link">
                          {getText(activity.title)}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ));
          })()}
        </div>
      </section>

      {/* Open Source Contributions */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">{labels.openSource}</h2>
        </div>
        <p className="section-intro">{getText(data.openSourceIntro)}</p>
        <div className="opensource-list">
          {data.openSourceContributions.map((oss, idx) => (
            <div key={idx} className="opensource-project">
              <div className="opensource-project-header">
                <span className="opensource-project-name">{oss.project}</span>
                <span className="opensource-project-desc"> · {getText(oss.description)}</span>
              </div>
              <div className="opensource-contributions">
                {oss.contributions.map((contrib, cidx) => (
                  <div key={cidx} className="opensource-item">
                    <span className="opensource-bullet">•</span>
                    <a href={contrib.url} target="_blank" rel="noreferrer" className="opensource-link">
                      {getText(contrib.title)}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">{labels.awards}</h2>
        </div>
        <p className="section-intro">{getText(data.awardsIntro)}</p>
        <div className="simple-list">
          {data.awards.map((award, idx) => (
            <div key={idx} className="simple-item">
              <div className="simple-item-header">
                {award.url ? (
                  <a href={award.url} target="_blank" rel="noreferrer" className="simple-item-title-link">
                    {getText(award.title)}
                  </a>
                ) : (
                  <span className="simple-item-title">{getText(award.title)}</span>
                )}
                <span className="simple-item-year">{award.year}</span>
              </div>
              {award.description && (
                <div className="simple-item-desc">{getText(award.description)}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">{labels.education}</h2>
        </div>
        <p className="section-intro">{getText(data.educationIntro)}</p>
        <div className="simple-list">
          {data.education.map((edu, idx) => (
            <div key={idx} className="simple-item">
              <div className="simple-item-header">
                <span className="simple-item-title">{getText(edu.school)}</span>
                <span className="simple-item-year">{edu.period}</span>
              </div>
              {(edu.degree || edu.major) && (
                <div className="simple-item-desc">
                  {edu.degree && getText(edu.degree)}
                  {edu.degree && edu.major && ', '}
                  {edu.major && getText(edu.major)}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">{labels.certifications}</h2>
        </div>
        <p className="section-intro">{getText(data.certificationsIntro)}</p>
        <div className="certifications-grid">
          {(() => {
            const groupedByCategory: Record<string, typeof data.certifications> = {};
            data.certifications.forEach((cert) => {
              const category = getText(cert.category);
              if (!groupedByCategory[category]) {
                groupedByCategory[category] = [];
              }
              groupedByCategory[category].push(cert);
            });
            
            return Object.entries(groupedByCategory).map(([category, certs]) => (
              <div key={category} className="cert-category">
                <div className="cert-category-header">{category}</div>
                <div className="cert-items">
                  {certs.map((cert, idx) => (
                    <div key={idx} className="cert-item">
                      <span className="cert-bullet">•</span>
                      <span className="cert-name">{getText(cert.name)}</span>
                    </div>
                  ))}
                </div>
              </div>
            ));
          })()}
        </div>
      </section>
    </main>
  );
}

export default Resume;
