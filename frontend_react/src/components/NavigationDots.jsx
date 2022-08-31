/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navtigation">
    {['home', 'about', 'work', 'skills', 'testemonial', 'contact'].map((item, index) => (
      <a
        href={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#9922ff' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
