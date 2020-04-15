import React, { Component } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SideBar from "./components/SideBar";

import routes from "./routes";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
const client = new ApolloClient({
    uri: "http://localhost:4000/"
});
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            globalHistory: {}
        };
    }

    showContentMenus = routes => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return <Route key={index} path={route.path} exact={route.exact} component={route.main} />;
            });
        }
        return result;
    };

    render() {
        return (
            <ApolloProvider client={client}>
                <Router>
                    <div id="wrapper">
                        <SideBar />
                        {/* Content */}
                        <Switch>{this.showContentMenus(routes)}</Switch>

                        {/* End Content */}
                    </div>
                </Router>
            </ApolloProvider>
        );
    }
}

export default App;
