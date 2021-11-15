import '../assets/css/sidebar.css';
import {connect} from "react-redux";
import {
    changeDesignAction,
    darkDesignAction,
    lightDesignAction,
    randomDesignAction
} from "../App/Reducer/designReducer";
import {
    AiFillDashboard,
    AiFillHome,
    AiOutlineRadarChart,
    BiLeftArrow,
    BiLeftArrowCircle,
    BiMessageAltCheck,
    BiRightArrow,
    BiRightArrowCircle,
    BiUpArrow,
    BsBellFill,
    CgProfile,
    FaAccessibleIcon,
    GoDashboard,
    IoClose
} from "react-icons/all";
import {useState} from "react";
import {
    changeSidebarDisplayAction,
    maximizeSidebarDisplayAction,
    minimizeSidebarDisplayAction
} from "../App/Reducer/componentDisplayReducer";
import {Button} from "@mui/material";
import SidebarResponsiveButton from "../Component/SidebarResponsiveButton";
import {Link} from "react-router-dom";

function Sidebar(props) {
    const [sidebarDisplay, setSidebarDisplay] = useState("true");
    console.log(props.sidebarState)


    let dependentData = {
        color: "#fff",
        SidebarSize: '18vw',
        SidebarIcon : <div><GoDashboard size={70} color={"#13d28b"}/></div>,
        sidebarArrowBtn: <Button onClick={() => {
            props.maximizeSidebarDisplayAction();
        }}> <BiLeftArrowCircle color="gray"/> </Button>,

    };

    console.log(dependentData)
    switch (props.sidebarState) {

        case "false":
            dependentData.color = "#212";
            dependentData.SidebarSize = 0;
            break;
        case "minimize":
            dependentData.color = "#212";
            dependentData.SidebarSize = '5vw';
            dependentData.SidebarIcon = <div><GoDashboard size={30} color={props.designState.textBaseColor}/></div>;
            dependentData.sidebarArrowBtn = <Button onClick={() => {
                props.maximizeSidebarDisplayAction();
            }}> <BiLeftArrowCircle color="gray"/> </Button>;
            break;
        case "maximize":
            dependentData.color = "#212";
            dependentData.SidebarSize = '18vw';
            dependentData.sidebarArrowBtn = <Button onClick={() => {
                props.maximizeSidebarDisplayAction();
            }}> <BiRightArrowCircle color="gray"/> </Button>;
            break;
        default:
            dependentData.color = "#212";
            dependentData.SidebarSize = '18vw';
            dependentData.SidebarIcon = <div><GoDashboard size={70} color={"#13d28b"}/></div>;
            dependentData.sidebarArrowBtn = <Button onClick={() => {
                props.maximizeSidebarDisplayAction();
            }}> <BiRightArrowCircle color="gray"/> </Button>;

    }


    function sidebarArrowBtn() {
        switch (props.sidebarState) {

            case "minimize":
                return (
                    <Button onClick={() => {
                        props.maximizeSidebarDisplayAction();
                    }}> <BiLeftArrowCircle color="gray"/> </Button>
                )
            default:
                return (
                    <Button onClick={() => {
                        props.minimizeSidebarDisplayAction();
                    }}> <BiRightArrowCircle color="gray"/> </Button>
                )

        }
    }


    return (
        <div
            className={"hqSidebar  position-md-fixed position-md-fixed " + (props.sidebarState ? ' d-block ' : " d-none")}
            style={{
                backgroundColor: props.designState.bgColor, color: props.designState.textBaseColor,
                width: dependentData.SidebarSize
            }}>

            <div className="d-flex w-100 justify-content-end text-secondary">
                {sidebarArrowBtn()}
            </div>
            <br/>
            <div className="d-md-none" onClick={() => {
                props.changeSidebarDisplayAction();
            }}>
                <IoClose/>
            </div>
            {dependentData.SidebarIcon}
            <div className={"p-4 sidebarMenu  " + (props.sidebarState === "minimize" ? 'text-center' : "text-right")}>

                <Link to="/" className="d-block">
                    <SidebarResponsiveButton className="sidebarItem  " icon={<AiFillHome/>}> صفحه
                        اصلی </SidebarResponsiveButton>
                </Link>

                <Link to="profile">
                    <SidebarResponsiveButton className="sidebarItem  "
                                             icon={<CgProfile/>}>پروفایل</SidebarResponsiveButton>
                </Link>

                <Link to="message">
                    <SidebarResponsiveButton className="sidebarItem  " icon={<BiMessageAltCheck/>}>پیام
                        ها</SidebarResponsiveButton>
                </Link>
                <Link to="charts">
                    <SidebarResponsiveButton className="sidebarItem  "
                                             icon={<AiOutlineRadarChart/>}>نمودارها</SidebarResponsiveButton>
                </Link>
                <Link to="charts">
                    <SidebarResponsiveButton className="sidebarItem  "
                                             icon={<AiOutlineRadarChart/>}>نمودارها</SidebarResponsiveButton>
                </Link>

            </div>
        </div>
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
    changeSidebarDisplayAction,
    maximizeSidebarDisplayAction,
    minimizeSidebarDisplayAction
})(Sidebar);