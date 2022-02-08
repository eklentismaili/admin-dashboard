import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb({ title }) {
  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link> / <span>{title}</span>
    </div>
  );
}

export default Breadcrumb;
