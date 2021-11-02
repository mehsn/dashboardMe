import '../css/sidebar.css';
import {connect} from "react-redux";
import {
    changeDesignAction,
    darkDesignAction,
    lightDesignAction,
    randomDesignAction
} from "../App/Reducer/designReducer";
import {AiFillHome, BiUpArrow, FaAccessibleIcon, IoClose} from "react-icons/all";
import {useState} from "react";
import {
    changeSidebarDisplayAction,
    maximizeSidebarDisplayAction,
    minimizeSidebarDisplayAction
} from "../App/Reducer/componentDisplayReducer";
import {Button} from "@mui/material";
import SidebarResponsiveButton from "../Components/SidebarResponsiveButton";

function Sidebar(props) {
    const [sidebarDisplay, setSidebarDisplay] = useState("true");
    console.log(props.sidebarState)

    function sidebarWidth() {
        switch (props.sidebarState) {
            case "false":
                return 0
            case "minimize":
                return "5vw"
            case "maximize":
                return "20vw"
            default:
                return "20vw"

        }
    }

    function sidebarArrowBtn() {
        switch (props.sidebarState) {

            case "minimize":
                return (
                    <Button onClick={() => {
                        props.maximizeSidebarDisplayAction();
                    }}> « </Button>
                )
            default:
                return (
                    <Button onClick={() => {
                        props.minimizeSidebarDisplayAction();
                    }}> » </Button>
                )

        }
    }


    return (
        <div>
            <div className={"hqSidebar " + (props.sidebarState ? 'd-block' : "d-none")}
                 style={{
                     backgroundColor: props.designState.bgColor, color: props.designState.textBaseColor,
                     width: sidebarWidth()
                 }}>
                <div className="" onClick={() => {
                    props.changeSidebarDisplayAction();
                }}>
                    <IoClose/>
                </div>
                <br/>
                <div className={"p-3 " + (props.sidebarState === "minimize" ? 'text-center' : "text-right")}>
                    <SidebarResponsiveButton className="sidebarItem" icon={<AiFillHome/>}> صفحه اصلی </SidebarResponsiveButton>
                    <SidebarResponsiveButton icon={<BiUpArrow/>}>item 2</SidebarResponsiveButton>
                    <SidebarResponsiveButton icon={<BiUpArrow/>}>item 3</SidebarResponsiveButton>
                    <SidebarResponsiveButton icon={<BiUpArrow/>}>test</SidebarResponsiveButton>
                    {sidebarArrowBtn()}
                </div>
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