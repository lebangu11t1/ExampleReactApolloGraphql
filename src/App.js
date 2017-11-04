import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserList from './components/User/UserList'
import ShowUser from './components/User/ShowUser'
import CreateUser from "./components/User/CreateUser";

// setup apollo client
const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:3000/graphql' }),
    cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div>
                    <Route exact path="/" component={UserList} />
                    <Switch>
                        <Route exact path="/create-user/" component={CreateUser} />
                        <Route exact path="/user/:id/" component={ShowUser} />
                    </Switch>
                </div>
            </Router>
        </ApolloProvider>
    );
  }
}

export default App;
