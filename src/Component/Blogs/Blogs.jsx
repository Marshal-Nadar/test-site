import React from 'react';
import './Blogs.scss';
const Blogs = () => {
  return (
    <main>
      <header className='header-text'>Blogs</header>

      <section className='blogs-container'>
        <div className='blogs-header'>Self Development</div>
        <div className='blogs-header'>Coding</div>
        <div className='blogs-header'>Health</div>
        <div className='blogs-header'>Life Hacks</div>
        <div className='blogs-header'>Art</div>
      </section>
    </main>
  );
};

export default Blogs;
