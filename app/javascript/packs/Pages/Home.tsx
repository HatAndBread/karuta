import React from 'react';
import ReactDOM from 'react-dom';

const Home = () => {
  return <div>THIS IS REACT</div>;
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Home />, document.getElementById('root'));
});
