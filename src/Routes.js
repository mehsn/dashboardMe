import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Master from "./Components/Master";
import {lazy,Suspense} from "react";
import {BiLoader} from "react-icons/all";

export default function Routes(props) {

    const Home = lazy(() => import("./Layers/Home"));
    const About = lazy(() => import("./Layers/About"));
    return (
        <Suspense fallback={<BiLoader/>}  >
            <Router>
                <Master>
                    {props.children}
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/dashboard">
                            asds
                        </Route>

                    </Switch>
                </Master>
            </Router>
        </Suspense>

    );

}