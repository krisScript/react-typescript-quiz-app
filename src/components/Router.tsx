import React, { Fragment, lazy, Suspense,FunctionComponent } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Loader from './Loader';
import StartScreen from './StartScreen/StartScreen'
import Question from './Question/Question'
const Router: FunctionComponent = () => {
  return (<BrowserRouter>
          <>
            <div className="main-container">
              <Switch>
              <Route
              exact
                  path="/question/:questionId"
                  component={Question}
                />
              <Route
              exact
                  path="/"
                  component={StartScreen}
                />
              </Switch>
            </div>
          </>
        </BrowserRouter>)
};

export default Router;