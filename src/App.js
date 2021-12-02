import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Header, Home } from './components';
import Detail from './components/Detail';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/detail/:id">
                        <Detail />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
