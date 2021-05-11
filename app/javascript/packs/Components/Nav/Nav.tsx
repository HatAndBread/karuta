import React from 'react';
import axios from 'axios';

type Props = {
  currentUser: CurrentUser | null;
};
const Nav = ({ currentUser }: Props) => {
  console.log(currentUser);
  return (
    <nav className='Nav'>
      <a href='/'>Home</a>
      <a href='/games'>Games</a>
      {currentUser ? (
        <>
          <a href={`/users/${currentUser.id}/quizzes`}>My quizzes</a>
          <a href={`/users/sign_out/`}>Sign out</a>
        </>
      ) : (
        <>
          <a href='/users/sign_up'>Sign up</a>
          <a href='/users/sign_in'>Sign in</a>
        </>
      )}
    </nav>
  );
};

export default Nav;
