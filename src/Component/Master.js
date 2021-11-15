import Header from "../Leyout/Header";
import '../assets/css/bootstrap/bootstrap.min.css';
import '../assets/css/bootstrap/bootstrap-grid.min.css';
import '../assets/css/bootstrap/bootstrap-reboot.min.css';
import '../assets/css/bootstrap/main.css';
import Sidebar from "../Leyout/Sidebar";
import {connect} from "react-redux";


 function Master(props) {
    function mainWidth(){
        switch (props.sidebarState){
            case "false":
                return "100%"
            case "minimize":
                return "95%"
            case "maximize":
                return "82%"
            default:
                return "100%"

        }
    }
    return (
        <div className="masterLayouts" >
            <Sidebar/>
            <main className="pl-4 pr-4 pb-4"  style={{width:mainWidth()   }} >
                <Header/>
                <div className="pt-4" style={{minHeight:"70vh"}} >
                {props.children}
                </div>
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