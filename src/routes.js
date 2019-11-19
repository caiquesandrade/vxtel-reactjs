import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/main';
import Calculo from './pages/calculo';

const Routes = () => (
    <BrowserRouter>
        <Route path="/" component={Main} />
        <Route path="/" component={Calculo} />
    </BrowserRouter>
);

export default Routes;