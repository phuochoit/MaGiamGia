import React from "react";
import { FlatList, TouchableOpacity, Image } from "react-native";
import { Container, Grid, Text, View, H3, Card, CardItem, Body, Button } from "native-base";
import { connect } from "react-redux";
import { concat, isUndefined } from "lodash";

import HeaderApp from "../header";
import Isloading from "../isloading";
import { getDataByParams } from "../../api";
import styles from "../../../assets/css/styles";

class Guide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            isReady: false,
            data: [],
            page: 1
        };
    }
    componentWillMount() {
        let url = { url: this.props.weburl + "huong-dan/page/1" };
        getDataByParams(this.props.apiurl + 'getListTutorial.php', url).then((temp) => {
            if (!isUndefined(temp)) {
                this.setState({
                    data: temp,
                    isReady: true,
                    page: this.state.page + 1
                });
            }
        });

        
    }
    _onRefresh(){
        this.setState({
            refreshing: true,
        });
        let url = { url: this.props.weburl + "huong-dan/page/1"};
        getDataByParams(this.props.apiurl + 'getListTutorial.php', url).then((temp) => {
            if (!isUndefined(temp)) {
                this.setState({
                    data: temp,
                    refreshing: false,
                    page: 2
                });
            }
        });
        
    }
    _onEndReached() {
        let url = { url: this.props.weburl + "huong-dan/page/" + this.state.page };
        getDataByParams(this.props.apiurl + 'getListTutorial.php', url).then((temp) => {
            if (!isUndefined(temp)) {
                this.setState({
                    data: concat(this.state.data, temp),
                    page: this.state.page + 1
                });
            }
        });
    }
    render() {
        const { navigate } = this.props.navigation;
        if (!this.state.isReady) {
            return (<Isloading />);
        }

        return (
            <Container>
                <HeaderApp navigation={this.props.navigation} menuleft="0" menuright="0" menutitle="Hướng Dẫn" />
                <FlatList
                    style={{marginVertical:10}}
                    data={this.state.data}
                    renderItem={
                        ({ item }) => (
                            <Grid style={{marginHorizontal:10}}>
                                <Card>
                                    <TouchableOpacity
                                        onPress={() => { navigate('DetailGuide', { url: item.url, title: item.title }) }}
                                    >
                                        <CardItem header>
                                            <H3 style={[styles.tile]}>{item.title}</H3>
                                        </CardItem>
                                        <CardItem cardBody>
                                            <Image source={{ uri: item.thumbnail }} style={[styles.imagefullwidth]} />
                                        </CardItem>
                                        <CardItem footer>
                                            <Text>
                                                {item.content}
                                                <Text style={[styles.tile]}>[Xem tiếp]</Text>
                                            </Text>
                                        </CardItem>
                                    </TouchableOpacity>
                                </Card>
                            </Grid>
                        )}
                    keyExtractor={item => item.id}
                    onEndReachedThreshold={0.1}
                    onEndReached={this._onEndReached.bind(this)}
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh.bind(this)}
                />
                
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        apiurl: state.ApiUrl,
        weburl: state.WebUrl
    };
}

export default connect(mapStateToProps)(Guide);