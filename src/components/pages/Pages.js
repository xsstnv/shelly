import React from 'react';
import classes from './Pages.module.css';
import Shells from '../../containers/pages/Shells';
import Payloads from '../../containers/pages/Payloads';
import { Route, Switch } from 'react-router-dom';

const Pages = () => {
    return (
        <div className={classes.Content}>
            <Switch>
                <Route exact path="/" component={Shells} key="index" />
                <Route exact path="/shelly/shells" component={Shells} key="shells" />
                <Route exact path="/shelly/msfvenom" component={Payloads} key="payloads" />
            </Switch>
        </div>
    );
}

export default Pages;