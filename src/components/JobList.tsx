import React from 'react';
import Link from 'next/link';

const jobCategories = [
  { id: 'frontend', title: 'フロントエンドエンジニア' },
  { id: 'backend', title: 'バックエンドエンジニア' },
  { id: 'fullstack', title: 'フルスタックエンジニア' },
  { id: 'pm-lead', title: 'テックリード / PM候補' }
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
      </div>
    </section>
  );
};

export default JobList;