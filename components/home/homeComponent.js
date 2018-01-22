import React, { Component } from 'react';
import { Text, View , ScrollView} from 'react-native';
//component
import HeaderComponent from "../headerComponent";
import TopProductComponent from "./topProductComponent";
import OffersInformationsComponent from "./offersInformationsComponent";

class HomeComponent extends Component {
    
    render() {
        return (
            <View>
                <HeaderComponent iconLeft={false} title="Mã Giảm Giá" />
                <ScrollView>
                    <OffersInformationsComponent {...this.props} />
                    <TopProductComponent {...this.props}/>
                </ScrollView>
            </View>
            
        );
    }
}

export default HomeComponent;