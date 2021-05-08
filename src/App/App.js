import React from 'react';
import firebase from 'firebase';
import firebaseConfig from '../helpers/apiKeys';
import './App.scss';
import ProjectsForm from '../forms/ProjectsForm';
import TechForm from '../forms/TechnologiesForm';
import BioForm from '../forms/BioForm';
import ResumeForm from '../forms/ResumeForm';

function App() {
  firebase.initializeApp(firebaseConfig);
  return (
    <div className='App'>
      <BioForm/>
      <ProjectsForm/>
      <ResumeForm/>
      <TechForm/>
    </div>
  );
}

export default App;
