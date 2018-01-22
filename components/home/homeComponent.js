import React, { Component } from 'react';
import { Text } from 'react-native';
class HomeComponent extends Component {
    componentDidMount(){
        this.props.onFetchTopProduct();
    };
    render() {
        return (
            <Text>HomeComponent.js</Text>
        );
    }
}

export default HomeComponent;