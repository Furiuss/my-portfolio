import React from 'react';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/Furiuss" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/andr%C3%A9-messias-magno-azevedo-125b0720a" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/andrezvsd/" target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
