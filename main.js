import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './client/views/productInfo.jsx';
import {HashRouter, Route, Link} from 'react-router-dom';
import Home from './client/components/home.jsx';
import ProductOrderViewPage from './client/components/productOrderViewPage.jsx';
import AllocationPage from './client/components/allocationView.jsx';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/poView' component={ProductOrderViewPage} />
      <Route exact path='/alloView' component={AllocationPage} />
    </div>
  </HashRouter>,
  document.getElementById('app')
);
