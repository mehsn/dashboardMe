import '../css/header.css';
import {connect} from "react-redux";
import {
    changeDesignAction,
    darkDesignAction,
    lightDesignAction,
    randomDesignAction
} from "../App/Reducer/designReducer";
import {changeSidebarDisplayAction} from "../App/Reducer/componentDisplayReducer";
import {BiMenu, CgClose} from "react-icons/all";
import {Animated} from "react-animated-css";


function Header(props) {

    function btnSidebar() {
        if (props.sidebarState)
            return (

                <CgClose className="hqSidebarBtn" onClick={props.changeSidebarDisplayAction}/>

            )
        else
            return (
                <BiMenu className="hqSidebarBtn" onClick={props.changeSidebarDisplayAction}/>

            )
    }


    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <ul>
                        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} >
                            {btnSidebar()}
                        </Animated>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


function mapStateToProps(storeState) {
    return {
        designState: storeState.designStore.design,
        sidebarState: storeState.componentDisplayStore.componentDisplay.sidebarDisplay

    }
}

export default connect(mapStateToProps, {
    changeDesignAction,
    lightDesignAction,
    darkDesignAction,
    randomDesignAction,
    changeSidebarDisplayAction
})(Header);