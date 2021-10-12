import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./Layout/Home";
import Master from "./Components/Master";

export default function Routes(props){

    return(
        <Router>
            <Master>
                {props.children}
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        About
                    </Route>
                    <Route path="/dashboard">
                        asds
                    </Route>
                </Switch>
            </Master>
        </Router>
    );

}