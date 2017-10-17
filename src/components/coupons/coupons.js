import React from "react";
import { FlatList, Image, TouchableOpacity } from "react-native";
import { Container, Grid, Card, Button, CardItem, Text, View, Title } from "native-base";
import { connect } from "react-redux";
import { concat, isUndefined, lowerCase } from "lodash";

// import style app
import HeaderApp from "../header";
import Isloading from "../isloading";
import { getDataByParams } from "../../api";
import styles from "../../../assets/css/styles";


class Coupons extends React.Component {
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
        const { apiurl, weburl } = this.props;
        let url = { url: weburl + "coupons/shopping/page/" + this.state.page };
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
    _onRefresh() {
        this.setState({
            refreshing: true,
        });
        let url = { url: this.props.weburl + "coupons/shopping/page/1" };
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
        let url = { url: this.props.weburl + "coupons/shopping/page/" + this.state.page };
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

                <HeaderApp navigation={this.props.navigation} menuleft="0" menuright="0" menutitle="Coupons" />
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <Grid style={{ marginHorizontal: 10 }}>
                            <Card>
                                <TouchableOpacity
                                    onPress={() => { navigate('DetailCoupons', { url: item.url, title: item.title }) }}
                                >
                                    <CardItem header>
                                        <Title style={[styles.tile]}>{item.title}</Title>
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
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh.bind(this)}
                    onEndReachedThreshold={0.1}
                    onEndReached={this._onEndReached.bind(this)}
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
export default connect(mapStateToProps, {})(Coupons);