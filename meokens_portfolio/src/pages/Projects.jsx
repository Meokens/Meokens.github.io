import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Projects.css'; // Your custom styles for the projects page
{/*import reactToDoList from "../assets/reactToDoList.png";
import gsws from "../assets/gsws.png";
import whatTime from "../assets/whatTime4.png";
import eazyLinks from "../assets/eazyLinks4.png"; */}


const Projects = () => {
  const completedProjects = [
    { 
      id: 15, 
      title: 'WhatTime', 
      description: 'Designed to help users manage, compare, and explore time, holidays, events, and weather across the globe. ', 
      techStack: ['Flutterflow', 'Firebase', 'Flutter/Dart'], 
      imgUrl: "#", 
      detailsLink: '/projects/15'
    },
    { 
      id: 16, 
      title: 'EazyLinks', 
      description: 'EazyLinks is a modern, mobile-first marketplace platform that connects users with trusted local service providers across a wide range of categories. ', 
      techStack: ['Flutterflow', 'Firebase', 'Flutter/Dart'], 
      imgUrl: "#", 
      detailsLink: '/projects/16'
    },
      
    // Add more completed projects here
  ];

  const currentProjects = [
    { 
      id: 101, 
      title: 'Github Stats Web Services', 
      description: 'A Django and React-Based Analytics Platform', 
      techStack: ['Python', 'Django', 'Javascript', 'React', 'HTML', 'CSS', 'dbsqlite'], 
      imgUrl: "#", 
      detailsLink: '/projects/101'
    },
    {
        id: 7, 
        title: 'React To-Do List', 
        description: 'A simple To-Do List.', 
        techStack: ['React+Vite,', 'HTML', 'CSS', 'JavaScript'], 
        imgUrl: "#",
        detailsLink: '/projects/7'
      },
    
    // Add more current projects here
  ];

  return (
    <div className="projects-page">
      <section className="completed-projects">
        <h2>Projects/Works</h2>
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
        <h2>Other Projects</h2>
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