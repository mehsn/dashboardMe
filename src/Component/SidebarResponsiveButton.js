import '../assets/css/sidebar.css';
import {connect} from "react-redux";


function SidebarResponsiveButton(props) {

    function sidebarWidth() {

        switch (props.sidebarState) {
            case "minimize":
                return "d-none"
            default:
                return "d-inline"

        }
    }

    return (
        <div  {...props} >
            <span className="hqSidebar-item-icon"> {props.icon} </span>
            <span className={"hqSidebar-item-text " + sidebarWidth()}>{props.children}</span>
        </div>

    )

}

function mapStateToProps(storeState) {
    return {
        sidebarState: storeState.componentDisplayStore.componentDisplay.sidebarDisplay

    }
}


export default connect(mapStateToProps, [])(SidebarResponsiveButton);