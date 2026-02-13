import React from 'react';
import Link from 'next/link';

const jobCategories = [
  { id: 'frontend', title: 'フロントエンドエンジニア' },
  { id: 'smartphone-app', title: 'スマホ・ネイティブアプリエンジニア' },
  { id: 'backend', title: 'バックエンドエンジニア' },
  { id: 'fullstack', title: 'フルスタックエンジニア' },
  { id: 'pm-lead', title: 'テックリード / PM' },
  { id: 'infrastructure', title: 'インフラエンジニア' },
];

const SELECTION_PROCESS = [
  { step: "STEP 01", title: "エントリー" },
  { step: "STEP 02", title: "カジュアル面談" },
  { step: "STEP 03", title: "面接（1〜2回）" },
  { step: "STEP 04", title: "内定" },
];

const JobList: React.FC = () => {
  return (
    <section className="job-list-area pt-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">OPEN POSITIONS</span>
          <h2>募集中の職種</h2>
        </div>

        <div className="job-list-container">
          {jobCategories.map((job) => (
            <Link href={`/recruit/${job.id}`} key={job.id} className="minimal-job-item">
              <div className="job-title-wrapper">
                <h3>{job.title}</h3>
                <span className="view-details">VIEW DETAILS</span>
              </div>
              <div className="icon">
                <i className="ri-arrow-right-line"></i>
              </div>
            </Link>
          ))}
        </div>

        <div className="texap-selection-process">
          <h2 className="texap-section-title">選考プロセス</h2>
          <div className="texap-process-flow">
            {SELECTION_PROCESS.map((item, index) => (
              <React.Fragment key={index}>
                <div className="texap-process-card">
                  <span className="texap-step-number">{item.step}</span>
                  <h3 className="texap-step-title">{item.title}</h3>
                </div>
                
                {index < SELECTION_PROCESS.length - 1 && (
                  <div className="texap-flow-separator">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 5L16 12L9 19" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default JobList;