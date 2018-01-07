import React, { Component } from 'react';
import { Text, View } from "react-native";
import Header_Component from "./header";
class HomeComponent extends Component {
    state = {  }
    render() {
        return (
            <View>
                <Header_Component navigation={this.props.navigation} menuleft="0" menuright="0" menutitle="Trang Chủ" />
                <Text>Home</Text>
            </View>
        );
    }
}

export default HomeComponent;