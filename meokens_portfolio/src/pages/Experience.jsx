import React from "react";
import "./Experience.css"; // Your custom CSS file

// Individual Experience Component
const ExperienceCard = ({ title, company, date, tasks }) => {
  return (
    <div className="experience-details-container">
      <h2 className="experience-sub-title">{title}</h2>
      <div className="article-container">
        <h3>{company}</h3>
        <p>{date}</p>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Experience Page
const Experience = () => {
  const experiences = [
    {
      title: "Team Lead – ArtConn",
      company: "Startup Project",
      date: "2025",
      tasks: [
        "A mobile app that connects users with verified, local artisans for quick services",
      ],
    },
    {
      title: "Team Lead – CourtSync",
      company: "Startup Project",
      date: "2025",
      tasks: [
        "A mobile designed to streamline court logistics for lawyers, judges, bailiffs. It aims to reduce delays, improve communication, and make the legal process more transparent and accessible for all.",
      ],
    },
    {
        title: "UI/UX Designer",
        company: "Trustesse(Remote)",
        date: "2024 -> 2025",
        tasks: ["Created view and filter available programs",
                "Created join programs, donate, rate experiences, and download completion certificates.",
        ],
      },
    {
        title: "Graphic Designer",
        company: "Skimake(Remote)",
        date: "2022 -> 2023",
        tasks: ["Developed promotion materials for social media campaigns. Created billboard fliers",
        ],
    },
    {
        title: "Product Designer",
        company: "Cyrus Acoustics",
        date: "2023 -> 2025",
        tasks: [
          "Driving the new design initiatives aimed at increasing retention for Cyrus Acoustics new brands.",
        ],
      },
  ];

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="experience-title">Experience</h1>
      <div className="outer-container">
        <div className="experience-details-container0"></div>
        <div className="experience-details-container middle">
            <div className="experience-about-containers">
            {experiences.map((exp, index) => (
                <ExperienceCard
                key={index}
                title={exp.title}
                company={exp.company}
                date={exp.date}
                tasks={exp.tasks}
                />
            ))}
            </div>
        </div>
        <div className="experience-details-container0"></div>
        </div>

    </section>
  );
};

export default Experience;