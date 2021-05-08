import React, { useState } from 'react';
import addProjects from '../helpers/data/ProjectsData';

export default function ProjectsForm() {
  const [project, setProject] = useState({
    projectFirebaseKey: '',
    projectName: '',
    projectImage: '',
    projectLink: '',
    projectDate: '',
    projectAuthors: ''
  });

  const handleProjectInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProjects(project);
  };

  return (
    <>
      <div className="ProjectsForm">
        <form
          id="addProjectsForm"
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <h3 id="addProjectFormTitle">Add Projects</h3>
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
          <button type="submit">Add Project</button>
        </form>
      </div>
    </>
  );
}
