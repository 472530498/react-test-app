import React from "react";
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import {Welcome} from './pages/welcome.js'
import {Form} from './pages/form.js'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                <Route exact path="/" component={Welcome}/>
                <Route path="/form" component={Form}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
