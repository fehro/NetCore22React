import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

const App = () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
    </Layout>
);

export default process.env.NODE_ENV === "development" ? hot(App) : App;