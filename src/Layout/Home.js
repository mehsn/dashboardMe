import logo from "../logo.svg";
import {connect} from "react-redux";
import {useEffect} from "react";

function Home(props) {

    useEffect(() => {


    }, [])
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React {props.designState.bgColor} salam

            </a>
        </header>
    );
}

const mapStateToProps = storeState => {
    return {designState: storeState.designStore.design}

}

export default connect(mapStateToProps)(Home);
