import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Projects.css'; // Your custom styles for the projects page
import AMB from "../assets/AMB.png";
import artconn from "../assets/Artconn.png";
{/*import reactToDoList from "../assets/reactToDoList.png";
import gsws from "../assets/gsws.png";
import whatTime from "../assets/whatTime4.png";
import eazyLinks from "../assets/eazyLinks4.png"; */}


const Projects = () => {
  const completedProjects = [
    { 
      id: 1, 
      title: 'AMB', 
      description: 'Came up with a redesign and strategy for the Abbey Mortgage Bank website.', 
      techStack: ['Figma', ], 
      imgUrl: AMB, 
      detailsLink: '/projects/1'
    },
    { 
      id: 2, 
      title: 'Artconn', 
      description: 'Came up with a design and strategy for the Artisan Connect mobile app.', 
      techStack: ['Figma'], 
      imgUrl: artconn, 
      detailsLink: '/projects/2'
    },
      
    // Add more completed projects here
  ];

  const currentProjects = [
    // Add more current projects here
  ];

  return (
    <div className="projects-page">
      <section className="completed-projects">
        <h2>Case Studies</h2>
        <div className="projects-list">
          {completedProjects.map(project => (
            <div className="project-card" key={project.id}>
              <img src={project.imgUrl} alt={project.title} className="project-thumbnail" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Tech Stack: </strong>{project.techStack.join(', ')}</p>
              <Link to={project.detailsLink} className="project-link">View Details</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="current-projects">
        <h2></h2>
        <div className="projects-list">
          {currentProjects.map(project => (
            <div className="project-card" key={project.id}>
              <img src={project.imgUrl} alt={project.title} className="project-thumbnail" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Tech Stack: </strong>{project.techStack.join(', ')}</p>
              <Link to={project.detailsLink} className="project-link">View Details</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;