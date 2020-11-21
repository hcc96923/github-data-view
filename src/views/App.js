import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home/index';
import Data from './Data/index';
import NotFound from './NotFound/index';


function App() {
    return (
        <Fragment>
            <Router>
                <Switch>
                    {/* 根路径 */}
                    <Route path="/" exact>
                        <Home></Home>
                    </Route>
                    {/* 首页路由 */}
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    {/* 数据路由 */}
                    <Route path="/data">
                        <Data></Data>
                    </Route>
                    {/* 404路由 */}
                    <Route>
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>
        </Fragment>
    )
}

export default App;