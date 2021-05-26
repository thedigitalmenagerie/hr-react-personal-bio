import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { getProjects } from '../helpers/data/ProjectsData';
import ProjectsForm from '../forms/ProjectsForm';
import ProjectCards from '../components/ProjectsCardComponent';
import './vStyles/ProjectsView.scss';

export default function ProjectsView({ admin }) {
  const [projects, setProjects] = useState([]);
  const [showAddProjectForm, setAddProjectForm] = useState(false);

  const handleClick = () => {
    setAddProjectForm((prevState) => !prevState);
  };

  useEffect(() => {
    getProjects().then((response) => setProjects(response));
  }, []);
  return (
    <div className="projectsView">
      <div>
      {
          admin !== null
          && <div>
              {!showAddProjectForm
                ? <Button id="addProject" onClick={handleClick}>Add Project</Button>
                : <div>
                <Button id="closeForm" onClick={handleClick}>Close Form</Button>
                <ProjectsForm
                projectsFormTitle="Add Project"
                admin={admin}
                projects={projects}
                setProjects={setProjects}
                />
             </div>
        }
          </div>
        }
      </div>
        <ProjectCards
          admin={admin}
          projects={projects}
          setProjects={setProjects}
        />
    </div>
  );
}

ProjectsView.propTypes = {
  admin: PropTypes.any
};
