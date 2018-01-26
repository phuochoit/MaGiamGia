import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Image,TouchableOpacity } from 'react-native';
import { Divider, Button, h1 } from "react-native-elements";
import Swiper from 'react-native-swiper';
import { isUndefined, map} from "lodash";

// style
import { styles} from "../../assets/styles";

class OffersInformationsComponent extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this._onPress = this._onPress.bind(this);
    }
    componentWillMount() {
        this.props.onFetchOffersInfor();
    }
    componentDidMount() {
        
    };
    _onPress(items){
        console.log('items', items);
    }
    render() {
        if (this.props.offersInfor.currentlySending) {
            return <ActivityIndicator size="large" color="#0000ff" />
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
                                    console.log('val--', val);
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