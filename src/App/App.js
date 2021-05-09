import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import firebaseConfig from '../helpers/apiKeys';
import './App.scss';
// import ProjectsForm from '../forms/ProjectsForm';
// import TechForm from '../forms/TechnologiesForm';
import BioForm from '../forms/BioForm';
// import ResumeForm from '../forms/ResumeForm';
// import ContactForm from '../forms/ContactForm';
// import ReviewForm from '../forms/ReviewForm';
import { getBio } from '../helpers/data/BioData';
// import { getContacts } from '../helpers/data/ContactData';
// import { getProjects } from '../helpers/data/ProjectsData';
// import { getResume } from '../helpers/data/ResumeData';
// import { getReviews } from '../helpers/data/ReviewData';
// import { getTechnologies } from '../helpers/data/TechnologiesData';
import BioCards from '../components/BioCardComponent';
// import ContactCards from '../components/ContactCardComponent';
// import ProjectCards from '../components/ProjectsCardComponent';
// import ResumeCards from '../components/ResumeCardComponent';
// import ReviewCards from '../components/ReviewCardComponent';
// import TechCards from '../components/TechnologiesCardComponent';

firebase.initializeApp(firebaseConfig);

function App() {
  const [bios, setBios] = useState([]);
  // const [contacts, setContacts] = useState([]);
  // const [projects, setProjects] = useState([]);
  // const [resumes, setResumes] = useState([]);
  // const [reviews, setReviews] = useState([]);
  // const [techs, setTechs] = useState([]);

  useEffect(() => {
    getBio().then((response) => setBios(response));
    // getContacts().then((response) => setContacts(response));
    // getProjects().then((response) => setProjects(response));
    // getResume().then((response) => setResumes((response)));
    // getReviews().then((response) => setReviews(response));
    // getTechnologies().then((response) => setTechs(response));
  }, []);

  return (
    <div className='App'>
      <BioForm bioFormTitle="Add Bio"/>
      <hr/>
      {bios.map((bioInfo) => (
        <BioCards key={bioInfo.firebaseKey}
          bioImage={bioInfo.bioImage}
          bioName={bioInfo.bioName}
          bioTitle={bioInfo.bioTitle}
          bioLocation={bioInfo.bioLocation}
          bioDescription={bioInfo.bioDescription}
          bioDate={bioInfo.bioDate}
        />
      ))}
      {/* <ContactForm contactFormTitle="Contact Honey-Rae"/>
      <hr/>
      {contacts.map((contactInfo) => (
        <ContactCards key={contactInfo.firebaseKey}
        contactName={contactInfo.contactName}
        contactEmail={contactInfo.contactEmail}
        contactPhone={contactInfo.contactPhone}
        contactDate={contactInfo.contactDate}
        contactReason={contactInfo.contactReason}
        />
      ))}
      <ProjectsForm projectsFormTitle="Add Project"/>
      <hr/>
      {projects.map((projectInfo) => (
        <ProjectCards key={projectInfo.firebaseKey}
        projectImage={projectInfo.projectImage}
        projectName={projectInfo.projectName}
        projectLink={projectInfo.projectLink}
        projectDate={projectInfo.projectDate}
        projectAuthors={projectInfo.projectAuthors}
        projectTech={projectInfo.projectAuthors}
        />
      ))}
      <ResumeForm resumeFormTitle="Add Resume"/>
      <hr/>
      {resumes.map((resumeInfo) => (
        <ResumeCards key={resumeInfo.firebaseKey}
        resumeCompany={resumeInfo.resumeCompany}
        resumeLocation={resumeInfo.resumeLocation}
        resumeDate={resumeInfo.resumeDate}
        resumeLength={resumeInfo.resumeLength}
        resumeRole={resumeInfo.resumeLength}
        resumeSkills={resumeInfo.resumeSkills}
        />
      ))}
      <ReviewForm reviewFormTitle="Review Honey-Rae"/>
      <hr/>
      {reviews.map((reviewInfo) => (
        <ReviewCards key={reviewInfo.firebaseKey}
        reviewerName={reviewInfo.reviewInfo}
        reviewerCompany={reviewInfo.reviewerCompany}
        reviewerRole={reviewInfo.reviewerRole}
        reviewerLocation={reviewInfo.reviewerLocation}
        reviewerDate={reviewInfo.reviewerDate}
        reviewerDescription={reviewInfo.reviewerDescription}
        />
      ))}
      <TechForm technologiesFormTitle="Add Technology"/>
      <hr/>
      {techs.map((techInfo) => (
        <TechCards key={techInfo.firebaseKey}
        techImage={techInfo.techImage}
        techName={techInfo.techName}
        techCategory={techInfo.techCategory}
        techDate={techInfo.techDate}
        techDescription={techInfo.techDescription}
        />
      ))} */}
    </div>
  );
}

export default App;
