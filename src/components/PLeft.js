import React from 'react';
import './PLeft.css'; // replace with the path to your CSS file

const PLeft = (props) => {
  return <p className="pleft">{props.children}</p>;
};

export default PLeft;
