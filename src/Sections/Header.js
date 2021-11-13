import '../css/header.css';
import {connect} from "react-redux";
import {
    changeDesignAction,
    darkDesignAction,
    lightDesignAction,
    randomDesignAction
} from "../App/Reducer/designReducer";
import {changeSidebarDisplayAction} from "../App/Reducer/componentDisplayReducer";
import {BiMenu, BiSearch, CgClose} from "react-icons/all";
import {Animated} from "react-animated-css";
import {Link} from "react-router-dom";


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

        <nav className="navbar navbar-expand navbar-dark mainHeader">

            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-between  " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 p-0 mb-lg-0">
                        <ul className="text-center m-0 p-0 ml-4">
                            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                                {btnSidebar()}
                            </Animated>
                        </ul>
                        <li className="nav-item">
                            <Link className="nav-link active text-success" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-success" to="about">Link</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-success" to="dashboard">dashboard</Link>
                        </li>
                    </ul>
                    <div className="row">
                        <form className="d-flex searchBox ">
                            <input className="searchInput pr-2"
                                   type="search" placeholder="جستجو کنید ... " aria-label="Search"/>
                            <button className="btn searchBtn " type="submit"><BiSearch size={18} color={"green"}/>
                            </button>
                        </form>

                    </div>
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