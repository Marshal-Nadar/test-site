import React from 'react';
import './TechDescription.scss';
import TechStack from '../../Assets/Images/joshua-aragon-FGXqbqbGt5o-unsplash.jpg';
import reactIcon from '../../Assets/Images/react_icon.svg';
import jsIcon from '../../Assets/Images/js_icon.svg';
import webpackIcon from '../../Assets/Images/webpack_icon.svg';
import scssIcon from '../../Assets/Images/scss_icon.svg';
import nodeJsIcon from '../../Assets/Images/nodejs_icon.svg';
import postgresIcon from '../../Assets/Images/postgres_icon.svg';
import reduxIcon from '../../Assets/Images/redux_icon.svg';
import pwaIcon from '../../Assets/Images/pwa-icon.svg';
const TechDescription = () => {
  return (
    <main className='techstack-main'>
      <header className='tech-header'>TechStackX</header>
      <section className='tech-container'>
        <img src={TechStack} className='techstack-img' alt='' />
        <aside className='tech-aside-main'>
          <img src={jsIcon} className='tech-img' alt='' />
          <img src={reactIcon} className='tech-img' alt='' />
          <img src={reduxIcon} className='tech-img' alt='' />
          <img src={pwaIcon} className='tech-img' alt='' />
          <img src={nodeJsIcon} className='tech-img' alt='' />
          <img src={webpackIcon} className='tech-img' alt='' />
          <img src={scssIcon} className='tech-img' alt='' />
          <img src={postgresIcon} className='tech-img' alt='' />
        </aside>
      </section>
    </main>
  );
};

export default TechDescription;
