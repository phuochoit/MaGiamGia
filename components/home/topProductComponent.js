import React, { Component } from 'react';
import { Text, View, FlatList, ActivityIndicator, Image} from 'react-native';
import { Divider, Button, h1} from "react-native-elements";
//component
// import HeaderComponent from "../headerComponent";

class TopProductComponent extends Component {
    componentDidMount() {
        this.props.onFetchTopProduct();
    };
    render() {
        if (this.props.topProduct.currentlySending){
            return <ActivityIndicator size="large" color="#0000ff" />
        }
        
        return (
            <View>
                <Text>TopProductComponent</Text>
                <FlatList 
                    ListHeaderComponent={() => { return (<View />); }} 
                    ListFooterComponent={() => { return (<View/>);}}
                    ItemSeparatorComponent={() => {return (<Divider style={{ backgroundColor: 'blue' }} />)}}
                    data={this.props.topProduct.product.data }
                    renderItem={({ item, index }) => {
                        return (
                            <ItemsProduct item={item} index={index}/>
                        );
                    }}
                    keyExtractor={item => item.product_id}
                />
            </View>
        );
    }
}

class ItemsProduct extends Component {
    render() {
        const {item} = this.props;
        return (
            <View style={{ flex: 0, flexDirection: 'row'}}>
                <View style={{  flex:2}}>
                    <Image 
                        source={{ uri: item.image }} 
                        style={{width:100, height:100}}
                        resizeMode="cover"
                        />
                </View>
                <View style={{  flex: 8 }}>
                    <Text h1>{item.name}</Text>
                    <Text>{item.price} - {item.discount}</Text>
                    <Button
                        raised
                        icon={{ name: 'cached' }}
                        title='BUTTON WITH ICON' />

                </View>
            </View>
        );
    }
}


export default TopProductComponent;