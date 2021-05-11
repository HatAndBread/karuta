import React from 'react';
import ReactDOM from 'react-dom';
import setupToken from '../token';
import camelize from '../camelize';
import MainTemplate from './Components/MainTemplate';
import { Provider } from 'react-redux';
import store from './Store';

function setup(root: HTMLElement) {
  setupToken();
  console.log(root.dataset);
  const data = camelize(JSON.parse(root.dataset.data));
  const currentUser = root.dataset.currentUser ? camelize(JSON.parse(root.dataset.currentUser)) : null;
  const contentType = root.dataset.contentType;
  ReactDOM.render(
    <Provider store={store}>
      <MainTemplate currentUser={currentUser} contentType={contentType} data={data} />
    </Provider>,
    root
  );
}

document.addEventListener('DOMContentLoaded', () => {
  setup(document.getElementById('root'));
});
