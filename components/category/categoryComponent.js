import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Tile } from "react-native-elements";

// component
import HeaderComponent from "../headerComponent";
import IsloadingComponent from "../isloading";

//container
import IsConnectedContainer from "../../containers/isConnectedContainer";

//styles
import { styles, categoryBannerHeight} from "../../assets/styles";

//
import { CATEGORYLISTDETAIL } from "../../values/screenName";
class CategoryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            imageLoading: true
        });
        // this._onPressGoDetail = this._onPressGoDetail.bind(this);
    }
    componentWillMount() {
        this.props._onFetchCategory();
    }
    _imageLoadingError() {
        this.setState({ imageLoading: false });
    }
    _onPressGoDetail(item){
        this.props.navigation.navigate(CATEGORYLISTDETAIL, item);
    }
    render() {
        if (!this.props.isConnected) {
            return (
                <IsConnectedContainer iconLeft={false} title="Chương Trình Giảm Giá" />
            );
        }
        if (this.props.category.currentlySending) {
            return (
                <View style={[styles.wrapper]}>
                    <HeaderComponent iconLeft={false} title="Danh Mục Khuyến Mãi" navigation={this.props.navigation} />
                    <IsloadingComponent />
                </View>
            );
        }

        return (
            <View style={[styles.wrapper]}>
                <HeaderComponent iconLeft={false} title="Danh Mục Khuyến Mãi" navigation={this.props.navigation} />
                <FlatList
                    style={[styles.mghorizontal, styles.mgtop]}
                    ListHeaderComponent={() => { return (<View />); }}
                    ListFooterComponent={() => { return (<View />); }}
                    data={this.props.category.category}
                    renderItem={({ item, index }) => {
                        return (
                            <Tile
                                imageSrc={this.state.imageLoading ?
                                    { uri: item.image } :
                                    require('../../assets/images/no-image.jpg')}
                                title={item.name}
                                titleStyle={styles.tile_category}
                                featured
                                containerStyle={styles.containerStyle_category}
                                height={categoryBannerHeight}
                                onPress={this._onPressGoDetail.bind(this, item)}
                            />
                        );
                    }}
                    keyExtractor={item => item.id}
                    onRefresh={this._onRefresh}
                    refreshing={this.props.category.currentlySending}
                />
            </View>
        );
    }
}

export default CategoryComponent;