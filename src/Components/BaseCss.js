import {connect} from "react-redux";
import {
    changeDesignAction,
    darkDesignAction,
    lightDesignAction,
    randomDesignAction
} from "../App/Reducer/designReducer";

function BaseCss(props) {

    const css = `
    :root {
  --design-color: ${props.designState.designColor};
  --bg-color: ${props.designState.bgColor};
  --text-color: ${props.designState.textBaseColor};
}
    .bgColor{
            background-color:${props.designState.bgColor};
        }
    .textColor{
            background-color:${props.designState.textBaseColor};
        }
    .designTextColor{
            color:${props.designState.designColor};
        }
     .designShadowColor{
            text-shadow: 0 0 1px ${props.designState.designColor};
        }
        
     .designBgColor{      
           background-color:${props.designState.designColor};
     }
        
           
    `

    return (
        <style>{css}</style>
    );
}


function mapStateToProps(storeState) {
    return {designState: storeState.designStore.design}
}

export default connect(mapStateToProps,
    {changeDesignAction, lightDesignAction, darkDesignAction, randomDesignAction})(BaseCss);
