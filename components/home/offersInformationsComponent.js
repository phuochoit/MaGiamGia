import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Image, StyleSheet } from 'react-native';
import { Divider, Button, h1 } from "react-native-elements";
import Swiper from 'react-native-swiper';
import { isUndefined, map} from "lodash";
//component
// import HeaderComponent from "../headerComponent";

class OffersInformationsComponent extends Component {
    componentDidMount() {
        this.props.onFetchOffersInfor();
    };
    render() {
        if (this.props.offersInfor.currentlySending) {
            return <ActivityIndicator size="large" color="#0000ff" />
        }

        if (!isUndefined(this.props.offersInfor.offers.data)) {
            console.log('this.props.offersInfor.offers.data', this.props.offersInfor.offers.data);


            swiper = (
                <Swiper
                    style={styles.wrapper}
                    showsButtons={true}
                    loop={true}
                    autoplay={true}
                    showsPagination={false}
                    autoplayTimeout={3}
                    >
                    {
                        
                        map(this.props.offersInfor.offers.data, (val, key) => (
                            <View style={styles.slide2} key={val.id}>
                                <Image
                                    source={{ uri: val.image }}
                                    style={{ width: 300, height: 50 }}
                                    resizeMode="cover"
                                />
                            </View>
                        ))
                    }
                </Swiper>
            )
        } else {
            swiper = <View />
        }



        return (
            <View style={{ flex: 0, height: 300 }}>
                <Text>OffersInformationsComponent</Text>
                {swiper}
            </View>
        );
    }
}

var styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})

export default OffersInformationsComponent;