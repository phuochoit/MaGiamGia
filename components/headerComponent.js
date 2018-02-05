import React, { Component } from 'react';
import { View} from 'react-native';
import { Header, Icon } from "react-native-elements";
import { NavigationActions } from 'react-navigation';
import { AdMobInterstitial } from 'react-native-admob';

//style
import { headerHight, TitleColor, backgroundStatusColor, background } from "../assets/styles";
// admob
import { BANNER_FULL } from "./admob";
let number_back = 0;

class HeaderComponent extends Component {
    constructor(props){
        super(props);
        this.state = ({
            show_ads: false
        });
        
    }
    componentDidMount() {
        
    }

    componentWillUnmount() {
    }

    

    _onGoBack() {
        this.props.navigation.goBack();
    }

    render() {
        
        return (
            
            <Header
                leftComponent={this.props.iconLeft ? <Icon name="ios-arrow-back" color={TitleColor} type='ionicon' onPress={this._onGoBack.bind(this)}/>: <View />}
                centerComponent={{ text: this.props.title, style: { color: TitleColor , fontSize:18} }}
                rightComponent={<View />}
                statusBarProps={{ barStyle: 'light-content', backgroundColor: backgroundStatusColor }}
                outerContainerStyles={{ backgroundColor: background, height: headerHight }}
            />
        );
    }
}

export default HeaderComponent;