import {defaultStore} from "./designReducer";

export default function componentDisplayReducer(state = defaultStore, action) {

    switch (action.type) {
        case "changeSidebarDisplay" :
            let value;
            state.componentDisplay.sidebarDisplay ? value=false : value="maximize";
            state = {
                ...state,
                componentDisplay: {
                    sidebarDisplay: value
                }

            }
            console.log(state.componentDisplay.sidebarDisplay)
            return state;

        case "minimizeSidebarDisplay" :
            state = {
                ...state,
                componentDisplay: {
                    sidebarDisplay: "minimize"
                }

            }
            console.log(state.componentDisplay.sidebarDisplay)
            return state;
     case "maximizeSidebarDisplay" :
            state = {
                ...state,
                componentDisplay: {
                    sidebarDisplay: "maximize"
                }

            }
            console.log(state.componentDisplay.sidebarDisplay)
            return state;


        default:
            return state;
    } 

}
const ChangeSidebarDisplay = "changeSidebarDisplay";
const MaximizeSidebarDisplay = "maximizeSidebarDisplay";
const MinimizeSidebarDisplay = "minimizeSidebarDisplay";


export function changeSidebarDisplayAction() {
    return {type: ChangeSidebarDisplay}
}
export function maximizeSidebarDisplayAction() {
    return {type: MaximizeSidebarDisplay}
}
export function minimizeSidebarDisplayAction() {
    return {type: MinimizeSidebarDisplay}
}
