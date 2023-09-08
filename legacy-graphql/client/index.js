import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo';

import App from './components/App'
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';

const client = new ApolloClient({})


ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={SongList} />
        <Route path='song/new' component={SongCreate} />
      </Route>
    </Router>
  </ApolloProvider>,
  document.querySelector('#root')
);
