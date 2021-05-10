import React from 'react';

type Props = {
  currentUser: CurrentUser;
};
const Nav = ({ currentUser }: Props) => {
  console.log(currentUser);
  return (
    <nav className="Nav">
      <a href="/">Home</a>
      <a href={`/users/${currentUser.id}/quizzes`}>My quizzes</a>
    </nav>
  );
};

export default Nav;
