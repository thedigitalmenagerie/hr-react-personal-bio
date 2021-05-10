import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addProjects, updateProjects } from '../helpers/data/ProjectsData';

const ProjectsForm = ({
  projectsFormTitle,
  setProjects,
  firebaseKey,
  projectName,
  projectImage,
  projectLink,
  projectDate,
  projectAuthors,
  projectTech
}) => {
  const [project, setProject] = useState({
    projectName: projectName || '',
    projectImage: projectImage || '',
    projectLink: projectLink || '',
    projectDate: projectDate || '',
    projectAuthors: projectAuthors || '',
    projectTech: projectTech || '',
    firebaseKey: firebaseKey || null
  });

  const handleProjectInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.firebaseKey) {
      updateProjects(project).then((projectsArray) => setProjects(projectsArray));
    } else {
      addProjects(project).then((projectsArray) => setProjects(projectsArray));
    }
  };

  return (
    <>
      <div className="ProjectsForm">
        <form
          id="addProjectsForm"
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <h3 id="addProjectFormTitle">{projectsFormTitle}</h3>
          <label>Name: </label>
          <input
            name='projectName'
            type='text'
            placeholder='Project Name'
            value={project.projectName}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Image: </label>
          <input
            name='projectImage'
            type='text'
            placeholder='Project Image URL'
            value={project.projectImage}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Link: </label>
          <input
            name='projectLink'
            type='text'
            placeholder='Project Link'
            value={project.projectLink}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Date: </label>
          <input
            name='projectDate'
            type='text'
            placeholder='Project Date'
            value={project.projectDate}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Authors: </label>
          <input
            name='projectAuthors'
            type='text'
            placeholder='Project Authors'
            value={project.projectAuthors}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Tech Used: </label>
          <input
            name='projectTech'
            type='text'
            placeholder='Project Tech Used'
            value={project.projectTech}
            onChange={handleProjectInputChange}
          >
          </input>
          <button type="submit">Add Project</button>
        </form>
      </div>
    </>
  );
};

ProjectsForm.propTypes = {
  projectsFormTitle: PropTypes.string.isRequired,
  setProjects: PropTypes.func.isRequired,
  firebaseKey: PropTypes.string,
  projectName: PropTypes.string,
  projectImage: PropTypes.string,
  projectLink: PropTypes.string,
  projectDate: PropTypes.string,
  projectAuthors: PropTypes.string,
  projectTech: PropTypes.string
};

export default ProjectsForm;
