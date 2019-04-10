import React, { Fragment, lazy, Suspense,FunctionComponent } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Loader from './Loader';
import StartScreen from './StartScreen/StartScreen'
import GameOverScreen from './GameOverScreen/GameOverScreen'
import Question from './Question/Question'
const Router: FunctionComponent = () => {
  return (<BrowserRouter>
          <>
            <div className="main-container">
              <Switch>
              <Route
              exact
                  path="/"
                  component={StartScreen}
                />
              <Route
              exact
                  path="/question/:questionId"
                  component={Question}
                />
              <Route
              exact
                  path="/game-over"
                  component={GameOverScreen}
                />
              </Switch>
            </div>
          </>
        </BrowserRouter>)
};

export default Router;