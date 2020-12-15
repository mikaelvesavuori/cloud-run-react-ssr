import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './components/NotFound';

import SomeRoute from './routes/SomeRoute';
import AnotherRoute from './routes/AnotherRoute';

const Root = () => <><h1>React SSR on Cloud Run</h1><img src="/assets/image.jpg"/></>;

interface IApp {
  data: any;
}

class App extends React.Component<IApp> {
  constructor(props: any) {
    super(props);

    this.state = {
      data: props.data
    };
  }

  render() {
    return (
      <Switch>
        <Route exact path="/someroute">
          <SomeRoute />
        </Route>
        <Route exact path="/anotherroute">
          <AnotherRoute />
        </Route>
        <Route exact path="/" component={Root} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default App;
