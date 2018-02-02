import React, { Component } from 'react';
import { Text, View } from 'react-native';

// component
import HeaderComponent from "../headerComponent";
import IsloadingComponent from "../isloading";

//container
import IsConnectedContainer from "../../containers/isConnectedContainer";

//styles
import { styles } from "../../assets/styles";

class CategoryComponent extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount() {
        this.props._onFetchCategory();
    }
    render() {
        return (
            <View style={[styles.wrapper]}>
                <HeaderComponent iconLeft={false} title="Danh Mục Khuyến Mãi" navigation={this.props.navigation} />
                
            </View>
        );
    }
}

export default CategoryComponent;