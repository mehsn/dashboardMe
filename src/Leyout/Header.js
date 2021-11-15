import '../assets/css/header.css';
import ProfileImg from '../Img/ProfileImg.jpg';
import {connect} from "react-redux";
import {
    changeDesignAction,
    darkDesignAction,
    lightDesignAction,
    randomDesignAction
} from "../App/Reducer/designReducer";
import {changeSidebarDisplayAction} from "../App/Reducer/componentDisplayReducer";
import {
    BiMenu,
    BiSearch,
    BsBellFill,
    CgClose, MdArrowDropDown,
} from "react-icons/all";
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

        <nav className="animated fadeInDown navbar navbar-expand navbar-dark mainHeader  p-0 pt-2">
            <div className="container-fluid d-flex flex-row">
                <div className="d-flex flex-row collapse navbar-collapse justify-content-between  " id="navbarSupportedContent">
                    <div className="d-flex flex-row align-items-center">
                        <div className="text-center m-0 p-0 ml-4 ms-3">
                            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                                {/*{btnSidebar()}*/}
                                <BiMenu className="hqSidebarBtn" onClick={props.changeSidebarDisplayAction}/>
                            </Animated>
                        </div>
                        <form className="d-lg-flex searchBox ms-3 d-none d-sm-none d-md-none d-lg-block ">
                            <input className="searchInput pr-2"
                                   type="search" placeholder="جستجو کنید ... " aria-label="Search"/>
                            <button className="btn searchBtn " type="submit"><BiSearch size={18} color={"green"}/>
                            </button>
                        </form>

                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between ">
                        <ul className="navbar-nav me-auto ml-4 p-0 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link active text-success" to="/">داشبورد</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-success" to="charts">نمودارها</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-success" to="about">
                                    <span className="position-absolute badge btn-danger" style={{fontSize:"0.6rem"}} >4</span>
                                    <BsBellFill size={22}/>
                                </Link>
                            </li>

                        </ul>

                        <div className="d-flex flex-row justify-content-center align-items-center p-2 ml-1">

                            <img width="40px" height="40px" style={{width:"30px",height:"30px"}}
                                 className="rounded-circle p-0" src={ProfileImg} alt="profile"/>
                            <MdArrowDropDown size={24}/>
                        </div>




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