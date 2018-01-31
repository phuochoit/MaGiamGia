import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Icon } from "react-native-elements";
import { NavigationActions } from 'react-navigation';

//style
import { headerHight, TitleColor, backgroundStatusColor, background } from "../assets/styles";

class HeaderComponent extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    _onGoBack() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <Header
                leftComponent={this.props.iconLeft ? <Icon name="ios-arrow-back" color={TitleColor} type='ionicon' onPress={this._onGoBack.bind(this)} />: <View />}
                centerComponent={{ text: this.props.title, style: { color: TitleColor , fontSize:18} }}
                rightComponent={<View />}
                statusBarProps={{ barStyle: 'light-content', backgroundColor: backgroundStatusColor }}
                outerContainerStyles={{ backgroundColor: background, height: headerHight }}
            />
        );
    }
}

export default HeaderComponent;