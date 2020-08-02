import React from "react";
import Tweets from "./Tweets";
import Profile from "./Profile";
import { Switch, Route, useHistory } from "react-router-dom"

const Private = (props) => {
    
    const history = useHistory();
    
    const signOut = () => {
        props.setIsAuth(false);
        localStorage.removeItem('jwt');
        history.push("/");
    }

    return <div>
        <h1>Private</h1>
        <p><button 
                onClick={() => signOut()}
                type="button">Sign out</button></p>
        <Switch>
            <Route exact path="/"><Tweets/></Route>
            <Route exact path="/Profile/:username?/:userId?"><Profile/></Route>
        </Switch>
    </div>;
};

export default Private;