import React ,{FunctionComponent,SyntheticEvent,useState,useContext}from 'react';
import { observer } from 'mobx-react-lite'
import RootStoreContext from '../../stores/RootStore';
import {withRouter,RouteComponentProps} from 'react-router-dom'
const GameOverScreen : FunctionComponent<RouteComponentProps> = observer((props) => {
  return (
      <div className="game-over-screen">
      <h1>Game Over</h1>
      </div>
  )
})

export default withRouter(GameOverScreen);
