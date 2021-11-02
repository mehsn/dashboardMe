import '../css/sidebar.css';
import {connect} from "react-redux";
import {
    changeDesignAction,
    darkDesignAction,
    lightDesignAction,
    randomDesignAction
} from "../App/Reducer/designReducer";
import {FaAccessibleIcon, IoClose} from "react-icons/all";
import {useState} from "react";
import {
    changeSidebarDisplayAction,
    maximizeSidebarDisplayAction,
    minimizeSidebarDisplayAction
} from "../App/Reducer/componentDisplayReducer";
import {Button} from "@mui/material";

function Sidebar(props) {
    const [sidebarDisplay, setSidebarDisplay] = useState("true");
    console.log(props.sidebarState)

    function sidebarWidth(){
        switch (props.sidebarState){
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
    function sidebarArrowBtn(){
        switch (props.sidebarState){

            case "minimize":
                return (
                    <Button onClick={()=>{
                        props.maximizeSidebarDisplayAction();
                    }}> « </Button>
                )
            default:
                return (
                    <Button onClick={()=>{
                        props.minimizeSidebarDisplayAction();
                    }}> » </Button>
                )

        }
    }

    return (
        <div>
            <div className={"hqSidebar " + (props.sidebarState ? 'd-block' : "d-none")}
                 style={{backgroundColor: props.designState.bgColor,color:props.designState.color,
                 width: sidebarWidth()
                 }}>
                <div className="" onClick={() => {
                    props.changeSidebarDisplayAction();
                }}>
                    <IoClose/>
                </div>
                <div><FaAccessibleIcon/> item 1</div>
                <div> item 2</div>
                <div> item 3</div>
                <div> item 4</div>
                {sidebarArrowBtn()}
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