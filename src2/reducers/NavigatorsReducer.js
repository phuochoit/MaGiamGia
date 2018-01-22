import AppNavigator from "../navigators/AppNavigator";
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('HOME'));

const NavigatorsReducer = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);

    return nextState || state;
};
export default NavigatorsReducer;