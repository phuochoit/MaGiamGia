import React from "react";
import { BackHandler , Alert } from "react-native";
import { connect } from "react-redux";
import { addNavigationHelpers, NavigationActions  } from "react-navigation";

import AppNavigator from "./AppNavigator";

class Nav extends React.Component {
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }
    onBackPress = () => {
        const { dispatch, nav } = this.props;
        console.log('dispatch---', dispatch);
        if (nav.index === 0) {
            return false;
        }
        Alert.alert('onBackPress');
        dispatch(NavigationActions.back());
        return true;
    };

    render() {
        const { navigators } = this.props;        
        const navigation = addNavigationHelpers(addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
        }));
        return (
            <AppNavigator navigation={navigation}  />
        );
    }
}



function mapStateToProps(state) {
    return {
        nav: state.nav
    };
}


export default (AppWithNavigationState = connect(mapStateToProps)(Nav));