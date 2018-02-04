import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import Swiper from 'react-native-swiper';
import { isUndefined, map} from "lodash";

// style
import { styles} from "../../assets/styles";

// component
import IsloadingComponent from "../isloading";
//screenName
import { HOMECOUPONDETAIL } from "../../values/screenName";

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
    _onPressClickSlide(item){
        this.props.navigation.navigate(HOMECOUPONDETAIL, item)
    }
    render() {
        if (this.props.offersInfor.currentlySending) {
            return (
                <View style={[styles.wrapper_silde]}>
                    <IsloadingComponent />
                </View>);
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
                                <TouchableOpacity key={val.id} onPress={this._onPressClickSlide.bind(this, val ) }>
                                    <Image
                                        source={{ uri: val.image }}
                                        style={[styles.image_silde]}
                                        resizeMode="contain"
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