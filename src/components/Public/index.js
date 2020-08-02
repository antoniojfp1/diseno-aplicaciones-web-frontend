import React from "react";
import {Switch, Route} from 'react-router-dom';
import Login from './Login';
import PasswordRecovery from './PasswordRecovery';
import Home from './Home';
import SignUp from './SignUp';

const Public = (props) => {
  return <div>
  <h1>Public</h1>
  
  <Switch>
    <Route path="/login">
      <Login setIsAuth={props.setIsAuth} />
    </Route>
    <Route exact path="/SignUp">
      <SignUp setIsAuth={props.setIsAuth}/>
    </Route>
    <Route path="/passwordRecovery" component={PasswordRecovery}></Route>
    <Route exact path="/" component={Home}></Route>
  </Switch>

  </div>;
};

export default Public;
