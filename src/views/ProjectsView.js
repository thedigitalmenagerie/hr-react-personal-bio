import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { getProjects } from '../helpers/data/ProjectsData';
import ProjectsForm from '../forms/ProjectsForm';
import ProjectCards from '../components/ProjectsCardComponent';

export default function ProjectsView() {
  const [projects, setProjects] = useState([]);
  const [showAddProjectForm, setAddProjectForm] = useState(false);

  const handleClick = () => {
    setAddProjectForm((prevState) => !prevState);
  };

  useEffect(() => {
    getProjects().then((response) => setProjects(response));
  }, []);
  return (
    <div>
      <div>
        {!showAddProjectForm
          ? <Button onClick={handleClick}>Add Project</Button>
          : <div>
              <Button onClick={handleClick}>Close Form</Button>
              <ProjectsForm
                projectsFormTitle="Add Project"
                setProjects={setProjects}
              />
             </div>
        }
      </div>
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
        />
      ))}
    </div>
  );
}
