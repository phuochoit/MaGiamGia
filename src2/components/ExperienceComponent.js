import React, { Component } from 'react';
import { Text, Button, View} from "react-native";
class ExperienceComponent extends Component {
    state = {  }
    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <View>
                
                <Text>ExperienceComponent</Text>
            </View>
        );
    }
}

export default ExperienceComponent;