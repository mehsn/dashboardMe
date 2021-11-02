import Header from "../Sections/Header";
import '../css/bootstrap.min.css';
import '../css/bootstrap-grid.min.css';
import '../css/bootstrap-reboot.min.css';
import '../css/main.css';
import Sidebar from "../Sections/Sidebar";
import {connect} from "react-redux";


 function Master(props) {
    function mainWidth(){
        console.log(props.sidebarState + "-----")
        switch (props.sidebarState){
            case "false":
                return "100%"
            case "minimize":
                return "95%"
            case "maximize":
                return "80%"
            default:
                return "100%"

        }
    }
    return (
        <div className="" >
            <Sidebar/>
            <main style={{backgroundColor:props.bgColor,width:mainWidth()   }} >
                <Header/>
                {props.children}
            </main>

        </div>

    );
}

function mapStateToProps(storeState) {
    return {
        // designState: storeState.designStore.design,
        sidebarState: storeState.componentDisplayStore.componentDisplay.sidebarDisplay

    }
}

export default connect(mapStateToProps, null)(Master);