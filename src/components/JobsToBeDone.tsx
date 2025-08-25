import React from 'react';
import './JobsToBeDone.css';

const JobsToBeDone: React.FC = () => {
  const jobs = [
    {
      id: 1,
      title: "Help me automate investing and savings without thinking.",
      icon: "robot"
    },
    {
      id: 2,
      title: "Let me spend everywhere, while you handle the crypto/fiat conversion.",
      icon: "card"
    },
    {
      id: 3,
      title: "Give me yield on idle balances with clear risk controls.",
      icon: "discount"
    },
    {
      id: 4,
      title: "Make paying friends/bills and moving money cross-border painless.",
      icon: "send"
    },
    {
      id: 5,
      title: "Keep it non-custodial and secure, but easy.",
      icon: "security"
    },
    {
      id: 6,
      title: "Integrate seamlessly with my daily financial life.",
      icon: "plug"
    }
  ];

  return (
    <div className="jobs-section">
      <div className="section-header">
        <h2 className="section-title cursor-hover-target">Jobs To Be Done</h2>
        <p className="section-subtitle">
          What users really want from MoonPay Everyday.
        </p>
      </div>
      
      <div className="jobs-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-item">
            <div className="job-icon">
              {job.icon === "robot" ? (
                <svg className="icon-svg" viewBox="0 0 16 16" width="16" height="16">
                  <path fill="currentColor" d="M8 2a.75.75 0 0 0-.75.75V5H5.5a2.99 2.99 0 0 0-2.957 2.5H2.5C1.68 7.5 1 8.18 1 9v1c0 .82.68 1.5 1.5 1.5h.043A2.99 2.99 0 0 0 5.5 14h5a2.99 2.99 0 0 0 2.957-2.5h.043c.82 0 1.5-.68 1.5-1.5V9c0-.82-.68-1.5-1.5-1.5h-.043A2.99 2.99 0 0 0 10.5 5H8.75V2.75A.75.75 0 0 0 8 2M6 6.75c.686 0 1.25.564 1.25 1.25S6.686 9.25 6 9.25S4.75 8.686 4.75 8S5.314 6.75 6 6.75m4 0c.686 0 1.25.564 1.25 1.25S10.686 9.25 10 9.25S8.75 8.686 8.75 8S9.314 6.75 10 6.75m-4.5 4h5a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75"/>
                </svg>
              ) : job.icon === "card" ? (
                <svg className="icon-svg" viewBox="0 0 24 24" width="16" height="16">
                  <defs>
                    <mask id="SVGBcZ8Eejn">
                      <g fill="none">
                        <path fill="#fff" d="M14 4h-4C6.229 4 4.343 4 3.172 5.172c-.844.843-1.08 2.057-1.146 4.078h19.948c-.066-2.021-.302-3.235-1.146-4.078C19.657 4 17.771 4 14 4m-4 16h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12q0-.662-.002-1.25H2.002Q1.999 11.338 2 12c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20"/>
                        <path fill="#000" fill-rule="evenodd" d="M5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m6.5 0a.75.75 0 0 1 .75-.75H14a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/>
                      </g>
                    </mask>
                  </defs>
                  <path fill="currentColor" d="M0 0h24v24H0z" mask="url(#SVGBcZ8Eejn)"/>
                </svg>
              ) : job.icon === "discount" ? (
                <svg className="icon-svg" viewBox="0 0 24 24" width="16" height="16">
                  <path fill="currentColor" d="M13.946 2.094a3 3 0 0 0-3.892 0L8.706 3.243a1 1 0 0 1-.569.236l-1.765.14A3 3 0 0 0 3.62 6.371l-.14 1.766a1 1 0 0 1-.237.569l-1.148 1.348a3 3 0 0 0 0 3.891l1.148 1.349a1 1 0 0 1 .236.569l.141 1.765a3 3 0 0 0 2.752 2.752l1.765.14a1 1 0 0 1 .57.237l1.347 1.148a3 3 0 0 0 3.892 0l1.348-1.148a1 1 0 0 1 .57-.236l1.765-.141a3 3 0 0 0 2.752-2.752l.14-1.765a1 1 0 0 1 .236-.57l1.149-1.347a3 3 0 0 0 0-3.892l-1.149-1.348a1 1 0 0 1-.236-.57l-.14-1.765a3 3 0 0 0-2.752-2.752l-1.766-.14a1 1 0 0 1-.569-.236zm.882 5.663l1.415 1.414l-7.071 7.072l-1.415-1.415zm-4.596 2.475a1.5 1.5 0 1 1-2.121-2.121a1.5 1.5 0 0 1 2.121 2.121m3.536 5.657a1.5 1.5 0 1 1 2.12-2.121a1.5 1.5 0 0 1-2.12 2.12"/>
                </svg>
              ) : job.icon === "send" ? (
                <svg className="icon-svg" viewBox="0 0 24 24" width="16" height="16">
                  <g fill="none">
                    <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/>
                    <path fill="currentColor" d="M20.235 5.686c.432-1.195-.726-2.353-1.921-1.92L3.709 9.048c-1.199.434-1.344 2.07-.241 2.709l4.662 2.699l4.163-4.163a1 1 0 0 1 1.414 1.414L9.544 15.87l2.7 4.662c.638 1.103 2.274.957 2.708-.241z"/>
                  </g>
                </svg>
              ) : job.icon === "security" ? (
                <svg className="icon-svg" viewBox="0 0 24 24" width="16" height="16">
                  <path fill="currentColor" d="M22 3.94L12 .44L2 3.94V12c0 4.127 2.534 7.012 4.896 8.803a19.8 19.8 0 0 0 4.65 2.595q.17.064.342.122l.112.04l.114-.04a14 14 0 0 0 .65-.244a19.7 19.7 0 0 0 4.34-2.473C19.467 19.012 22 16.127 22 12zM11.001 15.415L6.76 11.172l1.414-1.415l2.828 2.829l5.657-5.657l1.415 1.414z"/>
                </svg>
              ) : job.icon === "plug" ? (
                <svg className="icon-svg" viewBox="0 0 256 256" width="16" height="16">
                  <path fill="currentColor" d="M237.66 77.66L203.31 112l26.35 26.34a8 8 0 0 1-11.32 11.32l-6.34-6.35l-53 53a40 40 0 0 1-56.57 0l-15.68-15.74l-49.09 49.09a8 8 0 0 1-11.32-11.32l49.09-49.09l-15.71-15.71a40 40 0 0 1 0-56.57l53-53l-6.35-6.34a8 8 0 0 1 11.32-11.32L144 52.69l34.34-34.35a8 8 0 1 1 11.32 11.32L155.31 64L192 100.69l34.34-34.35a8 8 0 0 1 11.32 11.32"/>
                </svg>
              ) : (
                <span className="icon-bullet">•</span>
              )}
            </div>
            <span className="job-title">{job.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsToBeDone;
