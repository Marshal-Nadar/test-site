import React from 'react';
import './WorkFlow.scss';
import Workflow from '../../Assets/Images/how-we-work_infographics-desktop_488h-1x.webp';
import Workfloww from '../../Assets/Images/content-pixie-UamX6s03y3o-unsplash.jpg';

const WorkFlow = () => {
  return (
    <main>
      <header className='header-text'>WorkFlow</header>
      <img src={Workflow} alt='' />
      <div className='workflow-container'></div>
    </main>
  );
};

export default WorkFlow;
