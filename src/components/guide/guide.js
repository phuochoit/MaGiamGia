import React from "react";
import { FlatList, TouchableOpacity, Image } from "react-native";
import { Container, Grid, Text, View, H3, Card, CardItem, Body, Button } from "native-base";
import { connect } from "react-redux";
import { concat, isUndefined } from "lodash";

import HeaderApp from "../header";
import Isloading from "../isloading";
import { getData } from "../../api";
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
        getData(this.props.apiurl + 'getListTutorial.php?page=' + this.state.page).then((temp) => {
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
        getData(this.props.apiurl + 'getListTutorial.php?page=1').then((temp) => {
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
        getData(this.props.apiurl + 'getListTutorial.php?page=' + this.state.page).then((temp) => {
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
                                            <H3 style={{ color: "#ED1C24" }}>{item.title}</H3>
                                        </CardItem>
                                        <CardItem cardBody>
                                            <Image source={{ uri: item.thumbnail }} style={{ height: 200, width: null, flex: 1 }} />
                                        </CardItem>
                                        <CardItem footer>
                                            <Text>
                                                {item.content}
                                                <Text style={{ color: "#ED1C24" }}>[Xem tiếp]</Text>
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
    };
}

export default connect(mapStateToProps)(Guide);