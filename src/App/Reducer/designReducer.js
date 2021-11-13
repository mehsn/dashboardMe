import {CSS_COLOR_NAMES as cssColor,CSS_COLOR_NAMES as colorN} from "../colors";


export const defaultStore = {
    token: false,
    user: false,
    cart: {},
    design: {
        designColor: "Green",
        SidebarBgColor: "Salmon",
        bgColor: "Cyan",
        baseBgColor: "Gray",
        textBaseColor: "Black",
    },
    componentDisplay: {
        sidebarDisplay:"maximize",
    }
}

export default function designReducer(state = defaultStore, action) {

    switch (action.type) {
        case "changeDesign" :
            console.log("yeah")
            state = {
                ...state,

                    designColor: action.payload.designColor,
                    bgColor: action.payload.bgColor,
                    textBaseColor: action.payload.textBaseColor,

            }
            console.log(state);
            return state;


        case "randomDesign" :
            console.log("yeah")

            let keys = Object.keys(colorN);
            let designColor = colorN[keys[keys.length * Math.random() << 0]];
            let bgColor = colorN[keys[keys.length * Math.random() << 0]];
            let textBaseColor = colorN[keys[keys.length * Math.random() << 0]];

            state = {
                ...state,
                design: {
                    baseBgColor: state.design.baseBgColor,
                    designColor: designColor,
                    bgColor: bgColor,
                    textBaseColor: textBaseColor,
                }
            }
            console.log(state);
            return state;


        case "lightDesign" :
            state = {
                ...state,
                design: {
                    designColor: cssColor.blueviolet,
                    bgColor: cssColor.lightyellow,
                    textBaseColor: cssColor.darkcyan,
                }
            }
            console.log(state);
            return state;
        case "darkDesign" :
            state = {
                ...state,
                design: {
                    designColor: cssColor.snow,
                    bgColor: cssColor.black,
                    textBaseColor: cssColor.whitesmoke,
                }
            }
            console.log(state);
            return state;


        default:
            return state;
    }


}
const changeDesign = "changeDesign";
const RandomDesign = "randomDesign";
const DarkDesign = "darkDesign";
const LightDesign = "lightDesign";

export function changeDesignAction(colors) {
    return {
        type: changeDesign,
        payload: colors
    }
}

export function darkDesignAction() {
    return {
        type: DarkDesign
    }
}

export function lightDesignAction() {
    return {
        type: LightDesign,
    }
}

export function randomDesignAction() {
    return {
        type: RandomDesign,
    }
}