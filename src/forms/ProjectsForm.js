import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimationWrapper } from 'react-hover-animation';
import { addProjects, updateProjects } from '../helpers/data/ProjectsData';
import './fStyles/ProjectForm.scss';

const ProjectsForm = ({
  projectsFormTitle,
  projects,
  setProjects,
}) => {
  const [project, setProject] = useState({
    projectAuthors: projects.projectAuthors || '',
    projectDate: projects.projectDate || '',
    projectImage: projects.projectImage || '',
    projectLink: projects.projectLink || '',
    projectName: projects.projectName || '',
    projectTech: projects.projectTech || '',
    firebaseKey: projects.firebaseKey || null,
  });

  const handleProjectInputChange = (e) => {
    setProjects((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projects.firebaseKey) {
      updateProjects(project).then((projectsArray) => setProjects(projectsArray));
    } else {
      addProjects(project).then((projectsArray) => setProjects(projectsArray));

      setProject({
        bioDate: '',
        bioDescription: '',
        bioImage: '',
        bioLocation: '',
        bioName: '',
        bioTitle: '',
        firebaseKey: null,
      });
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
            value={projects.projectName}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Image: </label>
          <input
            name='projectImage'
            type='text'
            placeholder='Project Image URL'
            value={projects.projectImage}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Link: </label>
          <input
            name='projectLink'
            type='text'
            placeholder='Project Link'
            value={projects.projectLink}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Date: </label>
          <input
            name='projectDate'
            type='text'
            placeholder='Project Date'
            value={projects.projectDate}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Authors: </label>
          <input
            name='projectAuthors'
            type='text'
            placeholder='Project Authors'
            value={projects.projectAuthors}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Tech Used: </label>
          <input
            name='projectTech'
            type='text'
            placeholder='Project Tech Used'
            value={projects.projectTech}
            onChange={handleProjectInputChange}
          >
          </input>
          <AnimationWrapper><button id="submitProject" type="submit">Add Project</button></AnimationWrapper>
        </form>
      </div>
    </>
  );
};

ProjectsForm.propTypes = {
  projectsFormTitle: PropTypes.string.isRequired,
  admin: PropTypes.any,
  projects: PropTypes.any,
  setProjects: PropTypes.func
};

export default ProjectsForm;
