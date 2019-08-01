import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <Link to='/register'>Create an account</Link>
      <Link to='/login'>Login</Link>     
    </>
  )
}

export default Main;