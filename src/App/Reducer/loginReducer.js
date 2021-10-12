const defaultStore = {
    token: false,
    user: false,
    cart: {},

}

export default function loginReducer(state = defaultStore, action) {

    switch (action.type) {
        case "changeDesign" :
            console.log("yeah")
            state = {
                ...state,
                user: action.payload.user
            }
            console.log(state);
            return state;


        default:
            return state;
    }
    return state;

}
const setUser = "setUser";

export function setUserAction(user) {
    return {
        type: setUser,
        payload: user
    }
}