import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Master from "./Component/Master";
import {lazy, Suspense} from "react";
import {BiLoader} from "react-icons/all";


function Loader(props) {
    return (

        <div className="d-flex justify-content-center align-items-center"
            style={{
                zIndex: 1,
                top: 0,
                left: 0,
                position: "fixed",
                height: "100vh",
                width: "100vw",
                backgroundColor: "white",
            }}>
            <BiLoader className="animated rotateIn" size={50} />
        </div>
    );
}

export default function Routes(props) {

    const Home = lazy(() => import("./View/Home"));
    const About = lazy(() => import("./View/About"));
    const Charts = lazy(() => import("./View/Charts"));
    const Profile = lazy(() => import("./View/Profile"));
    const Message = lazy(() => import("./View/Message"));
    return (

        <Suspense fallback={<Loader/>}>

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
                        <Route path="/charts">
                            <Charts/>
                        </Route>
                        <Route path="/profile">
                            <Profile/>
                        </Route>
                        <Route path="/message">
                            <Message/>
                        </Route>

                    </Switch>
                </Master>
            </Router>
        </Suspense>

    );

}