import React from 'react';
import { Link } from 'react-router-dom';

const SomeRoute = () => (
  <>
    <h1>SomeRoute</h1>
    <Link to="/anotherroute">Go to "AnotherRoute"</Link>
  </>
);

export default SomeRoute;
