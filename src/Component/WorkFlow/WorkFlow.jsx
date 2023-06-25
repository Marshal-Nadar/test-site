import React from 'react';
import './WorkFlow.scss';
import css from '../../Assets/Images/how-we-work_infographics-desktop_488h-1x.webp';

const WorkFlow = () => {
  return (
    <main>
      <header className='workflow-header'>WorkFlow</header>
      <div>
        <img src={css} className='' alt='' />
      </div>
    </main>
  );
};

export default WorkFlow;
