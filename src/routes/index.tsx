import Construction from 'pages/Construction';
import Main from 'pages/Main';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Main} />
                <Route path='/construction' component={Construction} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;