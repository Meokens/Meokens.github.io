// ProjectDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';
import AMB from "../assets/AMB.pdf";
import artconn from "../assets/ArtConn.pdf";


const projectsData = [
  { id: 1, title: "AMB", pdf: AMB },
  { id: 2, title: "Artconn", pdf: artconn },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === Number(id));

  if (!project) return <div className="project-details-container">Project not found</div>;

  return (
    <div style={{ height: '100vh', background: '#fff' }}>
      <iframe
        title={project.title}
        src={`${process.env.PUBLIC_URL}${project.pdf}#toolbar=1&navpanes=0`}
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
};

export default ProjectDetails;

