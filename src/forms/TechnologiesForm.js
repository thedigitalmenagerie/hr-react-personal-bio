import React, { useState } from 'react';
import addTechnologies from '../helpers/data/ProjectsData';

export default function TechForm() {
  const [tech, setTech] = useState({
    techCategory: '',
    techName: '',
    techDescription: '',
    techImage: '',
    techDate: '',
  });

  const handleProjectInputChange = (e) => {
    setTech((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTechnologies(tech);
  };

  return (
    <>
      <div className="TechForm">
        <form
          id="addTechForm"
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <h3 id="addTechFormTitle">Add Tech</h3>
          <label>Category: </label>
          <input
            name='techCategory'
            type='text'
            placeholder='Category'
            value={tech.techCategory}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Name: </label>
          <input
            name='techName'
            type='text'
            placeholder='Name'
            value={tech.techName}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Description: </label>
          <input
            name='techDescription'
            type='text'
            placeholder='Description'
            value={tech.techDescription}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Image: </label>
          <input
            name='techImage'
            type='text'
            placeholder='Image URL'
            value={tech.techImage}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Date: </label>
          <input
            name='techDate'
            type='text'
            placeholder='Date'
            value={tech.techDate}
            onChange={handleProjectInputChange}
          >
          </input>
          <button type="submit">Add Project</button>
        </form>
      </div>
    </>
  );
}
