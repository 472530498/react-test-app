import React from "react";
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import {Welcome} from './pages/welcome.js'
import {PageOne} from './pages/form.js'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Welcome}/>
                    <Route exact path="/form/:id" component={PageOne}/>
                    <Route exact path="/form2" component={PageOne}/>
                    <Route exact path="/form3" component={PageOne}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
