import React from "react"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import AboutUs from "../../pages/AboutUs"
import Home from "../../pages/Home"
import Nav from "./Nav"

const CustomRouter = () => {
    return (
        <React.Fragment>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/aboutUs" component={AboutUs} />
                    <Route exact path="/" render={() => <p>Login</p>} />
                    <Route exact path="/*" render={() => <p>Error</p>} />
                </Switch>

            </Router>
        </React.Fragment>
    )
}
export default CustomRouter