import GlobalStyles from '@Assets/Styles/Global';
import { routerTemplates } from '@Routers/Router';
import { history } from '@Utils/Libs';
import React, { Suspense } from 'react';
import { Router, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyles />

      <Router history={history}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>{routerTemplates}</Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
