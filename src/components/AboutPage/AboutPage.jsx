import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
      <p>
            This app was made with the following technologies: <br></br>

            PERN Stack: 
            Postgresql - Backend database
            Express - Backend web application framework for Node 
            React - JavaScript library for frontend user interfaces
            Node.js - Backend JavaScript runtime environment
            </p>
            <hr></hr>
            <br></br>

            

          <br></br>

          <p>
            Zen Of Javascript by Clayton Gulick

            <hr></hr>
            <br></br>

            Build functionality, not architecture.<br></br>
            Build small things that work<br></br>
            and glue them together to make big things.<br></br>
            Clear is better than clever,<br></br>
            but graceful beats both.<br></br>
            Comments are good, even if you're Dutch.<br></br>
            Asychronous is better than synchronous
            except for when it isn't
            but your code should work on both.<br></br>
            Convention is better than definition,
            if you have good docs.<br></br>
            Keep it loose, but build good tests.<br></br>
          </p>

          <br></br>
          <hr></hr>
          <br></br>

          <p>
            "I am faster than 80% of all snakes." - Dwight Shrute
          </p>

      </div>
    </div>
  );
}

export default AboutPage;
