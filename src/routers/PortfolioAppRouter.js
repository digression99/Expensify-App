import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import ContactPage from '../components/portfolio/ContactPage';
import PortfolioHomePage from '../components/portfolio/PortfolioHomePage';
import PortfolioItemPage from '../components/portfolio/PortfolioItemPage';
import PortfolioPage from '../components/portfolio/PortfolioPage';
import PortfolioHeader from '../components/portfolio/PortfolioHeader';

const PortfolioAppRouter = () => (
    <BrowserRouter>
        <div>
            <PortfolioHeader />
            <Switch>
                <Route path="/" component={PortfolioHomePage} exact={true}/>
                <Route path="/portfolio" component={PortfolioPage} exact={true}/>
                <Route path="/portfolio/:id" component={PortfolioItemPage} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default PortfolioAppRouter;