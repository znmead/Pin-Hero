import React from 'react';
import './Footer.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return <footer>
    <hr></hr>
    &copy; Zach Mead 2021 &nbsp;
    <a href="https://www.linkedin.com/in/znmead/">
      <i className="fab fa-linkedin"></i>
    </a>
    <hr></hr>
  </footer>;
};

export default Footer;
