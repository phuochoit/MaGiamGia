import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from "react-native-elements";

//style
import { headerHight, TitleColor, backgroundStatusColor, background } from "../assets/styles";

class HeaderComponent extends Component {
    render() {
        return (
            <Header
                leftComponent={this.props.iconLeft ? { icon: 'menu', color: TitleColor } : <View />}
                centerComponent={{ text: this.props.title, style: { color: TitleColor } }}
                rightComponent={<View />}
                statusBarProps={{ barStyle: 'light-content', backgroundColor: backgroundStatusColor }}
                outerContainerStyles={{ backgroundColor: background, height: headerHight }}
            />
        );
    }
}

export default HeaderComponent;