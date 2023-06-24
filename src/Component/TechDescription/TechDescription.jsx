import React from 'react';
import './TechDescription.scss';
import TechStack from '../../Assets/Images/TechStack.webp';
const TechDescription = () => {
  return (
    <main>
      <header className='tech-header'>TechStackX</header>
      <section className='tech-container'>
        <img src={TechStack} className='tech-img' alt='' />
        <aside className='tech-aside-main'>
          <div>React</div>
          <div>React</div>
          <div>React</div>
          <div>React</div>
        </aside>
      </section>
    </main>
  );
};

export default TechDescription;
