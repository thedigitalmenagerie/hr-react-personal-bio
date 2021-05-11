import React, { useEffect, useState } from 'react';
import './App.scss';
import NavBar from '../components/NavBarCardComponent';
import ProjectsForm from '../forms/ProjectsForm';
import TechForm from '../forms/TechnologiesForm';
import BioForm from '../forms/BioForm';
import ResumeForm from '../forms/ResumeForm';
import ContactForm from '../forms/ContactForm';
import ReviewForm from '../forms/ReviewForm';
import { getBio } from '../helpers/data/BioData';
import { getContacts } from '../helpers/data/ContactData';
import { getProjects } from '../helpers/data/ProjectsData';
import { getResume } from '../helpers/data/ResumeData';
import { getReviews } from '../helpers/data/ReviewData';
import { getTechnologies } from '../helpers/data/TechnologiesData';
import BioCards from '../components/BioCardComponent';
import ContactCards from '../components/ContactCardComponent';
import ProjectCards from '../components/ProjectsCardComponent';
import ResumeCards from '../components/ResumeCardComponent';
import ReviewCards from '../components/ReviewCardComponent';
import TechCards from '../components/TechnologiesCardComponent';

function App() {
  const [bios, setBios] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [resumes, setResumes] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    getBio().then((response) => setBios(response));
    getContacts().then((response) => setContacts(response));
    getProjects().then((response) => setProjects(response));
    getResume().then((response) => setResumes((response)));
    getReviews().then((response) => setReviews(response));
    getTechnologies().then((response) => setTechnologies(response));
  }, []);

  return (
    <div className='App'>
      <NavBar/>
      <BioForm
      bioFormTitle="Add Bio"
      setBios={setBios}
      />
      <hr/>
      {bios.map((bioInfo) => (
        <BioCards key={bioInfo.firebaseKey}
          firebaseKey={bioInfo.firebaseKey}
          bioImage={bioInfo.bioImage}
          bioName={bioInfo.bioName}
          bioTitle={bioInfo.bioTitle}
          bioLocation={bioInfo.bioLocation}
          bioDescription={bioInfo.bioDescription}
          bioDate={bioInfo.bioDate}
          setBios={setBios}
        />
      ))}
      <ContactForm
      contactFormTitle="Contact Honey-Rae"
      setContacts={setContacts}
      />
      <hr/>
      {contacts.map((contactInfo) => (
        <ContactCards key={contactInfo.firebaseKey}
        firebaseKey={contactInfo.firebaseKey}
        contactName={contactInfo.contactName}
        contactEmail={contactInfo.contactEmail}
        contactPhone={contactInfo.contactPhone}
        contactDate={contactInfo.contactDate}
        contactReason={contactInfo.contactReason}
        setContacts={setContacts}
        />
      ))}
      <ProjectsForm
      projectsFormTitle="Add Project"
      setProjects={setProjects}
      />
      <hr/>
      {projects.map((projectInfo) => (
        <ProjectCards key={projectInfo.firebaseKey}
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
      <ResumeForm
      resumeFormTitle="Add Resume"
      setResumes={setResumes}
      />
      <hr/>
      {resumes.map((resumeInfo) => (
        <ResumeCards key={resumeInfo.firebaseKey}
        firebaseKey={resumeInfo.firebaseKey}
        resumeCompany={resumeInfo.resumeCompany}
        resumeLocation={resumeInfo.resumeLocation}
        resumeDate={resumeInfo.resumeDate}
        resumeLength={resumeInfo.resumeLength}
        resumeRole={resumeInfo.resumeLength}
        resumeSkills={resumeInfo.resumeSkills}
        setResumes={setResumes}
        />
      ))}
      <ReviewForm
      reviewFormTitle="Review Honey-Rae"
      setReviews={setReviews}
      />
      <hr/>
      {reviews.map((reviewInfo) => (
        <ReviewCards key={reviewInfo.firebaseKey}
        firebaseKey={reviewInfo.firebaseKey}
        reviewerName={reviewInfo.reviewerName}
        reviewerCompany={reviewInfo.reviewerCompany}
        reviewerRole={reviewInfo.reviewerRole}
        reviewerLocation={reviewInfo.reviewerLocation}
        reviewerDate={reviewInfo.reviewerDate}
        reviewerDescription={reviewInfo.reviewerDescription}
        setReviews={setReviews}
        />
      ))}
      <TechForm
      technologiesFormTitle="Add Technology"
      setTechnologies={setTechnologies}
      />
      <hr/>
      {technologies.map((techInfo) => (
        <TechCards key={techInfo.firebaseKey}
        firebaseKey={techInfo.firebaseKey}
        techImage={techInfo.techImage}
        techName={techInfo.techName}
        techCategory={techInfo.techCategory}
        techDate={techInfo.techDate}
        techDescription={techInfo.techDescription}
        setTechnologies={setTechnologies}
        />
      ))}
    </div>
  );
}

export default App;
