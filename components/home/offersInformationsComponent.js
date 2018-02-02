import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import Swiper from 'react-native-swiper';
import { isUndefined, map} from "lodash";

// style
import { styles} from "../../assets/styles";

// component
import IsloadingComponent from "../isloading";

class OffersInformationsComponent extends Component {
    constructor(props){
        super(props);
        this.state = {};

    }
    componentWillMount() {
        this.props.onFetchOffersInfor();
    }
    componentDidMount() {
    };
    render() {
        if (this.props.offersInfor.currentlySending) {
            return <IsloadingComponent />
        }
        if (!isUndefined(this.props.offersInfor.offers.data)) {
            swiper = (
                <Swiper
                    showsButtons={true}
                    loop={true}
                    autoplay={true}
                    showsPagination={false}
                    autoplayTimeout={3}
                    >
                    {
                        
                        map(this.props.offersInfor.offers.data, (val, key) => (
                            <View key={val.id}>
                                <TouchableOpacity key={val.id} onPress={() => {
                                    Linking.openURL(val.aff_link).catch(err => console.error('An error occurred', err));
                                }}>
                                    <Image
                                        source={{ uri: val.image }}
                                        style={[styles.image_silde]}
                                        resizeMode="cover"
                                    />
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                </Swiper>
            )
        } else {
            swiper = <View />
        }
        return (
            <View style={[styles.wrapper_silde]}>
                <Text style={[styles.margin_wrapper, styles.title]}>Khuyến Mãi HOT</Text>
                {swiper}
            </View>
        );
    }
}


export default OffersInformationsComponent;