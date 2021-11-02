import {CSS_COLOR_NAMES_object as cssColor} from "../colors";


export const defaultStore = {
    token: false,
    user: false,
    cart: {},
    design: {
        designColor: "#49ff03",
        bgColor: "#282c34",
        textBaseColor: "#f3ecec",
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
                design: {
                    designColor: action.payload.designColor,
                    bgColor: action.payload.bgColor,
                    textBaseColor: action.payload.textBaseColor,
                }
            }
            console.log(state);
            return state;


        case "randomDesign" :
            console.log("yeah")

            let keys = Object.keys(cssColor);
            let designColor = cssColor[keys[keys.length * Math.random() << 0]];
            let bgColor = cssColor[keys[keys.length * Math.random() << 0]];
            let textBaseColor = cssColor[keys[keys.length * Math.random() << 0]];

            state = {
                ...state,
                design: {
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
                    designColor: cssColor.aqua,
                    bgColor: cssColor.chocolate,
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