import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';
import Header from './components/Header';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;