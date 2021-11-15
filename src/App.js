import Routes from "./Routes";
import {connect, Provider} from "react-redux";
import './App.css';
import './assets/css/react_animate_css.css';
import './assets/css/cssColorNameClasses.min.css';
import './assets/css/bootstrap461/bootstrap.min.css';
import {changeDesignAction, lightDesignAction, darkDesignAction, randomDesignAction} from "./App/Reducer/designReducer"
import BaseCss from "./Component/BaseCss";



function App(props) {


    function changeToDark() {
        console.log("hi");
    }



    return (

        <div className={"App"} style={{backgroundColor:"#f3f3f3"}} >
        {/*<div className={"App " + props.designState.baseBgColor  +"Bg"}>*/}


            <BaseCss/>
            <Routes>

            </Routes>
            <br/>
            <div style={{
                backgroundColor: props.designState.bgColor,
                color: props.designState.textBaseColor,
                textShadow: "1px 1px 1px" + props.designState.designColor
            }}>
                {props.designState.bgColor} salam
            </div>

            <button onClick={() => props.changeDesignAction({
                designColor: "#313",
                bgColor: "#099",
                textBaseColor: "#492",
            })}> costume
            </button>
            <button onClick={() => props.lightDesignAction()}> light theme</button>
            <button onClick={() => props.darkDesignAction()}> dark theme</button>
            <button onClick={() => props.randomDesignAction()}> random</button>
        </div>

    );
}

function mapStateToProps(storeState) {
    console.log(storeState.designStore.design);
    return {designState: storeState.designStore.design}
}

export default connect(mapStateToProps,
    {changeDesignAction, lightDesignAction, darkDesignAction, randomDesignAction})(App);
