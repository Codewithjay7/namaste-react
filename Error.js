import React, { use } from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
      <h1>OOOOOOoooooopps....</h1>
      <h2>This is an  Error......🫣</h2>
      <h3>{err.status}:{err.statusText}</h3>
    </div>
  )
}

export default Error
