import React from 'react';
import './PCenter.css'; // replace with the path to your CSS file

const PCenter = (props) => {
  return <p className="pcenter">{props.children}</p>;
};

export default PCenter;
