import React from 'react';
import { Link } from 'react-router-dom';

const AnotherRoute = () => (
  <>
    <h1>AnotherRoute</h1>
    <Link to="/someroute">Go to "SomeRoute"</Link>
  </>
);

export default AnotherRoute;
