import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AnimationWrapper } from 'react-hover-animation';
import { animations } from 'react-animation';
import { getProjects } from '../helpers/data/ProjectsData';
import ProjectsForm from '../forms/ProjectsForm';
import ProjectCards from '../components/ProjectsCardComponent';
import './vStyles/ProjectsView.scss';

export default function ProjectsView({
  admin,
  setAdmin,
  user,
  setUser,
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
    <div style={{ animation: animations.fadeIn }}>
      {
        admin !== null
          && <div>
            { admin
              ? <div>
                  {!showAddProjectForm
                    ? <AnimationWrapper><button id="addProject" onClick={handleClick}>Add Project</button></AnimationWrapper>
                    : <div>
                      <AnimationWrapper><button id="closeForm" onClick={handleClick}>Close Form</button></AnimationWrapper>
                      <ProjectsForm
                        projectsFormTitle="Add Project"
                        setProjects={setProjects}
                        admin={admin}
                        setAdmin={setAdmin}
                        user={user}
                        setUser={setUser}
                      />
                    </div>
                  }
                </div>
              : <div></div>

            } </div>
          }
          {projects.map((projectInfo) => (
            <ProjectCards
              key={projectInfo.firebaseKey}
              firebaseKey={projectInfo.firebaseKey}
              projectImage={projectInfo.projectImage}
              projectName={projectInfo.projectName}
              projectLink={projectInfo.projectLink}
              projectDate={projectInfo.projectDate}
              projectAuthors={projectInfo.projectAuthors}
              projectTech={projectInfo.projectTech}
              setProjects={setProjects}
              admin={admin}
              setAdmin={setAdmin}
              user={user}
              setUser={setUser}
            />
          ))}
    </div>
  );
}

ProjectsView.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func,
  admin: PropTypes.any,
  setAdmin: PropTypes.func
};
