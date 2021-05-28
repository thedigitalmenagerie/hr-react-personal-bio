import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { animations, HideUntilLoaded } from 'react-animation';
import { AnimationWrapper } from 'react-hover-animation';
import { getProjects } from '../helpers/data/ProjectsData';
import ProjectsForm from '../forms/ProjectsForm';
import ProjectCards from '../components/ProjectsCardComponent';
import './vStyles/ProjectsView.scss';

export default function ProjectsView({
  admin,
  setAdmin,
}) {
  const [projects, setProjects] = useState([]);
  const [showAddProjectForm, setAddProjectForm] = useState(false);

  const handleClick = () => {
    setAddProjectForm((prevState) => !prevState);
  };

  useEffect(() => {
    getProjects().then((response) => setProjects(response));
  }, []);
  return (
    <div className="projectsView" style={{ animation: animations.fadeIn }}>
      <div>
        {
          admin !== null
          && <div>
            { admin
              ? <div>
                  {!showAddProjectForm
                    ? <AnimationWrapper><Button id="addProject" onClick={handleClick}>Add Project</Button></AnimationWrapper>
                    : <div>
                      <AnimationWrapper><Button id="closeForm" onClick={handleClick}>Close Form</Button></AnimationWrapper>
                      <ProjectsForm
                        projectsFormTitle="Add Project"
                        admin={admin}
                        setAdmin={setAdmin}
                        projects={projects}
                        setProjects={setProjects}
                      />
                    </div>
                  }
                </div>
              : <div></div>

            }
            </div>
        }
      </div>
        <HideUntilLoaded><ProjectCards
          admin={admin}
          setAdmin={setAdmin}
          projects={projects}
          setProjects={setProjects}
        /></HideUntilLoaded>
    </div>
  );
}

ProjectsView.propTypes = {
  admin: PropTypes.any,
  setAdmin: PropTypes.any,
};
