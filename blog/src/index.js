import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// The purpose of the Route component is to figure out
// the configuration of the page based on some component
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import promise from 'redux-promise';

import PostIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
// Switch allows us to match the url to the most specific url
// :id is a wildcard component
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
