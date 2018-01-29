import React, { Component } from 'react';
import { Text, View , ScrollView} from 'react-native';
//component
import HeaderComponent from "../headerComponent";
import TopProductComponent from "./topProductComponent";
import OffersInformationsComponent from "./offersInformationsComponent";
import IsloadingComponent  from "../isloading";
//style
import { styles } from "../../assets/styles";
class HomeComponent extends Component {
    render() {
        return (
            <View style={[styles.wrapper]}>
                <HeaderComponent iconLeft={false} title="Mã Giảm Giá" />
                <ScrollView style={styles.flex0}>
                    <OffersInformationsComponent {...this.props} />
                    <TopProductComponent {...this.props}/>
                </ScrollView>
            </View>
        );
    }
}

export default HomeComponent;